<template>
  <div class="relatives max-w-full overflow-auto overflow-x-clip">
    <header class="h-16">
      <Header />
    </header>
    <main class="w-full bg-slate-300">
      <div class="mx-auto min-h-screen max-w-screen-xl bg-white">
        <div class="w-full py-5">
          <div class="flex w-full flex-wrap">
            <router-view />
          </div>
        </div>
      </div>
    </main>
    <footer class="h-32 bg-blue-900"></footer>
  </div>
</template>

<script setup></script>
