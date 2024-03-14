<template>
  <div class="card d-flex justify-content-center align-items-center vh-100">
    <p class="fs-1 m-4 fw-bold">{{ error.statusCode }}</p>
    <p class="fs-2 m-4 fw-medium">Oooops.</p>
    <p class="m-4 text">{{ error.message }}</p>

    <button class="btn my-4 btn-danger" @click="handleClearError">
      Go Home...
    </button>
  </div>
</template>

<script setup lang="ts">
const handleClearError = () => clearError({ redirect: "/" });

defineProps(["error"]);
</script>

<style scoped></style>
