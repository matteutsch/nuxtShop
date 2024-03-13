<template>
  <div>
    <div class="row">
      <div class="col col-lg-3 mb-4" v-for="p in products">
        <ProductCard :product="p"></ProductCard>
      </div>
    </div>
  </div>
</template>

<script setup>
import ProductCard from "~/components/ProductCard.vue";

definePageMeta({
  layout: "products",
});

const { data: products } = await useFetch("https://fakestoreapi.com/products");
</script>

<style scoped></style>
