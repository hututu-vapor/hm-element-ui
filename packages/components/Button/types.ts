import type { Component, Ref } from "vue";
export type ButtonType = "primary" | "success" | "warning" | "danger" | "info";
export type ButtonSize = "small" | "medium" | "large";
export type NativeType = "button" | "submit" | "reset";

export interface ButtonProps {
  tag?: string | Component;
  type?: ButtonType;
  size?: ButtonSize;
  nativeType?: NativeType;
  disabled?: boolean;
  block?: boolean;
  round?: boolean;
  circle?: boolean;
  plain?: boolean;
  text?: boolean;
  loading?: boolean;
  icon?: string;
  loadingIcon?: string;
  useThrottle?: boolean;
  throttleDuration?: number;
}

export interface ButtonEmits {
  (e: "click", evt: MouseEvent): void;
}

export interface ButtonInstance {
  ref: Ref<HTMLButtonElement | void>;
}

export interface ButtonGroupContext {
  size?: ButtonSize;
  disabled?: boolean;
  type: ButtonType;
}

export interface ButtonGroupProps {
  size?: ButtonSize;
  disabled?: boolean;
  type: ButtonType;
}
