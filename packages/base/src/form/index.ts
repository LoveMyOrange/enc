import type { CustomFormItem } from './CustomFormItem'
import type { DatetimeFormItem } from './DatetimeFormItem'
import type { InputFormItem } from './InputFormItem'
import type { SelectFormItem } from './SelectFormItem'
import type { UploadFormItem } from './UploadFormItem'

export type FormItemUnion<F = string, E = any> =
  | InputFormItem<F, E>
  | SelectFormItem<F, E>
  | DatetimeFormItem<F, E>
  | UploadFormItem<F, E>
  | CustomFormItem<F, E>

// Used for default configuration
export type OmitTypeFormItem<F = string, E = any> = Partial<
  Omit<InputFormItem<F, E>, 'type'> &
    Omit<SelectFormItem<F, E>, 'type'> &
    Omit<DatetimeFormItem<F, E>, 'type'> &
    Omit<UploadFormItem<F, E>, 'type'> &
    Omit<CustomFormItem<F, E>, 'type'>
>

export type FormProps = {
  /**
   * 表单数据键值
   */
  data: Record<string, any>
  /**
   * 表单项数组
   */
  items: FormItemUnion[]
}

export * from './BaseFormItem'
export * from './DatetimeFormItem'
export * from './InputFormItem'
export * from './PopupFormItem'
export * from './SelectFormItem'
export * from './UploadFormItem'
export * from './CustomFormItem'
