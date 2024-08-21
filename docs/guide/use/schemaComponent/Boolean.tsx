import {FormSchemaRender, useForm} from "./FormSchemaRender";

export const CheckBox  = () => {
  return (
    <FormSchemaRender
      initialValues={{val: ['1']}}
      schema={{
        type: 'object',
        properties: {
          val: {
            "title": "复选框",
            "type": "array",
            "widget": "checkbox",
            "items": {
              "type": "string",
              "enum": [
                "1",
                "2",
                "3"
              ],
              "enumNames": [
                "test1",
                "test2",
                "test3"
              ]
            }
          },
        }
      }}
     />
  )
}


export const SwitchCom  = () => {
  return (
    <FormSchemaRender
      initialValues={{ boolValue: true}}
      schema={{
        type: 'object',
        properties: {
          boolValue: {
            "title": "是否通过",
            default: true,
            "type": "boolean"
          },
        }
      }}
      />
  )
}

export default {
  CheckBox,
  SwitchCom
}
