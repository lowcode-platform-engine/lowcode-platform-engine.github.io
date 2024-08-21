import {FormSchemaRender, useForm} from "./FormSchemaRender";

export const InputNumber  = () => {
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
          num: {
            min: 1,
            max: 10,
            default: 2,
            placeholder: "请输入",
            title: '数字',
            type: 'number',
            format: 'number'
          },
        }
      }}
      footer={false} form={form} />
  )
}

export default {
  InputNumber
}
