import type { App } from "vue";
import BIcon from "@b-plus/components/icon";
const components = [BIcon];
const install = (app: App) => {
  components.forEach((component) => app.use(component));
};
export default {
  install,
};
export * from "@b-plus/components";
