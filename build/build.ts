import shelljs from 'shelljs';
import AdmZip from 'adm-zip';
import {join} from "path";
import pck from '../package.json';

const config = {
  siteOutDir: 'doc_build',
  zipOutDir: `static-platform/${pck.name}.${pck.version}.zip`,
  buildScript: 'npm run build'
}
async function main() {
  return new Promise((resolve, reject) =>  {
    try {
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