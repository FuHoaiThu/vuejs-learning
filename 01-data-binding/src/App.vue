<script setup lang="ts">
const message = 'Hello Thu, have a nice day. Manifest T1 win'
const rawHtml = '<span style="color: red">This should be red.</span>'
const buttonId = 'button-id'
const isButtonDisabled = false
const objectOfAttrs = {
  id: 'container',
  class: 'wrapper',
}
const number = 0
const listString = 'a,b,c,d,e,f,g,h'
const convertTo = (data) => data.split('').reverse().join('')
const attributeName = 'href'
const url = 'https://pomofocus.io/'
</script>

<template>
  <!--Bai 1: Data bindind-->
  <main>
    <h1>Data binding</h1>
    <p>Message: {{ message }}</p>
    <p>Raw html: <span v-html="rawHtml"></span></p>
    <button :id="buttonId" :disabled="isButtonDisabled">
      {{ isButtonDisabled ? 'Disabled' : 'Click here' }}
    </button>
    <div v-bind="objectOfAttrs">Dynamic Constraints with Multiple Attributes</div>
    <div>Number: {{ number + 1 }}</div>
    <div>List string: {{ listString.split(',').join('-') }}</div>
    <div>Function: {{ convertTo('T1win') }}</div>
    <a :[attributeName]="url">Link</a>
  </main>
</template>

<style scoped></style>
