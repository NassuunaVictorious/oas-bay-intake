const API_URL = 'https://jsonplaceholder.typicode.com'

export async function getJobs() {
  const response = await fetch(`${API_URL}/posts`)

  if (!response.ok) {
    throw new Error('Failed to get jobs')
  }

  return await response.json()
}

export async function addJob(job) {
  const response = await fetch(`${API_URL}/posts`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(job)
  })

  if (!response.ok) {
    throw new Error('Failed to save job')
  }

  return await response.json()
}