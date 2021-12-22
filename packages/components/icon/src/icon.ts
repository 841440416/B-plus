// 这里主要放置的是组件的props， 及一些公共的方法
import type { ExtractPropTypes } from "vue";
import { definePropType, buildProps } from '@bi-plus/utils/props'

export const iconProps = buildProps({
  size: {
    type: definePropType<number | string>([Number, String]),
  },
  color: {
    type: String,
  },
} as const)
export type IconProps = ExtractPropTypes<typeof iconProps>;
