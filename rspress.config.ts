import * as path from 'path';
import { defineConfig } from 'rspress/config';
import alignImage from 'rspress-plugin-align-image';
// import toc from 'rspress-plugin-toc';

export default defineConfig({
  root: path.join(__dirname, 'docs'),
  title: '低代码搭建引擎',
  base: '/lowcode-platform-docs/',
  description: '低代码搭建引擎',
  icon: '/icon-logo.svg',
  logo: {
    light: '/icon-light-logo.svg',
    dark: '/icon-dark-logo.svg',
  },
  builderConfig: {

  },
  themeConfig: {
    socialLinks: [
      /*{ icon: 'github', mode: 'link', content: 'https://github.com/web-infra-dev/rspress' },*/
    ],
    prevPageText: '上一页',
    nextPageText: '下一页',
    enableScrollToTop: true,
  },
  // 配置 CSS 选择器，自定义要放大的图片，默认为 '.rspress-doc img'
  mediumZoom: {
    selector: '.lowcode-doc img',
  },
  plugins: [
    // @ts-ignore
    alignImage(),
    /*toc({
      useOfficialComponent: false,
      maxDepth: 3
    }),*/
  ],
});
// marvin  ubuntu marvin 123Asd123Aad   192.168.3.26/24