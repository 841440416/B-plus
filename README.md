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
- build目前我们实现了打包样式 、 工具方法
  - 打包components内每个组件，需要做以下
    1. 给每个组件生成.d.ts声明文件
    2. 给组件入口打包 -> `index.ts`
    3. 给引入的总入口打包 -> `b-plus/index.ts`

## dist目录打包出的整体结果
- es/lib两种规范
- theme-chalk
- 最终发布的模块就是dist模块 -> b-plus

## b-plus就是我们组件库的整合入口

