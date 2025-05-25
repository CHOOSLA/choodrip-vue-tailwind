<template>
  <div class="max-w-full mb-16">
    <div>
      <label class="text-blue-600 text-4xl px-4"> {{ category }} </label>
      <div class="h-[3px] w-full rounded-lg bg-slate-400 mt-4 ml-3"></div>

      <div class="mt-5 pl-4">
        <div v-for="post in posts.slice(0, 10)" :key="post.boardId" class="mb-2">
          <div class="flex max-w-full text-lg">
            <div class="inline-flex w-full text-lg font-normal space-x-3">
              <div class="truncate overflow-hidden whitespace-nowrap">
                {{ post.title }}
              </div>
              <div class="inline-flex">
                <div v-if="post.img !== ''" class="flex items-center">
                  <div class="shrink-0 whitespace-nowrap opacity-30">
                    <IconMdiImage />
                  </div>
                </div>
                <div class="text-blue-600 shrink-0 whitespace-nowrap">[2]</div>
              </div>
            </div>
          </div>
          <div class="h-[2px] w-full border border-dashed border-slate-200 mt-1"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  category: '',
  posts: Array,
})
const category = toRef(props, 'category')
const posts = toRef(props, 'posts')

watch(category, (newVal) => {
  console.log(newVal)
})

watch(posts, (newVal) => {
  console.log(newVal)
})
</script>
