import { defineStore } from 'pinia'

export const useOasStore = defineStore('oas', {
  state: () => ({
    parts: [],
    jobs: [],
    user: {
      name: 'Admin',
      role: 'manager'
    }
  }),