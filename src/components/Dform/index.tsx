import { defineComponent, type ExtractPropTypes, } from 'vue';
import type { ValidateErrorEntity } from 'ant-design-vue/lib/form/interface';

export const dformProps = {
  model: Object,
  ref: Object,
}

export type DformProps = ExtractPropTypes<typeof dformProps>;

const DynamicForm = defineComponent({
  name: 'DynamicForm',
  props: dformProps,

  setup(props, { slots, emit }: any) {
    const { ...otherProps } = props;

    console.log({ otherProps });


    return () => {
      return (
        <div>
          <a-form {...otherProps} onFinish={(values: any) => emit('finish', values)} onFinishFailed={(errorInfo: ValidateErrorEntity) => emit('finishFailed', errorInfo)}>
            <div>123</div>
            {slots.default()}
          </a-form>
        </div>
      )
    }
  }
})

export default DynamicForm;