<script setup>
import { computed, reactive, ref } from 'vue'

const book = reactive({
  name: 'Book 1',
  chapters: [],
})
const lastName = ref('Bui Thi Hoai')
const firstName = ref('Thu')

const isPublished = computed(() => {
  return book.chapters.length ? 'Xuất bản' : 'Chưa xuất bản'
})
const fullName = computed({
  get() {
    return `${lastName.value} ${firstName.value}`
  },
  set(newValue) {
    const names = newValue.split(' ')
    lastName.value = names[0] || ''
    firstName.value = 'Onyra'
  },
})
const handleAddChapter = () => {
  book.chapters = [...book.chapters, `Chapter ${book.chapters.length + 1}`]
}
</script>

<template>
  <div>
    <p>Book: {{ book.name }}</p>
    <!-- <p>Đã xuất bản: {{ book.chapters.length ? 'Xuất bản' : 'Chưa xuất bản' }}</p> -->
    <p>Đã xuất bản: {{ isPublished }}</p>
    <button @click="handleAddChapter">Add chapters</button>
    <div>
      <label>Fullname: </label>
      <input type="text" v-model="fullName" />
      {{ firstName }} - {{ lastName }}
    </div>
  </div>
</template>

<style scoped></style>
