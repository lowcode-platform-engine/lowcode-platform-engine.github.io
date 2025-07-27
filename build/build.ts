import shelljs from 'shelljs';
import AdmZip from 'adm-zip';
import {join, resolve as pathResolve} from "path";
import pck from '../package.json';
import {writeFileSync} from "node:fs";

const config = {
  siteOutDir: 'doc_build',
  zipOutDir: `static-platform/${pck.name}.${pck.version}.zip`,
  buildScript: 'npm run build'
}

const staticConfig = {
  "OpenReactRenderSdk": "/open-react-render-sdk/index.umd.js",
  "SetterRender": "/setter-render/index.umd.js",
  "SchemaOnLinePlayground": "/new-playground/index.umd.js",
  "NexusRenderCore": "/nexus-render-core/index.umd.js"
}
async function main() {
  return new Promise((resolve, reject) =>  {
    try {
      writeFileSync(pathResolve(process.cwd(), 'static-sdk.json'), JSON.stringify(staticConfig, null, 2), )
      const buildRes = shelljs.exec(config.buildScript);
      if (buildRes.code === 0) {
        console.log("站点构建成功， 开始压缩");
        const zipPath = join(process.cwd(), config.zipOutDir);
        const admzip = new AdmZip();
        admzip.addLocalFolder(join(process.cwd(), config.siteOutDir));
        admzip.writeZip(zipPath);
      }
    }catch (e) {
      reject(e);
    }
  })

}

main().then(res => {
  console.log("构建成功")
});