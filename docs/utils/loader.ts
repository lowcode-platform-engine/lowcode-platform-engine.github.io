interface LoadTypeScriptOptions {
  src?: string; // TypeScript 库的路径，可选，默认为 CDN 地址
  globalKey?: string; // 挂载到 window 上的键名，默认是 "ts"
}

const typeScriptLoadingCache: { [key: string]: Promise<void> } = {};

function loadLib(options: LoadTypeScriptOptions = {}): Promise<void> {
  const {
    src = "https://cdn.jsdelivr.net/npm/typescript/lib/typescript.js", // 默认使用 jsDelivr 的 CDN
    globalKey = "ts",
  } = options;

  // 如果已经加载完成
  if ((window as any)[globalKey]) {
    return Promise.resolve();
  }

  // 如果正在加载同一个脚本，复用之前的 Promise
  // @ts-ignore
  if (typeScriptLoadingCache[src]) {
    return typeScriptLoadingCache[src];
  }

  // 创建一个新的加载 Promise
  typeScriptLoadingCache[src] = new Promise((resolve, reject) => {
    // 创建 script 元素
    const script = document.createElement("script");
    script.setAttribute('data-src', src);
    script.src = src;
    script.async = true;

    // 加载完成时
    script.onload = () => {
      if (!(window as any)[globalKey]) {
        reject(new Error(`Failed to load ${globalKey}. Ensure the global variable ${globalKey} is set by the script.`));
        delete typeScriptLoadingCache[src];
      } else {
        console.log(`${globalKey} loaded and available as window.${globalKey}`);
        resolve();
      }
    };

    // 加载失败时
    script.onerror = (error) => {
      reject(new Error(`Failed to load ${globalKey} from ${src}: ${error}`));
      delete typeScriptLoadingCache[src];
    };
    document.body.appendChild(script);
  });

  return typeScriptLoadingCache[src];
}


async function LibTypeScript() {
  await loadLib({
    src: 'https://cdn.jsdelivr.net/npm/typescript@5.7.2/lib/typescript.min.js',
    globalKey: 'ts'
  })
  return window['ts'];
}

async function LibOpenReactRenderSdk() {
  await loadLib({
    // src: 'https://cdn.jsdelivr.net/npm/@lowcode-set-up-platform/open-react-render-sdk@2.1.8/lib/index.umd.js',
    src: '/open-react-render-sdk/index.umd.js',
    globalKey: 'OpenReactRenderSdk'
  })
  return window['OpenReactRenderSdk'];
}


async function LibSetterRender() {
  await loadLib({
    // src: 'https://cdn.jsdelivr.net/npm/@lowcode-set-up-platform/open-react-render-sdk@2.1.8/lib/index.umd.js',
    src: '/setter-render/index.umd.js',
    globalKey: 'SetterRender'
  })
  return window['SetterRender'];
}

export default {
  LibSetterRender,
  LibOpenReactRenderSdk
}


