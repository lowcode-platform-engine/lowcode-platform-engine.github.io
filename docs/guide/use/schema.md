# 类型定义

## 控件配置项


## 常见配置

### input

#### 选项

| 名称      | 类型     | 必填 | 可选项    | 默认值 | 说明         |
|:--------|:-------|:---|:-------|:----|------------|
| title   | String | 是  | --     | --  | 表单配置的label |
| tooltip | String | 否  | --     | --  | 表单项辅助提示    |
| type    | String | 是  | string | --  | JS 中的基本类型， |
| default | String | 否  | --     | --  | 属性的默认值     |
| min     | Number | 否  | --     | --  | 输入框的最小长度   |
| max     | Number | 否  | --     | --  | 输入框的最大长度   |

#### 示例

```ts
/**
 * common-text
 * @Component CommonText
 * @title 公共文字组件
 */
export default interface CommonTextIProps {
  /**
   * 文字
   *
   * @title 文字
   * @type string
   * @min 1
   * @max 10
   * @format text
   * @default ''
   */
  text: string;
}
```

### inputNumber

#### 选项

| 名称      | 类型     | 必填 | 可选项    | 默认值 | 说明         |
|:--------|:-------|:---|:-------|:----|------------|
| title   | String | 是  | --     | --  | 表单配置的label |
| tooltip | String | 否  | --     | --  | 表单项辅助提示    |
| type    | String | 是  | string | --  | JS 中的基本类型， |
| default | Number | 否  | --     | --  | 属性的默认值     |
| min     | Number | 否  | --     | --  | 输入框的最小长度   |
| max     | Number | 否  | --     | --  | 输入框的最大长度   |

#### 示例

```ts
/**
 * common-text
 * @Component CommonText
 * @title 公共文字组件
 */
export default interface CommonTextIProps {
  /**
   * 文字
   *
   * @title 文字
   * @type string
   * @min 1
   * @max 10
   * @format text
   * @default ''
   */
  text: string;
}
```


