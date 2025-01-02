import { withInstall } from "@hm-element/utils";
import Button from "./Button.vue";
import ButtonGroup from "./ButtonGroup.vue";

export const HmButton = withInstall(Button);
export const HmButtonGroup = withInstall(ButtonGroup);

export * from "./types";
