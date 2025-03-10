<template>
  <UAlert
    color="neutral"
    variant="subtle"
    icon="i-lucide-handshake"
    :ui="{
        icon: 'text-neutral-500',
    }"
  >
    <template #title>
      Hi, <span class="capitalize">{{ $auth.user?.given_name }}</span>
    </template>
    <template #description>
      It's a great day to build some formidable forms - see your forms below or create a new one
    </template>
  </UAlert>
</template>
