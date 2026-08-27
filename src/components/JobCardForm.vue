<template>
  <div class="form-container">
    <h2>Vehicle Registration</h2>

    <div class="form-group">
      <label>Plate Number:</label>
      <input
  type="text"
  :value="jobData.plateNumber"
  @input="$emit('update:plateNumber', $event.target.value.toUpperCase())"
  placeholder="e.g. UBK 123A"
/>

      <p v-if="!plateValid" class="error">
        Enter a valid plate number.
      </p>
    </div>

    <div class="form-group">
      <label>Owner Name:</label>
      <input
        type="text"
        :value="jobData.ownerName"
        @input="$emit('update:ownerName', $event.target.value)"
        placeholder="e.g. Mukasa James"
      />

      <p v-if="!nameValid" class="error">
        Owner name is required.
      </p>
    </div>

    <div class="form-group">
      <label>Owner Contact:</label>
      <input
        type="text"
        v-model="ownerContact"
        @input="$emit('update:ownerContact', ownerContact)"
        placeholder="e.g. 0700123456"
      />

      <p v-if="!contactValid" class="error">
        Enter a valid phone number.
      </p>
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

      <p v-if="!classValid" class="error">
        Select a vehicle class.
      </p>
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
          :key="technician.name"
          :value="technician.name"
        >
          {{ technician.name }}
        </option>
      </select>

      <p v-if="!technicianValid" class="error">
        Select a technician.
      </p>
    </div>

    <div class="form-group">
      <label>Bay:</label>

      <select
        v-model="selectedBay"
        @change="$emit('update:bay', selectedBay)"
      >
        <option value="">-- Select Bay --</option>

        <option
          v-for="bay in bays"
          :key="bay"
          :value="bay"
        >
          {{ bay }}
        </option>
      </select>

      <p v-if="!bayValid" class="error">
        Select a bay.
      </p>
    </div>

    <div class="form-group">
      <label>Fixed Labour Charge:</label>
      <input type="text" value="20,000 UGX" disabled />
    </div>

    <h3>Select Services</h3>

    <div class="services-list">
      <div
        v-for="service in availableServices"
        :key="service.name"
        class="checkbox-item"
      >
        <input
          type="checkbox"
          :id="service.name"
          :value="service"
          v-model="selectedServicesInternal"
          @change="$emit('update:selectedServices', selectedServicesInternal)"
        />

        <label :for="service.name">
          {{ service.name }}
          (UGX {{ service.price.toLocaleString() }})
        </label>
      </div>
    </div>

    <p v-if="!serviceValid" class="error">
      Select at least one service.
    </p>

    <div class="form-errors" v-if="errorCount > 0">
      {{ errorCount }} error(s) remaining
    </div>

    <div v-else class="form-success">
      Form is ready to submit.
    </div>

    <button
      type="button"
      :disabled="errorCount > 0"
      @click="submitted = true"
    >
      Submit Job Card
    </button>

    <p v-if="submitted" class="success">
      Job card submitted.
    </p>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  jobData: Object,
  availableServices: Array,
  technicians: Array,
  bays: Array
})

const emit = defineEmits([
  'update:plateNumber',
  'update:ownerName',
  'update:ownerContact',
  'update:vehicleClass',
  'update:technician',
  'update:bay',
  'update:selectedServices'
])

const ownerContact = ref('')
const selectedTechnician = ref('')
const selectedBay = ref('')
const selectedServicesInternal = ref([])
const submitted = ref(false)

const plateValid = computed(() => {
  return /^[A-Z]{2,3}\s?[0-9]{3,4}[A-Z]$/i.test(
    props.jobData.plateNumber
  )
})

const nameValid = computed(() => {
  return props.jobData.ownerName.trim().length >= 2
})

const contactValid = computed(() => {
  return /^07[0-9]{8}$/.test(ownerContact.value)
})

const classValid = computed(() => {
  return props.jobData.vehicleClass !== ''
})

const technicianValid = computed(() => {
  return selectedTechnician.value !== ''
})

const bayValid = computed(() => {
  return selectedBay.value !== ''
})

const serviceValid = computed(() => {
  return selectedServicesInternal.value.length > 0
})

const errorCount = computed(() => {
  let errors = 0

  if (!plateValid.value) errors++
  if (!nameValid.value) errors++
  if (!contactValid.value) errors++
  if (!classValid.value) errors++
  if (!technicianValid.value) errors++
  if (!bayValid.value) errors++
  if (!serviceValid.value) errors++

  return errors
})
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

.error {
  color: red;
  font-size: 14px;
  margin-top: 4px;
}

.form-errors {
  margin-top: 15px;
  color: red;
  font-weight: bold;
}

.form-success {
  margin-top: 15px;
  color: green;
  font-weight: bold;
}

.success {
  color: green;
  font-weight: bold;
  margin-top: 10px;
}

button {
  margin-top: 15px;
  padding: 10px 20px;
}

