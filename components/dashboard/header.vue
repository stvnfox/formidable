<template>
  <div class="px-6 py-5 border border-neutral-700 rounded-lg bg-neutral-900">
    <h1 class="text-xl">
      Hi,
      <span class="capitalize">{{ $auth.user?.given_name }}!</span>
    </h1>
    <p class="text-sm max-w-md text-pretty">
      Welcome back! It's a great day to build some
      <span class="font-heading text-xl">formidable</span> forms. See your forms
      below or create a new one!
    </p>
  </div>
</template>
