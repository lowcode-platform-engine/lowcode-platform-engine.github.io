import {FormSchemaRender, useForm} from "./FormSchemaRender";

export const DatePicker  = () => {
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
          "date": {
            "title": "日期选择",
            "format": "date",
            "type": "string",
            "default": "2024-05-09"
          }
        }
      }}
      footer={false} form={form} />
  )
}

export const TimePicker  = () => {
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
          "time": {
            "title": "时间选择",
            "format": "time",
            "type": "string",
            "default": "12:23:23"
          }
        }
      }}
      footer={false} form={form} />
  )
}

export const DateTimePicker  = () => {
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
          "dateTime": {
            "title": "日期时间选择",
            "format": "dateTime",
            "type": "string",
            "default": "2022-04-23 12:34:23"
          }
        }
      }}
      footer={false} form={form} />
  )
}
