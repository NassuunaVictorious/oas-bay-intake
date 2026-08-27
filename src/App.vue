<template>
  <div id="app-container">

    <nav>
      <RouterLink to="/intake">Intake</RouterLink>
      <RouterLink to="/bays">Bays</RouterLink>
      <RouterLink to="/parts">Parts</RouterLink>
      <RouterLink to="/reports">Reports</RouterLink>
    </nav>

    <RouterView />
    <div class="parts-grid">
  <PartCard 
    v-for="part in oasStore.parts"
    :key="part.id"
    :id="part.id"
    :name="part.name"
    :unitPrice="part.unitPrice"
    :qtyInStock="part.qtyInStock"
    @issue-part="handleIssuePart"
  />
</div>
<div v-if="oasStore.lowStockParts.length > 0">
  <h3>Low Stock Parts</h3>

  <p v-for="part in oasStore.lowStockParts" :key="part.id">
    {{ part.name }} - {{ part.qtyInStock }} left
  </p>
</div>

  </div>
</template>

<script setup>
import { reactive, ref, onMounted } from 'vue'
import { useOasStore } from './stores/oasStore'

const oasStore = useOasStore()
oasStore.parts = [
  { id: 1, name: 'Engine Oil (20W-50)', unitPrice: 120000, qtyInStock: 10 },
  { id: 2, name: 'Oil Filter', unitPrice: 180000, qtyInStock: 8 },
  { id: 3, name: 'Brake Fluid', unitPrice: 15000, qtyInStock: 5 },
  { id: 4, name: 'Brake Pads (Front)', unitPrice: 45000, qtyInStock: 4 }
]
const LABOUR_CHARGE = 20000

const jobData = reactive({
  plateNumber: '',
  ownerName: '',
  ownerContact: '',
  vehicleClass: '',
  technician: '',
  bay: '',
  selectedServices: [],
  issuedParts: []
})

const services = ref([
  { name: 'Wheel alignment', price: 30000 },
  { name: 'Wheel balancing', price: 20000 }
])

const technicians = ref([
  { name: 'Okello' },
  { name: 'Lalobo' }
])

const bays = ref([
  'Bay 1',
  'Bay 2',
  'Bay 3'
])

const parts = ref([])

onMounted(() => {
  console.log('OAS Bay Intake loaded')

  parts.value = [
    {
      id: 1,
      name: 'Engine Oil (20W-50)',
      unitPrice: 120000,
      qtyInStock: 10
    },
    {
      id: 2,
      name: 'Oil Filter',
      unitPrice: 180000,
      qtyInStock: 8
    },
    {
      id: 3,
      name: 'Brake Fluid',
      unitPrice: 15000,
      qtyInStock: 5
    },
    {
      id: 4,
      name: 'Brake Pads (Front)',
      unitPrice: 45000,
      qtyInStock: 4
    }
  ]
})

function handleIssuePart(partId) {
  const part = parts.value.find(p => p.id === partId)

  if (part && part.qtyInStock > 0) {
    oasStore.issuePart(partId)

    jobData.issuedParts.push({
      id: part.id,
      name: part.name,
      unitPrice: part.unitPrice
    })
  }
}
function saveJob() {
  oasStore.addJob({
    plateNumber: jobData.plateNumber,
    ownerName: jobData.ownerName,
    vehicleClass: jobData.vehicleClass,
    technician: jobData.technician,
    bay: jobData.bay
  })
}
</script>

<style>
#app-container {
  max-width: 700px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
}

nav {
  display: flex;
  gap: 20px;
  padding: 15px 0;
}

nav a {
  text-decoration: none;
}

nav a.router-link-active {
  font-weight: bold;
}

.parts-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  margin-bottom: 24px;
}
</style>