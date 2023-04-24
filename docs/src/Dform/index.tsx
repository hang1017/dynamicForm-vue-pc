import { defineComponent, type ExtractPropTypes, } from 'vue';

export const dformProps = {
  text: String
}

export type DformProps = ExtractPropTypes<typeof dformProps>;

const DynamicForm = defineComponent({
  name: 'DynamicForm',
  props: dformProps,

  setup(props, { emit, slots }) {
    return () => {
      return (
        <div>
          123
          1
          {slots.default()}
        </div>
      )
    }
  }
})

export default DynamicForm;