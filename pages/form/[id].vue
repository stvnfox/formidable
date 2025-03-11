<script setup lang="ts">
const { id } = useRoute().params;

const { data } = await useGetFormById(id as string);
</script>

<template>
  <div>
    <h1>Form</h1>
    <pre>{{ data }}</pre>
  </div>
</template>