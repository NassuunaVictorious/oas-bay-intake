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
        v-bind="part"
        @issue-part="handleIssuePart"
      />
    </div>

    <div v-if="oasStore.lowStockParts.length" class="alert-box">
      <h3>Low Stock Parts</h3>
      <p v-for="part in oasStore.lowStockParts" :key="part.id">
        {{ part.name }} — {{ part.qtyInStock }} left
      </p>
    </div>

    <!-- Nested properly inside parent container -->
    <JobCardForm 
      v-model="jobData"
      :availableServices="services"
      :technicians="technicians"
      :bays="bays"
      @submit-job="saveJob"
    />

    <ConfirmationCard 
      :jobData="jobData"
      :labourCharge="LABOUR_CHARGE"
    />

    <div class="summary-section">
      <p>Jobs recorded: {{ oasStore.jobCount }}</p>
      <div v-if="oasStore.jobs.length">
        <h3>Saved Jobs</h3>
        <div v-for="job in oasStore.jobs" :key="job.plateNumber">
          <p>{{ job.plateNumber }} - {{ job.ownerName }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { useOasStore } from './stores/oasStore'
import { addJob } from './services/api'

const oasStore = useOasStore()
const LABOUR_CHARGE = 20000

// Initialize store data in one central place
oasStore.parts = [
  { id: 1, name: 'Engine Oil (20W-50)', unitPrice: 120000, qtyInStock: 10 },
  { id: 2, name: 'Oil Filter', unitPrice: 180000, qtyInStock: 8 },
  { id: 3, name: 'Brake Fluid', unitPrice: 15000, qtyInStock: 5 },
  { id: 4, name: 'Brake Pads (Front)', unitPrice: 45000, qtyInStock: 4 }
]

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

const technicians = ref([{ name: 'Okello' }, { name: 'Lalobo' }])
const bays = ref(['Bay 1', 'Bay 2', 'Bay 3'])

function handleIssuePart(partId) {
  const part = oasStore.parts.find(p => p.id === partId)
  
  if (part && part.qtyInStock > 0) {
    oasStore.issuePart(partId)
    jobData.issuedParts.push({
      id: part.id,
      name: part.name,
      unitPrice: part.unitPrice
    })
  }
}

async function saveJob() {
  try {
    // Post the reactive state properties directly
    await addJob({ ...jobData })
    oasStore.addJob({ ...jobData })
    alert('Job saved successfully')
  } catch (err) {
    alert('Could not save job')
  }
}
</script>
