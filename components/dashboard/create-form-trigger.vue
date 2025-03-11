<script setup lang="ts">
const toast = useToast();
const loading = ref(false);

const createAndGoToForm = async () => {
  loading.value = true;
  const { data } = await useCreateForm();

  if (!data) {
    toast.add({
      title: "Oops! Something went wrong.",
      description: "Failed to create form. Please try again",
      color: "error",
    });
    throw new Error("Failed to create form");
  }

  if (data.status !== 200) {
    toast.add({
      title: "Oops! Something went wrong.",
      description: "Failed to create form. Please try again",
      color: "error",
    });

    return;
  }

  setTimeout(() => {
      navigateTo(`/form/${data.formId}`);
  }, 500);

  loading.value = false;
};
</script>

<template>
  <UButton
    class="cursor-pointer hover:bg-neutral-800 hover:text-white border-2 border-primary-400 hover:border-neutral-200 disabled:cursor-not-allowed disabled:opacity-80 disabled:hover:bg-primary-400 disabled:hover:border-primary-400 disabled:hover:text-neutral-900"
    icon="i-lucide-plus"
    :loading="loading"
    :disabled="loading"
    @click="createAndGoToForm"
  >
    Create new form
  </UButton>
</template>
