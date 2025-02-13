<template>
  <div>
    <h2>Список постов</h2>
    <ul>
      <li v-for="post in posts" :key="post.id" class="post-item">
        {{ post.text }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

defineProps({
  posts: Array,
});
</script>

<style scoped>
.post-item {
  border: 1px solid #ccc;
  padding: 8px;
  margin: 5px 0;
}
</style>
