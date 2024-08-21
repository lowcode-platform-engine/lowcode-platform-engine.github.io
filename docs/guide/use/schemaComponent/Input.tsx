import {FormSchemaRender} from "./FormSchemaRender";

export const Input  = () => {
  return (
    <FormSchemaRender
      initialValues={{}}
      schema={{
        type: 'object',
        properties: {
          input: {
            maxLength : 10,
            placeholder: "请输入",
            title: '文字',
            type: 'string',
            format: 'text'
          },
        }
      }}
       />
  )
}

export default {
  Input
}
