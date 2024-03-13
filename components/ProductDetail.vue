<template>
  <div class="card">
    <div class="d-flex align-items-center h-100">
      <div class="p-4">
        <img
          class="mx-auto my-4 h-75"
          :src="product.image"
          alt="product image"
        />
      </div>
      <div class="p-4">
        <h2 class="text-center my-4">{{ product.title }}</h2>
        <h3 class="fw-bold my-2 text-end">{{ product.price }} ,-€</h3>
        <h3 class="fw-bold border-2 mb-4 py-2">Product description:</h3>
        <p class="mb-4">{{ product.description }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
const { product } = defineProps(["product"]);
</script>

<style scoped>
.h-75 {
  max-height: 75vh;
}
</style>
