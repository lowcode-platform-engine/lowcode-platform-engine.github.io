import {Form, Spin} from "antd";
import {useEffect, useMemo, useState} from "react";
import './index.scss'
import loader from "../../../utils/loader";

function formSchema(schema: Record<any, any>): any[] {
  // @ts-ignore
  const {type, properties = {}, Component, name, title} = schema;

  const resultSchema = [];

  for (const key in properties) {
    const {
      title,
      type,
      format,
      enum: _enum,
      enumNames,
      widget,
      items,
      required,
      properties: _properties,
      ...others
    } = properties[key];
    const { default: _, ...reset } = others || {}
    const commonFormItemProps = {
      label: title,
      name: key
    }
    // 存在这个说明是需要下拉选择的
    if (_enum && enumNames && ['string', 'number', 'boolean'].includes(type)) {
      const options = (_enum || []).map((item: string, index: number) => {
        return {
          label: enumNames[index],
          value: item
        }
      }) || []
      resultSchema.push({
        componentName: "SingleSelectSetter",
        props: {
          ...reset,
          formItemProps: {
            ...commonFormItemProps
          },
          options: options,
          setter: 'SingleSelectSetter'
        }
      })
    }
    // 布尔类型
    else if (type === 'boolean') {
      resultSchema.push({
        componentName: "BooleanSetter",
        props: {
          ...reset,
          formItemProps: {
            ...commonFormItemProps
          },
          setter: 'BooleanSetter'
        }
      })
    }
    // 字符类型
    else if (type === 'string') {
      // 颜色
      if (format === 'color') {
        resultSchema.push({
          componentName: "ColorSetter",
          props: {
            ...reset,
            formItemProps: {
              ...commonFormItemProps
            },
            setter: 'ColorSetter'
          }
        })
      }
      else if (format === 'date') {
        resultSchema.push({
          componentName: "DateSetter",
          props: {
            ...reset,
            formItemProps: {
              ...commonFormItemProps
            },
            setter: 'DateSetter'
          }
        })
      }
      else if (format === 'time') {
        resultSchema.push({
          componentName: "TimeSetter",
          props: {
            ...reset,
            formItemProps: {
              ...commonFormItemProps
            },
            setter: 'TimeSetter'
          }
        })
      }
      else if (format === 'dateTime') {
        resultSchema.push({
          componentName: "DateTimeSetter",
          props: {
            ...reset,
            formItemProps: {
              ...commonFormItemProps
            },
            setter: 'DateTimeSetter'
          }
        })
      }
      else if (format === 'image') {
        resultSchema.push({
          componentName: "ImageSetter",
          props: {
            ...reset,
            formItemProps: {
              ...commonFormItemProps
            },
            setter: 'ImageSetter'
          }
        })
      }
      else {
        resultSchema.push({
          componentName: "StringSetter",
          props: {
            ...reset,
            formItemProps: {
              label: title,
              name: key
            },
            setter: 'StringSetter'
          }
        })
      }
    }

    // 数字类型
    else if (type === 'number') {
      resultSchema.push({
        componentName: "NumberSetter",
        props: {
          ...reset,
          formItemProps: {
            label: title,
            name: key
          },
          setter: 'NumberSetter'
        }
      })
    }

    // 数字类型
    else if (type === 'function') {
      resultSchema.push({
        componentName: "EventSetter",
        props: {
          ...reset,
          formItemProps: {
            label: title,
            name: key
          },
          setter: 'EventSetter'
        }
      })
    }

    // 集合类型
    else if (type === 'array') {
      // @ts-ignore
      const { type, format, enum: _enum, enumNames} = items;
      const options = (_enum || []).map((item: string, index: number) => {
        return {
          label: enumNames[index],
          value: item
        }
      }) || [];

      // 单一类型的数据
      if (['string', 'number', 'boolean'].includes(type)) {
        const callback = () => {
          resultSchema.push({
            componentName: "MultipleSelectSetter",
            props: {
              ...reset,
              formItemProps: {
                ...commonFormItemProps
              },
              options: options,
              setter: 'MultipleSelectSetter'
            }
          })
        }
        if (widget) {
          if (widget === 'checkbox') {
            resultSchema.push({
              componentName: "CheckboxSetter",
              props: {
                ...reset,
                formItemProps: {
                  ...commonFormItemProps
                },
                options: options,
                setter: 'CheckboxSetter'
              }
            })
          }
          else {
            callback();
          }
        }
        else {
          callback();
        }
      }
      // 复合类型的数据
      else {
        if (['object'].includes(type)) {
          const { items } = properties[key];
          const { type: __type, properties: __properties, required: __required, title: __title, ...others } = items;
          resultSchema.push({
            componentName: "ArrayObjectSetter",
            props: {
              ...reset,
              formItemProps: {
                ...commonFormItemProps
              },
              item: {
                componentName: "ObjectSetter",
                props: {
                  ...others,
                  formItemProps: {
                    label: __title,
                    name: `${commonFormItemProps.name}.{{$i}}`
                  },
                  items: formSchema(items),
                  setter: 'ObjectSetter'
                }
              },
              setter: 'ArrayObjectSetter'
            }
          })
        }
      }
    }
    // 对象类型
    else if (['object'].includes(type)) {
      resultSchema.push({
        componentName: "ObjectSetter",
        props: {
          ...reset,
          formItemProps: {
            ...commonFormItemProps
          },
          items: formSchema(properties[key]),
          setter: 'ObjectSetter'
        }
      })
    }
  }
  return resultSchema;
}


function generateRandomEightCharString() {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let randomString = '';
  for (let i = 0; i < 8; i++) {
    randomString += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return randomString;
}


const isDEV = () => {
  return location.host.includes('localhost') ||  location.host.includes('127.0.0.1')
}

export const FormSchemaRender = (props: any = {}) => {
  const [id, setId] = useState(generateRandomEightCharString());
  const schema  = props.schema || {};
  const initialValues  = props.initialValues || {};
  const [form] = Form.useForm();

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        /*const file = isDEV()? staticMAp: staticMAp1
        const loadService = new LoadService({
          enableSandbox: true
        })
        const res = await loadService.importScript(file.js);*/
        await loader.LibSetterRender()
        //console.log(res);
        /*if (!document.querySelector('#setterRenderStyle')) {
          const style = await loadService.importStyle(file.css);
          console.log(style);
          style.id='setterRenderStyle'
          document.querySelector('body').appendChild(style);
        }*/

        //console.log(window)

      }catch (e) {
        setError(e)
        console.log(e)
      }

      setLoading(false);
    })()

  }, []);

  const newSchema = formSchema(schema);
  console.log(newSchema, initialValues)

  const initRender = () => {
    const {ReactDOM, React, SetterRender} = window as any

    ReactDOM.createRoot(document.getElementById(id)!).render(React.createElement(SetterRender.default, {
      form: form,
      schema: newSchema,
      initialValues: initialValues,
      onChange: (values: Record<any, any>) => {
        console.log(values)
      }

    }))
  }

  const mounted = useMemo(() => {
    return !loading && !error
  }, [loading, error])

  useEffect(() => {
    if (mounted) {
      setTimeout(() => {
        initRender()
      })
    }
  }, [mounted]);

  if (!mounted) {
    return  <Spin className={'loading'} spinning={true} />
  }

  return (
    <div id={id} className={'exampleItem'}>

    </div>
  )
}

export const useForm = Form.useForm;

export default {
  FormSchemaRender,
  useForm
}
