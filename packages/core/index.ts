import { makeInstaller } from "@hm-element/utils";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import components from "./components";
import "@hm-element/theme/index.css";

library.add(fas);
const installer = makeInstaller(components);

export * from "@hm-element/components";

export default installer;
