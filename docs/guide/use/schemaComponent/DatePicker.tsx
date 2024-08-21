import {FormSchemaRender} from "./FormSchemaRender";

export const DatePicker  = () => {
  return (
    <FormSchemaRender
      initialValues={{
        date: '2024-05-09'
      }}
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
     />
  )
}

export const TimePicker  = () => {
  return (
    <FormSchemaRender
      initialValues={{
        time: '12:23:23'
      }}
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
      />
  )
}

export const DateTimePicker  = () => {
  return (
    <FormSchemaRender
      initialValues={{
        dateTime: '2022-04-23 12:34:23'
      }}
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
      />
  )
}

export default {
  DatePicker,
  TimePicker,
  DateTimePicker
}
