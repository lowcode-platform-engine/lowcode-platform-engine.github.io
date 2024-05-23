import {FormSchemaRender, useForm} from "./FormSchemaRender";

export const ObjectArray  = () => {
  const form = useForm();
  return (
    <FormSchemaRender
      style={{width: 620}}
      displayType={'row'}
      labelAlign={'right'}
      labelWidth={100}
      column={1}
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
