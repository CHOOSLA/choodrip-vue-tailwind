<template>
  <div class="relatives max-w-full overflow-auto overflow-x-clip">
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
