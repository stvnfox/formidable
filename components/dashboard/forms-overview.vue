<script setup lang="ts">
const { data } = await useGetForms();

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
      <DashboardCreateFormTrigger />
    </div>
    <div
      v-if="data.length > 0"
      class="mt-4 border border-neutral-700 rounded-lg bg-neutral-900 px-6 py-2"
    >
      <UAccordion :items="items">
        <template #body="{ item }">
          This is the {{ item.label }} panel.
        </template>
      </UAccordion>
    </div>
    <div v-else class="text-sm py-8">
      <h3 class="text-sm font-bold text-neutral-300">No forms found</h3>
      <p class="text-neutral-400">
        Create a new form to get started by clicking the button above
      </p>
    </div>
  </div>
</template>
