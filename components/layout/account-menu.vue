<script setup lang="ts">
const items = ref([
  //   [
  //     {
  //       label: "Profile",
  //       icon: "i-lucide-user",
  //     },
  //   ],
  [
    {
      label: "Logout",
      icon: "i-lucide-log-out",
      to: "/api/logout",
      external: true,
    },
  ],
]);
</script>

<template>
  <UDropdownMenu
    :items="items"
    :ui="{
      content: 'w-48',
    }"
  >
    <UButton color="neutral" class="gap-2" variant="ghost">
      <span class="font-bold">{{ $auth.user?.given_name }}</span>
      <UAvatar :src="$auth.user?.picture ?? undefined" />
    </UButton>
  </UDropdownMenu>
</template>
