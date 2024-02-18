<template>
  <q-btn :color="color" :icon-right="icon" :label="label" />
</template>
<script setup>

const prop = defineProps({
  label: {
    type: String,
    default: null
  },
  icon: {
    type: String,
    default: null
  },
  color: {
    type: String,
    default: null
  },
})

</script>
<style scoped></style>

