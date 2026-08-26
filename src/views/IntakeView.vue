<template>
  <div>
    <h1>Job Card Intake</h1>

    <JobCardForm
      :jobData="jobData"
      :availableServices="services"
      @update:plateNumber="jobData.plateNumber = $event"
      @update:ownerName="jobData.ownerName = $event"
      @update:vehicleClass="jobData.vehicleClass = $event"
      @update:selectedServices="jobData.selectedServices = $event"
    />

    <ConfirmationCard
      :jobData="jobData"
      :labourCharge="LABOUR_CHARGE"
    />
  </div>
</template>
<script setup>
import { reactive, ref } from 'vue'
import JobCardForm from '../components/JobCardForm.vue'
import ConfirmationCard from '../components/ConfirmationCard.vue'

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
</script>