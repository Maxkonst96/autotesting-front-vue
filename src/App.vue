<template>
  <div>
    <AddPost @add-post="addNewPost" />
    <PostList :posts="posts" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import AddPost from "./components/AddPost.vue";
import PostList from "./components/PostList.vue";

const posts = ref([]);

const addNewPost = (text) => {
  posts.value.push({ id: Date.now(), text });
};
</script>
