import {FormSchemaRender, useForm} from "./FormSchemaRender";

export const Image  = () => {
  return (
    <FormSchemaRender
      initialValues={{image: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'}}
      schema={{
        type: 'object',
        properties: {
          image: {
            "title": "图片",
            "type": "string",
            "format": "image",
            default: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
          },
        }
      }}
     />
  )
}


export default {
  Image,
}
