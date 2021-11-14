import { series, parallel } from "gulp";
import { withTaskName, run } from "./utils";
export default series(
  withTaskName("clean", () => run("rm -rf ./dist")),
  parallel(
    withTaskName("buildPackages", () =>
      run("pnpm run --filter ./packages --parallel build")
    ),
    withTaskName('buildFullComponent',()=> run('pnpm run build buildFullComponent')),
  )
);
export * from './full-component'