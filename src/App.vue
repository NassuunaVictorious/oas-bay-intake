<template>
  <div id="app-container">
    <h1>Oyera Auto Service Bay - Job Card Intake</h1>

    
    <JobCardForm 
      :jobData="jobData"
      :availableServices="services"
      @update:plateNumber="val => jobData.plateNumber = val"
      @update:ownerName="val => jobData.ownerName = val"
      @update:vehicleClass="val => jobData.vehicleClass = val"
      @update:selectedServices="val => jobData.selectedServices = val"
    />

    
    <h2>Parts Catalogue</h2>
    <div class="parts-grid">
      <PartCard 
        v-for="part in parts" 
        :key="part.id"
        :id="part.id"
        :name="part.name"
        :unitPrice="part.unitPrice"
        :qtyInStock="part.qtyInStock"
        @issue-part="handleIssuePart"
      />
    </div>

    <ConfirmationCard 
      :jobData="jobData"
      :labourCharge="LABOUR_CHARGE"
    />
  </div>
</template>

<script setup>
import { reactive, ref, onMounted } from 'vue'
import JobCardForm from './components/JobCardForm.vue'
import PartCard from './components/PartCard.vue'
import ConfirmationCard from './components/ConfirmationCard.vue'


const LABOUR_CHARGE = 20000


const jobData = reactive({
  plateNumber: '',
  ownerName: '',
  vehicleClass: '',
  selectedServices: [],
  issuedParts: []
})

const services = ref([
  { name: 'Wheel alignment', price: 30000 },
  { name: 'Wheel balancing', price: 20000 }
])

const parts = ref([])

onMounted(() => {
  console.log("OAS Bay Intake loaded")
  
  parts.value = [
    { id: 1, name: 'Engine Oil (20W-50)', unitPrice: 120000, qtyInStock: 10 },
    { id: 2, name: 'Oil Filter', unitPrice: 180000, qtyInStock: 8 },
    { id: 3, name: 'Brake Fluid', unitPrice: 15000, qtyInStock: 5 },
    { id: 4, name: 'Brake Pads (Front)', unitPrice: 45000, qtyInStock: 4 }
  ]
})

function handleIssuePart(partId) {
  const part = parts.value.find(p => p.id === partId)
  if (part && part.qtyInStock > 0) {
    part.qtyInStock--
    jobData.issuedParts.push(part)
  }
}
</script>

<style>
#app-container {
  max-width: 700px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
}

.parts-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  margin-bottom: 24px;
}
</style>