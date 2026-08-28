import { defineStore } from 'pinia'

export const useOasStore = defineStore('oas', {
  state: () => ({
    parts: [],
    jobs: [],
    jobCount: (state) => {
  return state.jobs.length
},
addJob(job) {
  this.jobs.push(job)
},
    user: {
      name: 'Admin',
      role: 'manager'
    }
  }),
  getters: {
    lowStockParts: (state) => {
      return state.parts.filter(part => part.qtyInStock <= 2)
    },

    jobCount: (state) => {
      return state.jobs.length
    }
  },

  actions: {
    addPart(part) {
      this.parts.push(part)
    },

    addJob(job) {
      this.jobs.push(job)
    },

    issuePart(partId) {
      const part = this.parts.find(part => part.id === partId)

      if (part && part.qtyInStock > 0) {
        part.qtyInStock--
      }
    }
  }
})