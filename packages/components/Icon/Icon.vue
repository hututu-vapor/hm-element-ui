<script setup lang="ts">
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { computed } from 'vue'
import { omit } from 'lodash-es'
import type { IconProps } from './types'
defineOptions({
  name: "HmIcon",
  inheritAttrs: false
})

const props = defineProps<IconProps>();

const filterProps = computed(() => omit(props, ['type', 'color']))

const customStyle = computed(() => {
  return {
    color: props.color ?? void 0
  }
})

</script>

<template>
  <i class="hm-icon" :class="{ [`hm-icon--${type}`]: type }" v-bind="$attrs" :style="customStyle">
    <FontAwesomeIcon v-bind="filterProps"></FontAwesomeIcon>
  </i>
</template>

<style scoped>
@import "./style.css"
</style>