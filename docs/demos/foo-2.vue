<template>
  <a-button type="primary">Primary Button</a-button>
  {{ msg }}
  <Dform> this is dform slot </Dform>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import Dform from "../src/Dform";

const msg = ref("hello custom component");
</script>
