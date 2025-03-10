<script setup lang="ts">
const items = [
  {
    label: "Icons",
    // icon: "i-lucide-pen",
  },
  {
    label: "Colors",
    // icon: "i-lucide-swatch-book",
  },
  {
    label: "Components",
    // icon: "i-lucide-box",
  },
];
</script>

<template>
  <div class="my-8">
    <div class="flex justify-between items-center">
      <h2 class="text-3xl font-heading">Your forms</h2>
      <UButton>Create new form</UButton>
    </div>
    <div class="mt-4 border border-neutral-700 rounded-lg bg-neutral-900 px-6 py-2">
      <UAccordion :items="items">
        <template #body="{ item }">
          This is the {{ item.label }} panel.
        </template>
      </UAccordion>
    </div>
  </div>
</template>
