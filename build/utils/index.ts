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

export const pathRewriter = (format)=>{
  return (id:string)=>{
    id = id.replaceAll('@b-plus',`b-plus/${format}`);
    return id
  }
}
