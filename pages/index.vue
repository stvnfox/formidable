<script setup lang="ts"></script>

<template>
  <UContainer>
    <h1 class="text-3xl font-bold font-heading">Formidable</h1>
    <div class="mx-auto w-64 flex flex-col gap-2">
      <UButton
        to="/api/login"
        target="_blank"
        color="neutral"
        variant="outline"
        :block="true"
        :square="true"
      >
        Sign in
      </UButton>
      <UButton
        to="/api/register"
        target="_blank"
        color="neutral"
        variant="outline"
        :block="true"
        :square="true"
      >
        Sign up
      </UButton>
    </div>
  </UContainer>
</template>
