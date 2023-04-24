import { defineComponent, type ExtractPropTypes, } from 'vue';

export const nameProps = {
  text: String
}

export type NameProps = ExtractPropTypes<typeof nameProps>;

const Name = defineComponent({
  name: 'Name',
  props: nameProps,

  setup(props, { emit, slots }) {

    return () => {
      const { text = '' } = props;
      return (
        <div>123123{text}</div>
      )
    }
  }
})

export default Name;