# 物料DSL解析

## 概述

当前业内大多数低代码平台的物料配置项通常通过 JSON Schema 来描述。这种方式虽然灵活，但在实际开发中存在一些明显的痛点：

1. 学习成本高：特别是对于拥有复杂配置项的物料，理解和手写 Schema 需要较高的专业知识，给开发者带来了额外的负担。
2. 重复工作量大：对于使用 TypeScript 的开发者来说，手写 JSON Schema 的过程尤为繁琐。开发者通常需要为同一个属性定义两套配置：一套是用于代码类型校验的 Interface.ts 文件，另一套是描述 Schema 的 JSON 文件，这大幅增加了开发成本。

通过自动化生成配置项，可以有效降低开发难度，提高开发效率，同时减少维护成本。

## 基本流程

![ast解析流程](./images/ast/code-ast.png)

## 设计原理

开发者可以使用 TypeScript 编写物料的 props 类型文件 (Interface.ts)，然后通过工具将其解析成 AST，再根据 AST 中的字段和注释自动生成标准的 DSL；

### 元数据解析

元数据解析主要负责解析物料的基本信息，包括物料名称、物料描述、物料版本等。

1. 通过 ts 提供的 getJSDocTags Api 获取字段对应的注释；
2. 然后逐一解析每一行注释，提取出字段的名称、已经对应的值；


``` typescript
// 逐一解析每一行注释
function parseJSDocCommentV2(docTags: readonly JSDocTag[]): Record<string, any> {
  const result: Record<string, any> = {};
  docTags.forEach(item => {
    if (item.tagName.escapedText) {
      result[item.tagName.escapedText] = item.comment
    }else {
      console.log(item)
    }
  })
  return result;
}

const jsdoc = ts.getJSDocTags(node);
const schema: Record<string, any> = {
  type: 'object',
  properties: {},
  required: [],
};
const property = parseJSDocCommentV2(jsdoc);
for(const key in property) {
   // 标记解析的入口
   if (key === 'Component') {
      schema[key] = true
   } else {
      schema[key] = property[key]
   }
}

```

### 字段解析

#### 注释解析

#### 默认值解析

