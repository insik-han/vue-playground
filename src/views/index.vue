<script setup lang="ts">
import { ref, onMounted } from 'vue';
// https://vuejs.org/tutorial/#step-10

const p = ref<HTMLParagraphElement | null>(null)

onMounted(() => {
  console.log(p.value?.innerText) // Hello
})
</script>

<template>
  <p ref="p">Hello</p>
</template>