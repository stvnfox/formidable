<script setup lang="ts">
const { data } = await useGetForms();

const items = computed(() => {
  return data.map((form) => ({
    label: form.name ?? `Form ${form.id}`,
    id: form.id,
  }));
});
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
          <div class="flex gap-2">
            <UButton
              icon="i-lucide-pen"
              label="Edit form"
              variant="soft"
              color="primary"
              size="sm"
              :to="`/form/${item.id}`"
              :ui="{
                leadingIcon: 'size-3',
              }"
            />
            <UButton
              icon="i-lucide-eye"
              label="See submissions"
              variant="soft"
              color="info"
              :disabled="true"
              size="sm"
              :ui="{
                leadingIcon: 'size-3',
              }"
            />
            <UButton
              icon="i-lucide-trash"
              label="Delete form"
              variant="soft"
              :disabled="true"
              color="error"
              size="sm"
              :ui="{
                leadingIcon: 'size-3',
              }"
            />
          </div>
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
