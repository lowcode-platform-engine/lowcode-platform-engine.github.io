export type Status = 'unset' | 'loading' | 'ready' | 'error';
type LoadFormat = 'UMD' | 'ES'
export interface LoadServiceOptions {
  /**
   * 是否启用沙箱执行组件
   */
  enableSandbox?: boolean;

  /**
   * 加载组件的格式
   */
  format?: LoadFormat

  /**
   * 组件名称
   */
  componentName?: string;

  /**
   * 组件版本
   */
  version?: string;
}

// export const COMPONENT_APP_UMD = 'ComponentLoadUmd';
export const COMPONENT_APP_UMD = 'MyLib';
export const COMPONENT_APP_VERSION_DEFAULT = '1.0.0';

/**
 * 加载缓存
 */
const CACHE_LOAD_MAP = new Map<string, any>();

const CACHE_CSS_MAP = new Map<string, string>()
export class LoadService {
  public url = ''
  public options: LoadServiceOptions = {
    componentName: COMPONENT_APP_UMD,
    version: COMPONENT_APP_VERSION_DEFAULT
  }
  constructor(options: LoadServiceOptions) {
    this.options = options;
  }

  public importScript(url: string, props: Record<any, any> = {}): any {
    const { format = 'UMD' } = this.options;
    if (format === 'UMD') {
      return this.importScriptUmdVersion2(url, props)
    }
    if (format === 'ES') {
      return this.importScriptEs(url)
    }
  }

  public importScriptEs(url: string): Promise<any> {
    const name = this.options.componentName || COMPONENT_APP_UMD;
    return new Promise((resolve) => {
      if (CACHE_LOAD_MAP.get(url)) {
        return resolve(CACHE_LOAD_MAP.get(url))
      }
      // 发起 get 请求
      return fetch(url)
        .then(response => response.text())
        .then(text => {
          // eval 执行
          eval(`${text}`)
          const Com = window[name].default ? window[name].default : window[name]
          CACHE_LOAD_MAP.set(url, Com);
          resolve(Com)
        })
    })
  }

  public importScriptUmd(url: string): Promise<any> {
    const name = this.options.componentName || COMPONENT_APP_UMD;
    return new Promise((resolve) => {
      if (CACHE_LOAD_MAP.get(url)) {
        return resolve(CACHE_LOAD_MAP.get(url))
      }
      // 发起 get 请求
      return fetch(url)
        .then(response => response.text())
        .then(text => {
          // eval 执行
          eval(`${text}`)
          // new Function(`${text}`)
          // @ts-ignore
          const Com = window[name].default ? window[name].default : window[name]
          CACHE_LOAD_MAP.set(url, Com);
          resolve(Com)
        })
    })
  }

  private importScriptUmdVersion2(path: string, props: Record<any, any> = {}): Promise<HTMLScriptElement> {
    return new Promise((resolve, reject) => {
      const script = document.querySelector(`script[src="${path}"]`)! as HTMLScriptElement;

      const handler = (event: Event, dom: HTMLScriptElement) => {
        const targetStatus = event.type === 'load' ? 'ready' : 'error';
        dom?.setAttribute('data-status', targetStatus);
      };

      if (!script) {
        const newScript = document.createElement('script');
        newScript.src = path;

        Object.keys(props).forEach((key) => {
          // @ts-ignore
          newScript[key] = props[key];
        });

        newScript.setAttribute('data-status', 'loading');
        document.body.appendChild(newScript);

        newScript.addEventListener('load', (e) => {
          handler(e, newScript);
          resolve(newScript)
        })
        newScript.addEventListener('error', (e) => {
          handler(e, newScript);
          reject(e)
        })
      }else {
        const status = (script.getAttribute('data-status') as Status) || 'ready';
        if (status === 'ready') {
          resolve(script)
        }else {
          script.addEventListener('load', (e) => {
            handler(e, script as HTMLScriptElement);
            resolve(script)
          })
          script.addEventListener('error', (e) => {
            handler(e, script as HTMLScriptElement);
            reject(e)
          })
        }
      }
    })
  }

  public cssToDom(css: string) {
    const node = document.createElement('style');
    node.textContent = css;
    return node;
  }

  /**
   * 动态加载样式文件
   * @param url
   */
  public importStyle(url: string): Promise<HTMLStyleElement> {
    return new Promise(async (resolve, reject) => {
      try {
        let text = '';
        if (CACHE_CSS_MAP.get(url)) {
          text = CACHE_CSS_MAP.get(url)!
        } else {
          const response = await fetch(url);
          text = await response.text();
          CACHE_CSS_MAP.set(url, text);
        }
        resolve(this.cssToDom(text));
      }catch (e) {
        reject(e);
      }
    })
  }
}
