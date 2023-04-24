import DefaultTheme from 'vitepress/theme'
import { AntDesignContainer } from '@vitepress-demo-preview/component'
import '@vitepress-demo-preview/component/dist/style.css'
import AntdVueComponents from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import { EnhanceAppContext } from 'vitepress'

export default {
  ...DefaultTheme,
  enhanceApp(ctx: EnhanceAppContext) {
    ctx.app.use(AntdVueComponents);
    ctx.app.component('demo-preview', AntDesignContainer)
  }
}
