<template>
  <div>
    <header class="shadow-sm bg-white">
      <nav class="container d-flex justify-content-between p-4">
        <NuxtLink to="/" class="fw-bold">Nuxt3</NuxtLink>
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
    </header>
    <div class="container p-4">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.router-link-exact-active {
  color: red;
}
</style>
