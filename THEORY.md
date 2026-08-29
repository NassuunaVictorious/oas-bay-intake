Section B
Number 1
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

4b.
router.beforeEach((to) => {
  const role = localStorage.getItem('role')

  if (role === 'technician' &&
      (to.path === '/parts' || to.path === '/reports')) {
    return '/intake'
  }
})
sends a technician back to /intake if they try to access /parts or /reports


4c.The technician could type /reports directly into the browser address bar.

Number 5
5a
onMounted runs after the component has been added to the page and you cant call fetch at hte top because fetch request can be started at the top level,but the DOM is not guaranteed to be ready at that point.

5b
data contains a Promise, not the actual parts data since fetch is an asynchronous function so it gotta wait for the server response so it gives a promise as other functions run. With await tho, the code waits for response before continuing

Section B
The Bugs evidence is found in a folder named Bugs evidence
Bug1
Got this error when i had just starded adding routes [plugin:vite-plugin-vue-inspector] Element is missing end tag. and the error directed me to src/components/JobCardForm.vue
So apparently in JobCardForm.vue i had opened a div element but hadnt closed it
Tofix it i looked through the form and checked the opening and closing tags till i saw the error
Bug2
I was just starting to add routes so i created a file JobView.vue but i put there nothing so i got this error [plugin:vite:vue] At least one <template> or <script> is required in a single file component.
but i didnt know what it meant cause in Nodejs we couldnt get errors for leaving files blank so i fixed it by puting a normal  baseline template <template>
  <div>
    <h1>Page</h1>
  </div>
</template>
Bug3
The last bug was not easy to see and yet a very simple one so apparently i created a folder named vue-oyera and in it i made another folder called vue-project which is my root directory. SO i forgot and opened vue-oyera and run nom run dev. But remember vue-oyera just has a folder vue-project so it has no package.json file or whatever.
so it displayed this error:
user@USERs-MacBook-Air vue-oyera % npm run dev                                      
npm error Missing script: "dev"
npm error
npm error To see a list of scripts, run:
npm error   npm run
npm error A complete log of this run can be found in: /Users/user/.npm/_logs/2026-08-28T19_10_08_615Z-debug-0.log
user@USERs-MacBook-Air vue-oyera % 

Was able to fix by cd vue-project and rerunning npm run dev command

Bug 4
My last error is actually absurd so apparently i have 2 githubs with the same email but if i sign in using appleid its different from when i sign in using google. So i remote added the oas-intake repository to the wrong github and after some research i was able to remove it from origin and add it to the right github account but when i was commiting using the right githb account, the changes were being saved locally and were not being pushed to the github. So i realised much later they were not being pushed to the github which is so sad. But i finally got to push the changes so that they reflected on github though muvh later

here is the commit history showing the error i made with the appleid and email 
7931890 | Victorious | your-email@example.com | 2026-08-28 | Updated
ce62bd5 | Victorious | your-email@example.com | 2026-08-28 | Updated
bf171dc | Victorious | your-email@example.com | 2026-08-28 | Updated
2cb4912 | Victorious | your-email@example.com | 2026-08-28 | Updated
d3af6ab | Victorious | your-email@example.com | 2026-08-28 | Updated
c56a381 | Victorious | your-email@example.com | 2026-08-28 | Updated
e93aa17 | Victorious | your-email@example.com | 2026-08-27 | Added Pinia state and job actions
67b73ea | Victorious | your-email@example.com | 2026-08-27 | Added Pinia state and job actions
3df82ed | Victorious | your-email@example.com | 2026-08-27 | updated
0c07ee7 | Victorious | your-email@example.com | 2026-08-27 | updated file
b07642c | Victorious | your-email@example.com | 2026-08-27 | created new file
1ea2a0f | Victorious | your-email@example.com | 2026-08-27 | Bug fixed
4771bc3 | Victorious | your-email@example.com | 2026-08-27 | Installed pinia
71ed642 | Victorious | your-email@example.com | 2026-08-27 | Updated App.vue
dbc2132 | Victorious | your-email@example.com | 2026-08-27 | Updated Parts card
068f1be | Victorious | your-email@example.com | 2026-08-27 | Update confirmation card
caee55a | Victorious | your-email@example.com | 2026-08-27 | Update confirmation card
a06abc0 | Victorious | your-email@example.com | 2026-08-27 | Update JobCardForm component
3ff0c58 | Victorious | your-email@example.com | 2026-08-27 | Made changes to Jobcard
79c4fe2 | Victorious | your-email@example.com | 2026-08-26 | Updated App.vue
3f0b551 | Victorious | your-email@example.com | 2026-08-26 | Route Added and bug fixed
ca1a46e | Victorious | your-email@example.com | 2026-08-26 | Added routes
2b6d123 | Victorious | your-email@example.com | 2026-08-24 | Added routes
aa4c87d | NassuunaVictorious | zmwbnvmnsm@privaterelay.appleid.com | 2026-08-17 | Update README with project name and description
f454d25 | NassuunaVictorious | zmwbnvmnsm@privaterelay.appleid.com | 2026-08-17 | Add project name to README
ca7142b | NassuunaVictorious | zmwbnvmnsm@privaterelay.appleid.com | 2026-08-17 | Update README with image in Quick Start section
b35b776 | Victorious | your-email@example.com | 2026-08-17 | Initial commit - OASBay Job Card Intake