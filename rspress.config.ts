import * as path from 'path';
import { defineConfig } from 'rspress/config';
import alignImage from 'rspress-plugin-align-image';
// import toc from 'rspress-plugin-toc';
console.log(process.env.NODE_ENV)
console.log(process.env.VERCEL_ENV)
const base = process.env.VERCEL_ENV? '/': '/lowcode-platform-docs/'
export default defineConfig({
  root: path.join(__dirname, 'docs'),
  title: '低代码搭建引擎',
  base: '/',
  description: '低代码搭建引擎',
  icon: '/icon-logo.svg',
  logo: {
    light: '/icon-light-logo.svg',
    dark: '/icon-dark-logo.svg',
  },
  route: {
    exclude: ['public/**'],
  },
  builderConfig: {
    html: {
      tags: [
        {
          tag: 'script',
          attrs: {
            src: '/common/react.production.min.js',
          },
          append: true,
        },
        {
          tag: 'script',
          attrs: {
            src: '/common/react-dom.production.min.js',
          },
          append: true,
        },
        /*{
          tag: 'script',
          attrs: {
            src: '/setter-render/index.umd.js',
          },
          append: true,
        },
        {
          tag: 'link',
          attrs: {
            href: '/setter-render/style.css',
            rel: 'stylesheet',
          },
          append: true,
        },*/
        /*{
          tag: 'script',
          attrs: {
            src: '/playground/index.umd.js',
          },
          append: true,
        },
        {
          tag: 'link',
          attrs: {
            href: '/playground/style.css',
            rel: 'stylesheet',
          },
          append: true,
        },*/
        // https://unpkg.com/react@17.0.2/umd/react.development.js
      ],
    },
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