<script setup lang="ts">
const { id } = useRoute().params;

const { data } = await useGetFormById(id as string);
</script>

<template>
  <UContainer>
    <NuxtLink to="/">
      <UButton icon="i-lucide-arrow-left" label="Back to dashboard" variant="link" class="cursor-pointer -ml-3" />
    </NuxtLink>
    <h1>Form</h1>
    <pre>{{ data }}</pre>
  </UContainer>
</template>