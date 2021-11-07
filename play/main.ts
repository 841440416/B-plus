import { createApp } from "vue";
import App from "./app.vue";
import { BIcon } from "@b-plus/components/icon";
const app = createApp(App); // 编写play组件为测试入口 app.mount('#app')

app.use(BIcon);
app.mount("#app");
