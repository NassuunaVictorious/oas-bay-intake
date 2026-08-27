<template>
  <div class="reports">
    <h1>Reports</h1>

    <p v-if="loading">Loading jobs...</p>

    <p v-if="error" class="error">
      {{ error }}
    </p>

    <div v-if="!loading && !error">
      <p>Total jobs: {{ jobs.length }}</p>

      <div v-for="job in jobs" :key="job.id" class="job">
        <p>Job {{ job.id }}</p>
        <p>{{ job.title }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { getJobs } from '../services/api'

const jobs = ref([])
const loading = ref(false)
const error = ref('')

async function loadJobs() {
  loading.value = true
  error.value = ''

  try {
    jobs.value = await getJobs()
  } catch (err) {
    error.value = 'Could not load jobs'
  }

  loading.value = false
}

onMounted(() => {
  loadJobs()
})
</script>

<style scoped>
.reports {
  padding: 20px;
}

.job {
  border: 1px solid #ccc;
  padding: 10px;
  margin: 10px 0;
}

.error {
  color: red;
}
</style>