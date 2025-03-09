<script setup lang="ts">
useHead({
  title: "Sign in to Formidable",
});

definePageMeta({
  layout: false,
});
</script>

<template>
  <section>
    <UContainer>
      <AuthFlow />
    </UContainer>
  </section>
</template>
