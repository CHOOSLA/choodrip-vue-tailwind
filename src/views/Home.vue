<template>
  <div class="overflow-auto max-w-full overflow-x-clip relatives">
    <header class="h-16">
      <Header />
    </header>
    <main class="w-full bg-slate-300">
      <router-view />
    </main>
    <footer class="h-32 bg-blue-900"></footer>
  </div>
</template>

<script setup></script>
