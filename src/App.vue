<template>
  <Header />
  <ContactPage v-if="page === 'contact'" />
  <BlogPage v-else-if="page === 'blog'" />
  <HomePage v-else-if="page === ''" />
  <NotFoundPage v-else/>
</template>

<script setup>
import Header from "./components/Header.vue";
import BlogPage from "./pages/BlogPage.vue";
import ContactPage from "./pages/ContactPage.vue";
import HomePage from "./pages/HomePage.vue";
import { usePage } from "./composable/usePage";
import NotFoundPage from "./pages/NotFoundPage.vue";

const { page } = usePage();
</script>

<style scoped></style>
