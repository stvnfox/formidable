<script setup lang="ts">
useHead({
  title: "Formidable",
});

definePageMeta({
  middleware: async () => {
    const { $auth } = useNuxtApp();

    if (!$auth.loggedIn) {
      return navigateTo("/sign-in");
    }
  },
});
</script>

<template>
  <section>
    <Dashboard />
  </section>
</template>
