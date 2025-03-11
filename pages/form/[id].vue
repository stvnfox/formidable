<script setup lang="ts">
const { id } = useRoute().params;

console.log(id);

// const { data } = await useGetForm(id);
</script>

<template>
  <div>
    <h1>Form</h1>
  </div>
</template>