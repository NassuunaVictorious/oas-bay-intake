<template>
  <div class="confirmation-card">
    <h2>Job Card Summary</h2>

    <div class="summary-details">
      <p><strong>Plate:</strong> {{ jobData.plateNumber || 'None provided' }}</p>
      <p><strong>Owner:</strong> {{ jobData.ownerName || 'None provided' }}</p>
      <p><strong>Class:</strong> {{ jobData.vehicleClass || 'None selected' }}</p>
      
      <p>
        <strong>Services:</strong> 
        <span v-if="jobData.selectedServices.length > 0">
          {{ serviceNames }}
        </span>
        <span v-else>None selected</span>
      </p>

      <p>
        <strong>Parts:</strong> 
        <span v-if="jobData.issuedParts.length > 0">
          {{ partNames }}
        </span>
        <span v-else>None issued</span>
      </p>

      <hr />

      <p>Labour Charge: UGX {{ labourCharge.toLocaleString() }}</p>
      <p>Services Subtotal: UGX {{ servicesTotal.toLocaleString() }}</p>
      <p>Parts Subtotal: UGX {{ partsTotal.toLocaleString() }}</p>
      
      <hr />
      <h3 class="grand-total">TOTAL: UGX {{ grandTotal.toLocaleString() }}</h3>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  jobData: Object,
  labourCharge: Number
})


const serviceNames = computed(() => {
  return props.jobData.selectedServices.map(s => s.name).join(', ')
})


const partNames = computed(() => {
  return props.jobData.issuedParts.map(p => p.name).join(', ')
})


const servicesTotal = computed(() => {
  return props.jobData.selectedServices.reduce((sum, s) => sum + s.price, 0)
})

const partsTotal = computed(() => {
  return props.jobData.issuedParts.reduce((sum, p) => sum + p.unitPrice, 0)
})

const grandTotal = computed(() => {
  return props.labourCharge + servicesTotal.value + partsTotal.value
})
</script>

<style scoped>
.confirmation-card {
  border: 2px dashed #ced2d5;
  background-color: #291114;
  padding: 16px;
  border-radius: 8px;
}

.grand-total {
  color: #b0b3b7;
  margin-top: 10px;
}
</style>