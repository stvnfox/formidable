<script setup lang="ts">
definePageMeta({
  middleware: ["auth-logged-in"],
  redirect: "/",
});
</script>

<template>
  <UContainer>
    <h1 class="text-3xl font-bold">Dashboard</h1>
    <p>{{ user }}</p>
  </UContainer>
</template>
