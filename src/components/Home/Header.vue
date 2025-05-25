<template>
  <div class="w-full h-full bg-sky-900 overflow-clip px-10 2xl:px-16">
    <div class="w-full h-full">
      <div class="h-full overflow-clip flex">
        <div class="flex-1 min-w-36">
          <div class="w-full h-full items-center">
            <div class="inline-flex flex-row gap-2">
              <img class="size-16" src="/choosla.svg" alt="" />
              <div class="flex items-center justify-center">
                <div class="text-white font-bold text-lg hidden lg:block">추슬라</div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex-1 max-w-[650px] hidden lg:block 2xl:max-w-[900px]">
          <div class="h-full grid grid-flow-col overflow-auto gap-6">
            <div v-for="i in 4" class="w-34 h-full min-w-36">
              <div class="w-full h-full flex items-center justify-center">
                <div class="m-3 text-white font-semibold text-lg">카테고리 {{ i }}</div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex-1 min-w-32">
          <div class="flex justify-end items-center h-full">
            <div class="inline-flex items-center">
              <Button class="border border-white px-8 py-3 rounded-full text-blue-900 bg-white"
                >로그인</Button
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>
