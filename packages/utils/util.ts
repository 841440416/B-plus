import {
  camelize,
  capitalize,
  extend,
  hasOwn,
  hyphenate,
  isArray,
  isObject,
  isString,
  isFunction,
  looseEqual,
  toRawType,
} from '@vue/shared'

export const isNumber = (val: unknown): val is number => typeof val === 'number'

export {
  isString
}