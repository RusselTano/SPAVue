<template>
  <article class="post">
    <a href="#"><img :src="thumbnail" alt="" /></a>

    <h2>
      <a href="#">
        {{ post.title }}
      </a>
    </h2>
    <p>
      {{ post.body }}
    </p>
  </article>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  post: Object,
});
const thumbnail = computed(
  () => `https://picsum.photos/id/${props.post.id}/280/180`
);
</script>

<style lang="scss">
.post {
  box-shadow: 3px 3px 3px 3px rgba(255, 255, 255, 0.2);
  width: 400px;
  height: auto;
  height: 600px;

  padding: calc(var(--pico-block-spacing-vertical) * -1);

  h2 {
    text-decoration: underline;
    color: orange;

    &:hover {
      text-decoration: none;
    }
  }

  h2,
  p {
    margin: 20px;
  }
}
img {
  width: 100%;
  padding: 0;
  margin: 0;
}
.post__container {
  margin-top: 100px;
  display: flex;
  // justify-content: center;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
}
</style>
