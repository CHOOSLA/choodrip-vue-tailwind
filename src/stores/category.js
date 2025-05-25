import { defineStore } from 'pinia'
export const useCategoryStore = defineStore('cate', {
  state: () => ({ categories: [], boards: [] }),

  // ❌ 용도 퍠기 : 비동기 통신과 computed는 별로임
  // pinia의 getter은 computed랑 똑같은 역할
  // 즉, 동일한 값에 대한 연산작업을 수행하지 않음
  // 정렬, 필터링된 목록에 대해서 훨씬 좋은 성능을 보여줌줌
  // getters: {
  //   sortedCategories: (state) => {
  //     // 4개의 인기 카테고리만 받아옴
  //     if (state.categories.length != 0 && state.boards.length != 0) {
  //       return state.boards.sort((boardByCateA, boardByCateB) => {
  //         return boardByCateB.posts.length - boardByCateA.posts.length
  //       })
  //     }

  //     return undefined
  //   },
  // },
  actions: {
    setCate(categories) {
      this.categories = categories
    },
    setBoard(board) {
      this.boards = board
    },
  },
  persist: true,
})
