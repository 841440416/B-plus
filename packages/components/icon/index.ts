import Icon from './src/icon.vue';
import { withInstall } from '@b-plus/utils/with-install'; 
const BIcon = withInstall(Icon);
export {
  BIcon
}
export default BIcon; // 导出组件
export * from './src/icon';// 导出组件的属性类型
