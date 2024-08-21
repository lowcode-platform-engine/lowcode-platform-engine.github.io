import { Spin } from 'antd';
import './index.scss'
import {useEffect, useMemo, useState} from "react";
import {LoadService} from "../../utils/LoadService";
const staticMAp = {
  js: '/playground/index.umd.js',
  css: '/playground/style.css'
}

const staticMAp1 = {
  js: '/lowcode-platform-docs/playground/index.umd.js',
  css: '/lowcode-platform-docs/playground/style.css'
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
   * 年龄
   *
   * @title 年龄
   * @minimum 0
   * @maximum 100
   * @type number
   */
  age?: number;

  /**
   * 名称
   *
   * @title 测试图片格式
   * @type string
   * @format image
   */
  formatImage?: string;

  /**
   * 测试对象
   *
   * @title 测试对象
   * @type object
   * @default {}
   */
  testObj?: TestObj


  /**
   * 测试集合
   *
   * @title 测试集合
   * @type array
   * @default []
   */
  testArr?: TestArr[]

  /**
   * 对象配置
   *
   * @title 对象配置案例
   * @type object
   */
  objValue?: ObjectValue


  /**
   * 下拉选择
   *
   * @title 下拉选择单选
   * @type string
   */
  selectVal?: TestSelectValue

  /**
   * 是否通过
   *
   * @title 是否通过
   * @type boolean
   * @default true
   */
  boolValue?: boolean

  /**
   * 日期选择
   *
   * @title 日期选择
   * @type string
   * @format date
   * @default 2024-05-09
   */
  date?: string;

  /**
   * 日期选择
   *
   * @title 日期选择
   * @type string
   * @widget datePicker
   * @default 2024-05-09
   */
  date1?: string;

  /**
   * 时间选择
   *
   * @title 时间选择
   * @type string
   * @format time
   * @default 12:23:23
   */
  time?: string;

  /**
   * 时间选择
   *
   * @title 时间选择
   * @type string
   * @widget timePicker
   * @default 12:23:23
   */
  time1?: string;

  /**
   * 日期时间选择
   *
   * @title 日期时间选择
   * @type string
   * @format dateTime
   * @default 2022-04-23 12:34:23
   */
  dateTime?: string;

}
interface TestObj {
  /**
   * 名称
   *
   * @title 测试对象名称
   * @type string
   * @default 测试
   */
  name: string;

  /**
   * 名称
   *
   * @title 测试对象描述
   * @type string
   */
  desc: string;

}
interface TestArr {
  /**
   * 名称
   *
   * @title 测试对象名称
   * @type string
   * @default 测试
   */
  name: string
}
export interface ObjectValue {
  /**
   * 年龄
   *
   * @title 年龄
   * @min 0
   * @max 100
   * @type number
   */
  age: number;

  /**
   * 名称
   *
   * @title 图片格式
   * @type string
   * @format image
   */
  formatImage: string;
}


enum TestSelectValue {
  test1 = '1',
  test2 = '2',
  test3 = '3',
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