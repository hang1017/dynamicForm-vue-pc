<script lang="ts" setup>
import { ref, reactive, toRaw } from "vue";
import { Button, Form,type FormInstance } from "ant-design-vue";
import { Dform, DformInput } from "@alitajs/vdform";

// const useForm = Form.useForm;
const msg = ref<string>("hello custom component");
const formValues = ref<any>({
  bb: "b",
});

const formRef = ref<FormInstance>();

// const rulesRef = reactive({
//   bb: [
//     {
//       required: true,
//       message: "Please input Activity name",
//     },
//   ],
// });

// const { validate } = useForm(formValues, rulesRef, { immediate: true, deep: true });

const onFinish = (values: any) => {
  console.log("Success:", values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log("Failed:", errorInfo);
};

// const onSubmit = () => {
//   validate()
//     .then(() => {
//       console.log(toRaw(formValues));
//     })
//     .catch((err) => {
//       console.log("error", err);
//     });
// };

const refCheck = async () => {
  console.log(formRef.value);
  if(formRef.value) {
    const values = await formRef.value.validateFields();
    console.log(values);

  }

}
</script>

<template>
  <a-button type="primary">Primary Button</a-button>
  {{ msg }}
  <Dform
    :ref="formRef"
    :model="formValues"
    @finish="onFinish"
    @finishFailed="onFinishFailed"
  >
    <DformInput label="Username" name="bb" v-model:value="formValues.bb" />
    <!-- <Button @click="onSubmit">submit</Button> -->
    <a-button type="primary" html-type="submit">2222</a-button>
    <a-button type="primary" @click="refCheck">通过 ref 校验</a-button>
  </Dform>
</template>
