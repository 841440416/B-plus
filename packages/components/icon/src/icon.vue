<template>
  <i class="b-icon" :style="style" v-bind="$attrs">
    <slot></slot>
  </i>
</template>
<script lang="ts">
import { defineComponent, computed } from "vue";
import { isNumber, isString } from "@bi-plus/utils/util";
import { iconProps } from "./icon";

import type { CSSProperties } from "vue";

export default defineComponent({
  name: "BIcon",
  inheritAttrs: false,
  props: iconProps,
  setup(props) {
    const style = computed<CSSProperties>(() => {
      if (!props.size && !props.color) {
        return {};
      }
      let size = props.size;
      if (isNumber(size) || (isString(size) && !size.endsWith("px"))) {
        size = `${size}px`;
      }
      return {
        ...(props.size ? { "--font-size": size } : {}),
        ...(props.color ? { '--color': props.color } : {}),
      } as CSSProperties;
    });
    return { style };
  },
});
</script>
