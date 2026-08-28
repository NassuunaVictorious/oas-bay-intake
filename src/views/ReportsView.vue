<template>
  <div class="reports">
    <h1>Reports</h1>

    <p>Total jobs: {{ oasStore.jobCount }}</p>

    <p v-if="oasStore.jobs.length === 0">
      No jobs have been recorded yet.
    </p>

    <div
      v-for="(job, index) in oasStore.jobs"
      :key="index"
      class="job"
    >
      <h3>Job {{ index + 1 }}</h3>
      <p>Plate: {{ job.plateNumber }}</p>
      <p>Owner: {{ job.ownerName }}</p>
      <p>Contact: {{ job.ownerContact }}</p>
      <p>Vehicle Class: {{ job.vehicleClass }}</p>
      <p>Technician: {{ job.technician }}</p>
      <p>Bay: {{ job.bay }}</p>
    </div>
  </div>
</template>

<script setup>
import { useOasStore } from '../stores/oasStore'

const oasStore = useOasStore()
</script>

<style scoped>
.reports {
  padding: 20px;
}

.job {
  border: 1px solid #ccc;
  padding: 15px;
  margin: 10px 0;
}
</style>