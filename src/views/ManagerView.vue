<template>
  <div>
    <h1>Manager Dashboard</h1>

    <p>Welcome {{ oasStore.user.name }}</p>

    <p>Jobs: {{ oasStore.jobCount }}</p>

    <p>Parts: {{ oasStore.parts.length }}</p>

    <p>Role: {{ oasStore.user.role }}</p>
  </div>
</template>

<script setup>
import { useOasStore } from '../stores/oasStore'

const oasStore = useOasStore()
</script>