import * as path from 'path';
import { defineConfig } from 'rspress/config';

export default defineConfig({
  root: path.join(__dirname, 'docs'),
  title: '低代码搭建引擎',
  description: '低代码搭建引擎',
  icon: '/icon-logo.svg',
  logo: {
    light: '/icon-light-logo.svg',
    dark: '/icon-dark-logo.svg',
  },
  themeConfig: {
    socialLinks: [
      /*{ icon: 'github', mode: 'link', content: 'https://github.com/web-infra-dev/rspress' },*/
    ],
    prevPageText: '上一页',
    nextPageText: '下一页',
  },
  // 配置 CSS 选择器，自定义要放大的图片，默认为 '.rspress-doc img'
  mediumZoom: {
    selector: '.lowcode-doc img',
  },
});
