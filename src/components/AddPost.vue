<template>
  <div>
    <input id="post-title" v-model="newPost" placeholder="Введите пост" />
    <button id="add-post" @click="addPost">Добавить пост</button>
  </div>
</template>

<script setup>
import { ref, defineEmits } from "vue";

const newPost = ref("");
const emit = defineEmits(["add-post"]);

const addPost = () => {
  if (newPost.value.trim() !== "") {
    emit("add-post", newPost.value);
    newPost.value = "";
  }
};
</script>
