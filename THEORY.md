Number 2
1a.
count is just a normal JavaScript variable. Vue is not tracking changes to it, so when count++ happens
Vue does not know that it needs to update the template.

1b.
import { ref } from 'vue'

const count = ref(0)

function increment() {
  count.value++
}

1c.
ref() is normally used for a single value.

const ownerContact = ref('')

reactive() is useful for an object containing several related values.

const jobData = reactive({
  plateNumber: '',
  ownerName: '',
  vehicleClass: ''
})
to be more specific ref() is suitable for something like ownerContact, while reactive() is better for the whole jobData object.

Number 2
2a.
Diagram:
App.vue
   |
   | props: id, name, unitPrice, qtyInStock
   v
PartCard.vue
   |
   | emit: issue-part
   v
App.vue
2b.
  Pinia Store
        /         \
       /           \
  App.vue       PartCard.vue

2c.
From my code,
I would still use props when the data is only needed by a child component.

For example, in my project App.vue sends a single part's information to PartCard.vue:

<PartCard
  :name="part.name"
  :unitPrice="part.unitPrice"
  :qtyInStock="part.qtyInStock"
/>

I would use props here coz PartCard only needs to display the information for that particular part.So no need to put every small piece of data into Pinia.

Number 3
3a.
at the top i would first import computed
import { ref, computed } from 'vue'
n then:
const engineOilPriceValid = computed(() => {
  return engineOilPrice.value >= 79000 &&
         engineOilPrice.value <= 200000
})

3b.
used on the submit button:

<button
  :disabled="!engineOilPriceValid"
>
  Submit Job Card
</button>

explanation: When the price is 50,000,the computed property is false,so the button is disabled.when the price is between 79,000 and 200,000, the property becomes true and the button can be used. so it is prevented

3c.
Yes. The backend should also check the price.
For more security i think bcoz frontend could be bypassed by changing browser code hence backend validation needed.

Number 4
4a.
What i know is v-if only controls whether the link is shown on the page so it don't stop someone from typing the URL directly yet a beforeEach navigation guard checks the route before the user enters it.