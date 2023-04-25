import { defineComponent, computed, type ExtractPropTypes, } from 'vue';

export const dformInputProps = {
  value: String,
  name: String,
  label: String,
}

export type DformProps = ExtractPropTypes<typeof dformInputProps>;

const DformInput = defineComponent({
  name: 'DformInput',
  props: dformInputProps,

  setup(props, { emit }) {
    const { name, label } = props;

    let filedValue = computed({
      get() {
        return props.value
      },
      set(newValue) {
        emit('update:value', newValue);
      }
    })
    return () => {
      return (
        <a-form-item
          label={label}
          name={name}
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <a-input v-model:value={filedValue} />
        </a-form-item>
      )
    }
  }
})

export default DformInput;