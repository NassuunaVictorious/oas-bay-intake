<template>
  <div id="app-container">
    <nav>
      <RouterLink to="/intake">Intake</RouterLink>
      <RouterLink to="/bays">Bays</RouterLink>
      <RouterLink to="/parts">Parts</RouterLink>
      <RouterLink to="/reports">Reports</RouterLink>
    </nav>

    <RouterView />
  </div>
</template>

<style>
#app-container {
  max-width: 900px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
}

nav {
  display: flex;
  gap: 15px;
  margin-bottom: 20px;
  padding-bottom: 15px;
  border-bottom: 1px solid #ccc;
}

nav a {
  text-decoration: none;
}
</style>