<template>
  <div class="mb-16 max-w-full">
    <div>
      <label class="px-4 text-4xl text-blue-600"> {{ category }} </label>
      <div class="ml-3 mt-4 h-[3px] w-full rounded-lg bg-slate-400"></div>

      <div class="mt-5 pl-4">
        <div v-for="post in posts.slice(0, 10)" :key="post.boardId" class="mb-2">
          <div class="flex max-w-full text-lg hover:cursor-pointer">
            <div class="inline-flex w-full space-x-3 text-lg font-normal">
              <div class="overflow-hidden truncate whitespace-nowrap">
                {{ post.title }}
              </div>
              <div class="inline-flex">
                <div v-if="post.img !== ''" class="flex items-center">
                  <div class="shrink-0 whitespace-nowrap opacity-30">
                    <IconMdiImage />
                  </div>
                </div>
                <div class="shrink-0 whitespace-nowrap text-blue-600">[2]</div>
              </div>
            </div>
          </div>
          <div class="mt-1 h-[2px] w-full border border-dashed border-slate-200"></div>
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
