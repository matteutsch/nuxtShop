<template>
  <div>
    <header class="shadow-sm bg-white">
      <nav class="container p-4">
        <NuxtLink to="/products" class="fw-bold">Nuxt3 Products</NuxtLink>
      </nav>
    </header>
  </div>
  <div class="container p-4">
    <slot></slot>
  </div>
  <footer>
    <nav class="container p-4">
      <ul class="d-flex gap-4">
        <li>
          <NuxtLink to="/" class="text-decoration-none text-success"
            >Home</NuxtLink
          >
        </li>
        <li>
          <NuxtLink to="/about" class="text-decoration-none text-success"
            >About</NuxtLink
          >
        </li>
        <li>
          <NuxtLink to="/products" class="btn btn-outline-success"
            >Products</NuxtLink
          >
        </li>
      </ul>
    </nav>
  </footer>
</template>

<style scoped>
.router-link-exact-active {
  color: red !important;
}
</style>
