# B-plus
pnpm搭建的Vue3组件库💥

## 说明
- build 负责打包的文件 gulp编译ts,打包样式，打包单文件组件
- dist 打包后的结果
- packages 组件库代码，monorepo
- play 用来测试代码，调试案例demo
- typings 类型生命文件
- .npmrc 需要增加此文件安装依赖才会正常
- tsconfig ts配置

### packages
    > components 存放所有的组件 通过index.ts导出所有的组件
    > theme-chalk做样式的BEM （后续控制样式）
    > utils存放着多个模块间的公共方法

### build

