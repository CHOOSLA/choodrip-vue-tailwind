<template>
  <div class="mx-auto min-h-screen max-w-screen-xl bg-white">
    <div class="w-full py-5">
      <div class="flex w-full flex-wrap">
        <div v-for="received in receivedAll" :key="received.categoryId" class="pr-10 md:w-1/2">
          <MainCard :category="received.categoryName" :posts="received.posts" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import MainCard from '@/components/MainCard.vue'
import { useBoardApi } from '@/model/board.js'
import { useCategoryStore } from '@/stores/category'

const { cateList, boardList } = useBoardApi()

// 라우터 인스턴스 생성

// 데이터를 받아주는 구간
const receivedAll = ref([])

onMounted(async () => {
  console.log('Main.vue onMount....')
  let tmpCates = []

  // 카테고리 받기
  try {
    console.log('categoryList 불러오는 중....')
    tmpCates = (await cateList()).data
    console.log(tmpCates)

    // 카테고리 전역 설정
    useCategoryStore().setCate(tmpCates)
    console.log('🍍 Category 전역 설정 완료')
  } catch (e) {
    console.log('카테고리 데이터 받기 실패! : ' + e)
  } finally {
    console.log('카테고리 받기 종료')
  }

  try {
    console.log('boardList 불러오는 중....')
    const receivedBoard = (await boardList()).data
    console.log(receivedBoard)

    // 이건 categoryId를 기준으로 두 개의 객체배열을 합쳐버림
    // tmpAll = tmpCates.map((obj1) => {
    //   const matchedObj = receivedBoard.find((obj2) => obj1.categoryId === obj2.categoryId)

    //   return { ...obj1, ...(matchedObj || {}) }
    // })
    // console.log('아래는 정재된 데이터')
    // console.log(tmpAll)
    // receivedAll.value = tmpAll

    // cateList와 boardList의 categoryId가 같은 것을 합침
    const sumData = tmpCates.map((cate) => {
      const relatedPosts = receivedBoard.filter((board) => cate.categoryId === board.categoryId)

      return { ...cate, posts: relatedPosts }
    })

    // posts(boardList()) 중 글이 없는거 제외
    const filteredSum = sumData.filter((data) => data.posts.length !== 0)
    console.log('✅ Category 기준으로 categoryId가 같은 posts를 모아온 데이터 ⬇️')
    console.log(filteredSum)
    // sumData.forEach((obj) => {
    //   console.log(obj.posts)
    // })
    receivedAll.value = filteredSum
  } catch (e) {
    console.log('게시글 데이터 받기 실패! : ' + e)
  } finally {
    console.log('게시글 목록 받기 종료')
  }
})
</script>
