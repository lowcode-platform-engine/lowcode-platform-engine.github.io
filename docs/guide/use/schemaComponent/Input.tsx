import {FormSchemaRender, useForm} from "./FormSchemaRender";

export const Input  = () => {
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
          input: {
            min: 1,
            max: 10,
            placeholder: "请输入",
            title: '文字',
            type: 'string',
            widget: 'input'
          },
        }
      }}
      footer={false} form={form} />
  )
}
