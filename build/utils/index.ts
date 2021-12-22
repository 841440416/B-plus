import { spawn } from "child_process";
import { projectRoot } from "./paths";
export const withTaskName = <T>(name: string, fn: T) =>
  Object.assign(fn, { displayName: name });

// 在node中使用子进程来运行脚本
export const run = async (command: string) => {
  // rm -rf
  return new Promise((resolve) => {
    const [cmd, ...args] = command.split(" ");
    // exec
    const app = spawn(cmd, args, {
      cwd: projectRoot,
      stdio: "inherit", // 直接将这个子进程的输出
      shell: true, // 默认情况下 linux 才支持 rm -rf
    });
    app.on("close", resolve);
  });
};

// 重写@bi-plus路径
export const pathRewriter = (format)=>{
  return (id:string)=>{
    // console.log('id开始---', id, format)
    id = id.replace(/@bi-plus/g, `bi-plus/${format}`); //建议使用replace替换replaceAll（兼容问题）
    // console.log('id结束---', id)
    return id
  }
}
