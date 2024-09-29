<template>
  <header class="header">
    <a href="#" class="header__logo">Mon site</a>
    <nav>
      <ul>
        <li><a href="#blog">Blog</a></li>
        <li><a href="#contact"></a>Contact</li>
        <li><a href="#"></a></li>
      </ul>
    </nav>
  </header>
</template>


<style scoped lang="scss">
.header {
  display: flex;
  align-items: center;
  gap: 20px;
  background-color: #13171f;
  border-bottom: 1px solid #fefefe;

  &__logo {
    font-size: 2px;
  }
}

a {
  text-decoration: none;
  color: inherit;
}
</style>