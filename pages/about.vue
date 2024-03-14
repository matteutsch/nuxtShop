<template>
  <div>
    <h2>About</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. In iste
      necessitatibus dolore culpa obcaecati veritatis error voluptas repellat
      accusamus consequuntur.
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. In iste
      necessitatibus dolore culpa obcaecati veritatis error voluptas repellat
      accusamus consequuntur.
    </p>
    <div>
      {{ data }}
    </div>
  </div>
</template>

<script setup>
const { data } = await useFetch("./api/currency/GBP");
</script>

<style lang="scss" scoped></style>
