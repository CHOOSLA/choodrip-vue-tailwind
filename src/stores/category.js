import { defineStore } from 'pinia'
export const useCategoryStore = defineStore('cate', {
  state: () => ({ categories: [] }),
  actions: {
    setCate(categories) {
      this.categories = categories
      console.log('카테고리 전역 설정 완료')
    },
  },
  persist: true,
})
