import {FormSchemaRender} from "./FormSchemaRender";

export const ObjectCom  = () => {
  return (
    <FormSchemaRender
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
      />
  )
}

export default {
  ObjectCom
}
