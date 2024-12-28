import type { App, Plugin } from "vue";
import { each } from "lodash-es";

type SFCWithInstall<T> = T & Plugin;

// 一个插件可以是一个拥有 install() 方法的对象，也可以直接是一个安装函数本身。
export function makeInstaller(components: Plugin[]) {
  const install = (app: App) => {
    each(components, (com) => app.use(com));
  };

  return install;
}

export const withInstall = <T>(component: T) => {
  (component as SFCWithInstall<T>).install = (app: App) => {
    const name = (component as any)?.name || "HM-Component";
    app.component(name, component as Plugin);
  };

  return component as SFCWithInstall<T>;
};
