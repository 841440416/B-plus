import type { App } from "vue";
import { BIcon } from "@b-plus/components";
const components = [BIcon];
const install = (app: App) => {
  //每个组件都提供了install方法
  components.forEach((component) => app.use(component));
};
export default {
  install,
};
export * from "@b-plus/components";
