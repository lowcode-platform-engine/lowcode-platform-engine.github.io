import {FormSchemaRender} from "./FormSchemaRender";

export const InputNumber  = () => {
  return (
    <FormSchemaRender
      initialValues={{num: 2}}
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
    />
  )
}

export default {
  InputNumber
}
