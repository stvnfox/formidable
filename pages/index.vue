<script setup lang="ts">
useHead({
  title: "Formidable",
});
</script>

<template>
  <section>
    <AuthFlow v-if="!$auth.loggedIn" />
    <Dashboard v-else />
  </section>
</template>
