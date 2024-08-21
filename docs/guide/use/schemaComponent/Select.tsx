import {FormSchemaRender, useForm} from "./FormSchemaRender";

export const Select  = () => {
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
          selectVal: {
            default: '1',
            placeholder: "请输入",
            "title": "下拉选择单选",
            "enum": [
              "1",
              "2",
              "3"
            ],
            "enumNames": [
              "test1",
              "test2",
              "test3"
            ],
            "type": "string"
          },
        }
      }}
      footer={false} form={form} />
  )
}

export default {
  Select
}
