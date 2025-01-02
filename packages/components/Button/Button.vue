<script setup lang="tsx">
import { type ButtonEmits, type ButtonProps } from './types'
import { throttle } from 'lodash-es'
import { computed, ref, inject } from 'vue'
import HmIcon from '../Icon/Icon.vue'
import { BUTTON_GROUP_CONTEXT_KEY } from './constance'

defineOptions({
  name: "HmButton"
})

const ctx = inject(BUTTON_GROUP_CONTEXT_KEY);

const size = computed(() => ctx?.size ?? props.size ?? '');
const type = computed(() => ctx?.type ?? props.type ?? '');
const disabled = computed(() => ctx?.disabled ?? props.disabled ?? false);



const props = withDefaults(defineProps<ButtonProps>(), {
  tag: "button",
  nativeType: 'button',
  useThrottle: true,
  throttleDuration: 500
})

const slots = defineSlots();

const emit = defineEmits<ButtonEmits>();

const iconStyle = computed(() => {
  return {
    marginRight: slots.default ? '6px' : '0px'
  }
})

const handleClick = (event: MouseEvent) => emit('click', event);

const handleThrottleClick = throttle(handleClick, props.throttleDuration);


const _ref = ref<HTMLButtonElement | null>()

defineExpose({
  ref: _ref
})
</script>

<template>
  <component :is="tag === 'button' ? nativeType : null" :disabled="disabled || loading ? true : void 0" ref="_ref"
    @click="(e: MouseEvent) => props.useThrottle ? handleThrottleClick(e) : handleClick(e)" class="hm-button" :class="{
      [`hm-button--${size}`]: size,
      [`hm-button--${type}`]: type,
      'is-plain': props.plain,
      'is-round': props.round,
      'is-circle': props.circle,
      'is-loading': props.loading,
      'is-disabled': props.disabled
    }">
    <template v-if="loading">
      <slot name="loading">
        <HmIcon class="loading-icon" :icon="loadingIcon ?? 'spinner'" :style="iconStyle" size="1x" spin></HmIcon>
      </slot>
    </template>
    <hm-icon :icon="icon" size="1x" :style="iconStyle" v-if="icon && !loading" />
    <slot></slot>
  </component>
</template>

<style scoped>
@import './style.css'
</style>