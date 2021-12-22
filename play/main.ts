import { createApp } from "vue";
import App from "./app.vue";
import { BIcon } from "@bi-plus/components/icon";
import '@bi-plus/theme-chalk/src/index.scss'
const app = createApp(App); // 编写play组件为测试入口 app.mount('#app')

app.use(BIcon);
app.mount("#app");
