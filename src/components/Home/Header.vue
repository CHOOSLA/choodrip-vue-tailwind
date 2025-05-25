<template>
  <div class="h-full w-full overflow-clip bg-sky-900 px-10 2xl:px-16">
    <div class="h-full w-full">
      <div class="flex h-full overflow-clip">
        <div class="min-w-36 flex-1">
          <div class="h-full w-full items-center">
            <div class="inline-flex flex-row gap-2">
              <img class="size-16" src="/choosla.svg" alt="" />
              <div class="flex items-center justify-center">
                <div class="hidden text-lg font-bold text-white lg:block">추슬라</div>
              </div>
            </div>
          </div>
        </div>
        <div class="hidden max-w-[650px] flex-1 lg:block 2xl:max-w-[900px]">
          <div class="grid h-full grid-flow-col gap-6 overflow-auto">
            <div v-for="i in 4" class="w-34 h-full min-w-36">
              <div class="flex h-full w-full items-center justify-center">
                <div class="m-3 text-lg font-semibold text-white">카테고리 {{ i }}</div>
              </div>
            </div>
          </div>
        </div>
        <div class="min-w-32 flex-1">
          <div class="flex h-full items-center justify-end">
            <div class="inline-flex items-center">
              <Button class="rounded-full border border-white bg-white px-8 py-3 text-blue-900"
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
