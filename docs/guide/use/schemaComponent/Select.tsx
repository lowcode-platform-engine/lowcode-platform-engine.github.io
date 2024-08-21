import {FormSchemaRender} from "./FormSchemaRender";

export const SingleSelectSetter  = () => {
  return (
    <FormSchemaRender
      initialValues={{selectVal: '1'}}
      schema={{
        type: 'object',
        properties: {
          selectVal: {
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
      />
  )
}

export const MultipleSelectSetter  = () => {
  return (
    <FormSchemaRender
      initialValues={{mulSelectVal: ['1']}}
      schema={{
        type: 'object',
        properties: {
          mulSelectVal: {
            "title": "下拉选多选",
            "type": "array",
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

export default {
  SingleSelectSetter,
  MultipleSelectSetter
}
