import {FormSchemaRender, useForm} from "./FormSchemaRender";

export const EventComp  = () => {
  return (
    <FormSchemaRender
      initialValues={{onClick: "function fun(){}"}}
      schema={{
        title: "点击函数",
        type: "function",
        properties: {
          onClick: {
            title: "点击函数",
            type: "function",
          },
        }
      }}
     />
  )
}

export default {
  EventComp
}
