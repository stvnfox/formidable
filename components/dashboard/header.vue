<template>
  <UAlert
    color="neutral"
    variant="subtle"
    :title="`hi, ${$auth.user?.given_name}!`"
    description="it's a great day to build some formidable forms - see your forms below or create a new one"
    icon="i-lucide-handshake"
    :ui="{
        icon: 'text-neutral-500',
    }"
  />
</template>
