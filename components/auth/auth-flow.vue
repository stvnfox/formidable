<script setup lang="ts"></script>

<template>
  <section class="flex items-center justify-center h-screen">
    <UContainer class="flex flex-col gap-4 text-center">
      <h1 class="text-3xl font-bold font-heading">Formidable</h1>
      <p class="text-sm text-neutral-500">
        Start creating your forms in a eyeblink by signing in
      </p>
      <div class="mx-auto w-64 flex flex-col gap-2">
        <NuxtLink
          to="/api/login"
          external
          class="border-2 border-neutral-200 bg-neutral-200 hover:bg-transparent hover:text-neutral-200 transition-all duration-200 text-neutral-900 font-semibold px-3 py-1 mx-auto rounded-md w-fit text-sm"
        >
          Sign in
        </NuxtLink>
      </div>
    </UContainer>
  </section>
</template>
