<template>
  <a-button type="primary">Primary Button</a-button>
  {{ msg }}
</template>

<script lang="ts" setup>
import { ref } from "vue";

const msg = ref("hello custom component");
</script>
