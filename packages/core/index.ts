import { makeInstaller } from "@hm-element/utils";
import components from "./components";
import "@hm-element/theme/index.css";

console.log(components);

const installer = makeInstaller(components);

console.log(installer);

export * from "@hm-element/components";

// 使用者可以直接通过插件的方式来使用
export default installer;
