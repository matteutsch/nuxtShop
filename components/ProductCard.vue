<template>
  <div class="card text-center p-4">
    <img class="thumb" :src="product.image" alt="product image" />
    <p class="fw-bold text-danger m-2 text-truncate">{{ product.title }}</p>
    <NuxtLink :to="`products/${product.id}`"
      ><p class="btn btn-success my-4">View Details</p></NuxtLink
    >
  </div>
</template>

<script setup lang="ts">
const { product } = defineProps(["product"]);
</script>

<style scoped>
.thumb {
  height: 120px;
  max-width: 100%;
  width: auto;
  margin: 0 auto;
}
</style>
