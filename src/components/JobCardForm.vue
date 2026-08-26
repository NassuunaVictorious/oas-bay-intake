<template>
  <div class="form-container">
    <h2>Vehicle Registration</h2>

    
    <div class="form-group">
      <label>Plate Number:</label>
      <input 
        type="text" 
        :value="jobData.plateNumber" 
        @input="$emit('update:plateNumber', $event.target.value)" 
        placeholder="e.g. UBK 123A"
      />
    </div>

    <div class="form-group">
      <label>Owner Name:</label>
      <input 
        type="text" 
        :value="jobData.ownerName" 
        @input="$emit('update:ownerName', $event.target.value)" 
        placeholder="e.g. Mukasa James"
      />
    </div>
<div class="form-group">
  <label>Owner Contact:</label>
  <input
    type="text"
    v-model="ownerContact"
    @input="$emit('update:ownerContact', ownerContact)"
    placeholder="e.g. 0700123456"
  />
</div>

    <div class="form-group">
      <label>Vehicle Class:</label>
      <select 
        :value="jobData.vehicleClass" 
        @change="$emit('update:vehicleClass', $event.target.value)"
      >
        <option value="">-- Select Class --</option>
        <option value="Small">Small</option>
        <option value="Heavy">Heavy</option>
        <option value="Commercial">Commercial</option>
      </select>
    </div>
    <div class="form-group">
  <label>Technician:</label>

  <select
    v-model="selectedTechnician"
    @change="$emit('update:technician', selectedTechnician)"
  >
    <option value="">-- Select Technician --</option>

    <option
      v-for="technician in technicians"
      :key="technician"
      :value="technician"
    >
      {{ technician }}
    </option>
  </select>
</div>
    <div class="form-group">
      <label>Fixed Labour Charge:</label>
      <input type="text" value="20,000 UGX" disabled />
    </div>

    <h3>Select Services</h3>
    <div class="services-list">
      <div v-for="service in availableServices" :key="service.name" class="checkbox-item">
        <input 
          type="checkbox" 
          :id="service.name" 
          :value="service" 
          v-model="selectedServicesInternal"
          @change="$emit('update:selectedServices', selectedServicesInternal)"
        />
        <label :for="service.name">
          {{ service.name }} (UGX {{ service.price.toLocaleString() }})
        </label>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const ownerContact = ref('')
const selectedTechnician = ref('')
const selectedBay = ref('')

const props = defineProps({
  jobData: Object,
  availableServices: Array,
  technicians: Array,
  bays: Array
})

defineEmits([
  'update:plateNumber', 
  'update:ownerName', 
  'update:vehicleClass', 
  'update:technician',
  'update:bay',
  'update:selectedServices',

])

const selectedServicesInternal = ref([])
</script>

<style scoped>
.form-container {
  border: 1px solid #241010;
  padding: 16px;
  border-radius: 8px;
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 12px;
}

.form-group label {
  display: block;
  font-weight: bold;
  margin-bottom: 4px;
}

.form-group input, 
.form-group select {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
}

.checkbox-item {
  margin-bottom: 6px;
}
</style>