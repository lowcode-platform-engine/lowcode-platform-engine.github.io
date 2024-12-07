import {Result} from "antd";

const ErrorView = () => {
  return (
    <div className={'loadingFormContainer'}>
      <Result
        status="error"
        title="渲染异常"
        subTitle=""
      />
    </div>
  )
}


const ComponentOne = (_props: any) => {
  return (
    <div>
      这是组件1cccccccccccccccccccccccc
    </div>
  )

}

const Container = (props: any) => {
  return (
    <div style={props.style || {}}>
      {props.children}
    </div>
  )
}

const Header = (props: any) => {
  return (
    <div style={props.style || {}}>
      这是{props.name || 'Header'}
    </div>
  )
}

const Sider = (props: any) => {
  return (
    <div style={props.style || {}}>
      这是{props.name || 'Sider'}
    </div>
  )
}

const Content = (props: any) => {
  return (
    <div style={props.style || {}}>
      这是{props.name || 'Content'}
    </div>
  )
}

const Footer = (props: any) => {
  return (
    <div style={props.style || {}}>
      这是{props.name || 'Footer'}
    </div>
  )
}

const schema = {
  "version": "1.0.2",
  "packagesMap": [],
  "componentsMap": [],
  "componentsTree": [
    {
      componentName: 'Component',
      fileName: 'example',
      "props": {},
      "children": [
        {
          "children": [],
          "componentName": "Header",
          "exportName": "Header",
          "id": "XXfdEXujjZV5kou1t863V",
          "name": "header",
          "props": {
            "name": "Header内容",
            "style": {
              "text-align": "center",
              "color": "rgb(255, 255, 255)",
              "height": "64px",
              "padding-inline": "48px",
              "line-height": "64px",
              "background-color": "rgb(64, 150, 255)"
            }
          }
        },
        {
          "componentName": "Container",
          "exportName": "Container",
          "id": "XXfdEXujfdfdgu1t863V",
          "name": "container",
          "props": {
            "style": {
              "display": 'flex', "flex-direction": 'row'
            }
          },
          "children": [
            {
              "children": [],
              "componentName": "Sider",
              "exportName": "Sider",
              "id": "XXwecfjjZV5kou1t863V",
              "name": "sider",
              "props": {
                "name": "Sider内容",
                "style": {
                  "text-align": "center",
                  "line-height": "120px",
                  "color": "rgb(255, 255, 255)",
                  "background-color": "rgb(22, 119, 255)",
                  "flex": "0 0 25%",
                  "max-width": "25%",
                  "min-width": "25%",
                  "width": "25%"
                },
              }
            },
            {
              "children": [],
              "componentName": "Content",
              "exportName": "Content",
              "id": "XXwecfjjZVitdrt63V",
              "name": "content",
              "props": {
                "name": "Content内容",
                "style": {
                  "text-align": "center",
                  "min-height": "120px",
                  "line-height": "120px",
                  "color": "rgb(255, 255, 255)",
                  "background-color": "rgb(9, 88, 217)",
                  "flex": "auto"
                }
              }
            },
          ],

        },
        {
          "children": [],
          "componentName": "Footer",
          "exportName": "Footer",
          "id": "XXfdEXujjZV5kou1t863V",
          "name": "footer",
          "props": {
            "name": "Footer内容",
            "style": {
              "text-align": "center",
              "color": "rgb(255, 255, 255)",
              "height": "64px",
              "padding-inline": "48px",
              "line-height": "64px",
              "background-color": "rgb(64, 150, 255)"
            }
          }
        },
      ]
    }
  ]
}

export default {
  schema,
  ErrorView,
  ComponentOne,
  Container,
  Header,
  Sider,
  Content,
  Footer
}