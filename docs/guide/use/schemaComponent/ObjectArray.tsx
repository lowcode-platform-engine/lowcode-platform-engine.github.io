import {FormSchemaRender, useForm} from "./FormSchemaRender";

export const ObjectArray  = () => {
  const form = useForm();
  return (
    <FormSchemaRender
      initialValues={{
        testArr: [
          {
            name: '测试'
          }
        ]
      }}
      schema={{
        type: 'object',
        properties: {
          "testArr": {
            "title": "测试集合",
            "type": "array",
            "items": {
              "type": "object",
              "properties": {
                "name": {
                  "title": "测试对象名称",
                  "type": "string",
                  "default": "测试"
                }
              }
            }
          }
        }
      }}
      footer={false} form={form} />
  )
}

export default {
  ObjectArray
}
