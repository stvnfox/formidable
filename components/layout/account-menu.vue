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
    size="sm"
    :items="items"
    :content="{
      align: 'end',
    }"
    :ui="{
      content: 'w-32 font-bold',
    }"
  >
    <UButton
      color="neutral"
      class="group gap-3 hover:bg-transparent cursor-pointer hover:text-neutral-300"
      variant="ghost"
    >
      <span class="font-bold">{{ $auth.user?.given_name }}</span>
      <UAvatar :src="$auth.user?.picture ?? undefined" />
    </UButton>
  </UDropdownMenu>
</template>
