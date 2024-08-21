import { Spin } from 'antd';
import './index.scss'
import {useEffect, useMemo, useState} from "react";
import {LoadService} from "../../utils/LoadService";
const staticMAp = {
  js: '/playground/index.umd.js',
  css: '/playground/style.css'
}

const staticMAp1 = {
  js: '/playground/index.umd.js',
  css: '/playground/style.css'
}

const defaultSchema = `
/**
 * @Component CommonHeader
 * @name common-header
 * @title 测试组件
 */
export default interface CommonHeaderIProps {
  /**
   * 名称
   *
   * @title 名称
   * @type string
   * @default 测试
   */
  name?: string;
  
  /**
   * 复选框
   *
   * @title 复选框
   * @type string
   * @widget checkbox
   * @default ['1']
   */
  checkbox?: TestSelectValue[];
  
  
  /**
   * 图片选择
   *
   * @title 图片选择
   * @type string
   * @format image
   * @default https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg
   */
  image?: string

  /**
   * 日期选择器
   *
   * @title 日期选择器
   * @type string
   * @format date
   * @default 2021-03-23
   */
  date?: string;

  /**
   * 时间选择器
   *
   * @title 时间选择器
   * @type string
   * @format time
   * @default 12:23:24
   */
  time?: string;

  /**
   * 日期时间选择器
   *
   * @title 日期时间选择器
   * @type string
   * @format dateTime
   * @default 2021-03-23 12:23:24
   */
  dateTime?: string;

  /**
   * 颜色
   *
   * @title 颜色
   * @type string
   * @format color
   * @default #000000
   */
  color?: string;

  /**
   * 年龄
   *
   * @title 年龄
   * @minimum 0
   * @maximum 100
   * @type number
   */
  age?: number;

  /**
   * 开关
   *
   * @title 开关
   * @type boolean
   * @default true
   */
  switch: boolean;

  /**
   * 下拉选择
   *
   * @title 下拉选择单选
   * @type string
   */
  selectVal?: TestSelectValue;

  /**
   * 下拉多选择
   *
   * @title 下拉选多择单选
   * @type string
   */
  selectMulVal?: TestSelectValue[];


  /**
   * 对象配置
   *
   * @title 测试对象配置
   * @type string
   */
  objVal?: TestObj;

  /**
   * 对象集合配置
   *
   * @title 对象集合配置
   * @minItems 1
   * @maxItems 3
   * @type string
   */
  arrayObjVal?: TestObj[];
}

// @ts-ignore
enum TestSelectValue {
  test1 = '1',
  test2 = '2',
  test3 = '3',
}
interface Age {

  /**
   * 年龄
   *
   * @title 年龄
   * @minimum 0
   * @maximum 100
   * @type number
   */
  age?: number;
}


/**
 * 测试字段
 * @title 测试字段
 */
interface TestObj {
  /**
   * 名称
   *
   * @title 名称
   * @type string
   * @default 测试
   */
  name?: string;

  /**
   * 日期选择器
   *
   * @title 日期选择器
   * @type string
   * @format date
   * @default 2021-03-23
   */
  date?: string;
}
`
const isDev = true;
const isDEV = () => {
  return location.host.includes('localhost') ||  location.host.includes('127.0.0.1')
}
export default() => {

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const file = isDEV()? staticMAp: staticMAp1
        const loadService = new LoadService({
          enableSandbox: true
        })
        const res = await loadService.importScript(file.js);
        console.log(res);
        if (!document.querySelector('#playgroundStyle')) {
          const style = await loadService.importStyle(file.css);
          console.log(style);
          style.id='playgroundStyle'
          document.querySelector('body').appendChild(style);
        }

        console.log(window)

      }catch (e) {
        setError(e)
        console.log(e)
      }

      setLoading(false);
    })()

  }, []);


  const initPlayground = () => {
    const {ReactDOM, React, SchemaOnLinePlayground} = window as any

    ReactDOM.createRoot(document.getElementById('playgroundView')!).render(React.createElement(SchemaOnLinePlayground.SchemaPreviewOnline, {
      height: 'calc(100vh - 72px)',
      defaultSchema: defaultSchema
    }))
  }

  const mounted = useMemo(() => {
    return !loading && !error
  }, [loading, error])

  useEffect(() => {
    console.log("mounted", mounted)
    if (mounted) {
      setTimeout(() => {
        initPlayground()
      })
    }
  }, [mounted]);

  if (!mounted) {
    return  <Spin className={'loading'} spinning={true} />
  }
  return (
    <div className={'playgroundView'} >
      <div id={'playgroundView'}>

      </div>
    </div>
  )
}