import { series, parallel } from "gulp";
import { genTypes } from "./gen-types";
import { run, withTaskName } from "./utils";
import { outDir, bpRoot } from "./utils/paths";

/**
 * 拷贝package.json
 * @returns 
 */
const copySourceCode = () => async () => {
  await run(`cp ${bpRoot}/package.json ${outDir}/package.json`);
};

//1.打包样式 2.打包工具方法 2.打包所有组件 3.打包每个组件 4.生成一个组件库 5.发布组件
export default series(
  withTaskName("clean", async () => run("rm -rf ./dist")), // clean dist
  parallel(
    withTaskName("buildPackages", () =>
      run("pnpm run --filter ./packages --parallel build")
    ), // 打包package文件中包含build命令的文件
    withTaskName("buildFullComponent", () =>
      run("pnpm run build buildFullComponent")
    ), // 打包完整组件
    // withTaskName("buildComponent", () => run("pnpm run build buildComponent")) // 打包单个组件，依次打包，按需引入
  ),
  // parallel(genTypes, copySourceCode()) // 打包组件库入口 b-plus 声明文件
);

//  这是一个任务
// 任务执行器  gulp 任务名 就会执行对应的任务
export * from "./full-component";
export * from "./component";
