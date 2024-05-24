import {FormSchemaRender, useForm} from "./FormSchemaRender";

export const ObjectCom  = () => {
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
          "objValue": {
            "title": "对象配置案例",
            "type": "object",
            "properties": {
              "age": {
                "title": "年龄",
                "min": "0",
                "max": "100",
                "type": "number"
              },
              "formatImage": {
                "title": "图片格式",
                "format": "image",
                "type": "string"
              }
            }
          }
        }
      }}
      footer={false} form={form} />
  )
}
