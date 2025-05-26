<template>
  <div
    class="fixed h-full w-full bg-black opacity-35"
    :class="[isActive ? 'visible' : 'invisible']"
  >
    <div class="flex h-full w-full items-center justify-center">
      <div class="min-w-[400px] bg-white">
        <div class="px-4 py-4">
          <div class="text-lg text-slate-800">test</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const isActive = ref(true)
</script>
