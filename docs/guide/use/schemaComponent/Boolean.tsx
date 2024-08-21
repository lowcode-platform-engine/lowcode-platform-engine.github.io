import {FormSchemaRender, useForm} from "./FormSchemaRender";

export const Boolean  = () => {
  const form = useForm();
  return (
    <FormSchemaRender
      style={{width: 540}}
      displayType={'row'}
      labelAlign={'right'}
      labelWidth={100}
      column={1}
      schema={{
        type: 'object',
        properties: {
          selectVal: {
            "title": "是否通过",
            default: true,
            "type": "boolean"
          },
        }
      }}
      footer={false} form={form} />
  )
}


export const SwitchCom  = () => {
  const form = useForm();
  return (
    <FormSchemaRender
      style={{width: 540}}
      displayType={'row'}
      labelAlign={'right'}
      labelWidth={100}
      column={1}
      schema={{
        type: 'object',
        properties: {
          selectVal: {
            "title": "是否通过",
            default: true,
            widget: 'switch',
            "type": "boolean"
          },
        }
      }}
      footer={false} form={form} />
  )
}

export default {
  Boolean,
  SwitchCom
}
