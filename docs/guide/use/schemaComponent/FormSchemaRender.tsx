import FormRender, { connectForm, useForm } from 'form-render';
import {Form} from "antd";

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
            }
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



export {
  connectForm, useForm
}

export const FormSchemaRender = (props: any = {}) => {
  const schema  = props.schema || {};
  const [form] = Form.useForm();
  const newSchema = formSchema(schema);
  console.log(newSchema)

  const Render = (window as any)?.SchemaSetter?.SetterRender;
  if (!Render) {
    return <></>
  }

  return (
    <Render
      form={form}
      schema={schema}
      initialValues={{}}
      onChange={(values: Record<any, any>) => {
        console.log('form values', values)
      }}

    ></Render>
  )
}

export default {
  FormSchemaRender: FormSchemaRender
}