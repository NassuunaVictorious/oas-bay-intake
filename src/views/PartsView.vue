<template>
  <div class="page">
    <h1>Parts Catalogue</h1>

    <div v-for="part in parts" :key="part.id" class="part">
      <h3>{{ part.name }}</h3>
      <p>Price: UGX {{ part.price.toLocaleString() }}</p>
      <p>Stock: {{ part.stock }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const parts = ref([
  { id: 1, name: 'Engine Oil', price: 120000, stock: 10 },
  { id: 2, name: 'Oil Filter', price: 180000, stock: 8 },
  { id: 3, name: 'Brake Fluid', price: 15000, stock: 5 },
  { id: 4, name: 'Brake Pads', price: 45000, stock: 4 }
])
</script>

<style scoped>
.page {
  padding: 20px;
}

.part {
  border: 1px solid #ccc;
  padding: 12px;
  margin-bottom: 10px;
}
</style>