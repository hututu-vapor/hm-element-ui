<template>
  <div class="hm-button-group">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { provide, reactive, toRef } from "vue"
import type { ButtonGroupProps } from './types'
import { BUTTON_GROUP_CONTEXT_KEY } from './constance.ts'


defineOptions({
  name: 'HmButtonGroup'
})

const props = defineProps<ButtonGroupProps>()

provide(
  BUTTON_GROUP_CONTEXT_KEY,
  reactive({
    size: toRef(props, "size"),
    type: toRef(props, "type"),
    disabled: toRef(props, "disabled"),
  })
);

</script>

<style scoped>
@import './style.css'
</style>