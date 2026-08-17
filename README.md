OASBay Job Card Intake is a Vue 3 single-page application built for Oyera Auto Service Bay Ltd. It enables Senior Technicians to register vehicles, select service options, issue inventory parts, and view live invoice totals.

Key Components & Business Rules:

JobCardForm.vue: Captures plate number (format: UBK 123A), owner name, and vehicle class (Heavy, Small, Commercial). Features a fixed read-only Labour Charge (UGX 20,000) and fixed service selections (Wheel alignment UGX 30,000, Wheel balancing UGX 20,000).

PartCard.vue: Displays stock items (Engine Oil, Oil Filter, Brake Fluid, Brake Pads). Decrements stock on issue, blocks out-of-stock items, and emits events to update running costs.

ConfirmationCard.vue: Displays a live summary (plate, owner, class, selected services, issued parts) with fallbacks ("None selected") and calculated grand totals.

Rubric & Concepts Covered: Uses a Vite setup, 3 SFCs, reactive state (reactive/ref), v-model form bindings, v-for list rendering, v-if/v-else conditional logic, parent-child communication (props/emits), onMounted lifecycle hook, and scoped CSS—built strictly with plain HTML/CSS (no external UI libraries).

Quick Start: Run npm install followed by npm run dev to launch locally at http://localhost:5173/