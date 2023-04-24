import { defineComponent, type ExtractPropTypes, } from 'vue';

export const nameProps = {
  text: String
}

export type NameProps = ExtractPropTypes<typeof nameProps>;

const Name = defineComponent({
  name: 'Name',
  props: nameProps,

  //@ts-ignore
  setup(props, { emit, slots }) {

    return () => {
      const { text = '' } = props;
      return (
        <div>
          <div>123123</div>
          <div>{text}</div>
          <a-button type="primary">Primary Button</a-button>
        </div>
      )
    }
  }
})

export default Name;