<template>
  <div class="part-card">
    <h4>{{ name }}</h4>
    <p>Price: UGX {{ unitPrice.toLocaleString() }}</p>
    <p>In Stock: {{ qtyInStock }}</p>

    
    <button v-if="qtyInStock > 0" @click="issuePart" class="btn-issue">
      Issue to Job
    </button>
    <span v-else class="out-of-stock">Out of Stock</span>
  </div>
</template>

<script setup>

const props = defineProps({
  id: Number,
  name: String,
  unitPrice: Number,
  qtyInStock: Number
})


const emit = defineEmits(['issue-part'])

function issuePart() {
  emit('issue-part', props.id)
}
</script>

<style scoped>

.part-card {
  border: 1px solid #684545;
  padding: 12px;
  border-radius: 6px;
  background-color: #2f1818;
}

.btn-issue {
  background-color: #28a745;
  color: rgb(58, 38, 38);
  border: none;
  padding: 6px 12px;
  border-radius: 4px;
  cursor: pointer;
}

.out-of-stock {
  color: #dc3545;
  font-weight: bold;
}
</style>