<template>
  <div class="page">
    <h1>Service Bays</h1>

    <div class="bay" v-for="bay in bays" :key="bay.name">
      <h3>{{ bay.name }}</h3>
      <p>Status: {{ bay.status }}</p>
      <p>Technician: {{ bay.technician }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const bays = ref([
  { name: 'Oyera Bay 1', status: 'Available', technician: 'Okello' },
  { name: 'Oyera Bay 2', status: 'Occupied', technician: 'Lalobo' },
  { name: 'Oyera Bay 3', status: 'Available', technician: 'None' }
])
</script>

<style scoped>
.page {
  padding: 20px;
}

.bay {
  border: 1px solid #ccc;
  padding: 15px;
  margin-bottom: 10px;
}
</style>