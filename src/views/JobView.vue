<template>
  <div>
    <h1>Job</h1>
    <p>Job details will appear here.</p>
  </div>
</template>
<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
const plate = route.params.plate
</script>