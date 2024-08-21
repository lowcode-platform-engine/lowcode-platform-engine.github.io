import {FormSchemaRender} from "./FormSchemaRender";

export const ColorPicker  = () => {
  return (
    <FormSchemaRender
      initialValues={{
        color: '#470c0c'
      }}
      schema={{
        type: 'object',
        properties: {
          color: {
            title: '颜色',
            type: 'string',
            format: 'color',
            default: '#470c0c'
          },
        }
      }}
      />
  )
}

export default {
  ColorPicker
}
