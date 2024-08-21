import {FormSchemaRender, useForm} from "./FormSchemaRender";

export const ColorPicker  = () => {
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
            title: '颜色',
            type: 'string',
            format: 'color',
            default: '#470c0c'
          },
        }
      }}
      footer={false} form={form} />
  )
}

export default {
  ColorPicker
}
