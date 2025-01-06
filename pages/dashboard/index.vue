# pages/dashboard.vue
<template>
  <div class="min-h-screen flex flex-col bg-gray-50">
    <!-- Navigation Header -->
    <div class="bg-white border-b border-gray-100 px-6 flex justify-between items-center relative lg:static min-h-[70px]">
      <!-- Logo -->
      <img src="/assets/images/logo/vp-logo.png" class="w-12 p-2" alt="Vow Perfect Logo">
      
      <!-- Mobile Menu Toggle -->
      <div
        v-styleclass="{
          selector: '@next',
          enterFromClass: 'hidden',
          leaveToClass: 'hidden',
          hideOnOutsideClick: true
        }"
        class="cursor-pointer block lg:hidden text-gray-700 pr-6"
      >
        <i class="pi pi-bars text-2xl" />
      </div>

      <!-- Navigation Menu -->
      <div class="grow justify-between hidden lg:flex absolute lg:static w-full left-0 top-full z-10 shadow-lg lg:shadow-none bg-white">
        <ul class="list-none p-0 m-0 flex select-none flex-col lg:flex-row gap-2">
          <li class="lg:flex lg:items-end">
            <a
              class="flex items-center px-6 py-4 lg:px-4 lg:py-4 font-medium cursor-pointer transition-colors duration-150"
              :class="{
                'bg-[#f7dfd3] text-[#C8A898]': activeTab === 0,
                'hover:bg-gray-50': activeTab !== 0
              }"
              @click="activeTab = 0"
            >
              <i class="pi pi-users mr-2" />
              <span>RSVP Management</span>
            </a>
          </li>
          <li class="lg:flex lg:items-end">
            <a
              class="flex items-center px-6 py-4 lg:px-4 lg:py-4 font-medium cursor-pointer transition-colors duration-150"
              :class="{
                'bg-[#f7dfd3] text-[#C8A898]': activeTab === 1,
                'hover:bg-gray-50': activeTab !== 1
              }"
              @click="activeTab = 1"
            >
              <i class="pi pi-user mr-2" />
              <span>Profile</span>
            </a>
          </li>
        </ul>

        <!-- User Menu -->
        <ul class="list-none p-0 lg:pr-6 m-0 flex lg:items-center select-none flex-col lg:flex-row border-t border-gray-100 lg:border-t-0">
          <li class="border-t border-gray-100 lg:border-t-0">
            <a class="flex px-6 p-4 lg:px-4 lg:py-2 items-center hover:bg-gray-50 font-medium rounded cursor-pointer transition-colors duration-150">
              <img src="/assets/images/demo1/couple1.jpg" class="mr-4 lg:mr-2 w-8 h-8 rounded-full" />
              <div class="block">
                <div class="text-gray-900 font-medium">{{ coupleNames }}</div>
                <span class="text-gray-600 font-medium text-sm">{{ weddingDate }}</span>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>

    <!-- Main Content Area -->
    <div class="p-8 flex flex-col flex-auto">
      <!-- RSVP Management Tab -->
      <div v-if="activeTab === 0" class="space-y-6">
        <div class="flex justify-between items-center">
          <h1 class="text-3xl font-light">RSVP Management</h1>
          <span class="bg-[#C8A898] px-4 py-2 rounded-full text-white text-sm">
            {{ totalResponses }} Responses
          </span>
        </div>

        <!-- RSVP Stats Cards -->
        <div class="grid md:grid-cols-3 gap-6">
          <div v-for="stat in rsvpStats" :key="stat.label" 
               class="bg-white p-6 rounded-lg shadow-sm">
            <h3 class="text-gray-600 text-sm mb-2">{{ stat.label }}</h3>
            <p class="text-3xl font-light">{{ stat.value }}</p>
          </div>
        </div>

        <!-- Filters and Search -->
        <div class="md:flex gap-6 mx-2 items-center hidden">
          <!-- Status Filter -->
          <div class="p-4 w-1/4">
            <label class="text-sm text-gray-600 mb-2 block">Status Filter</label>
            <Dropdown
              v-model="filters.status"
              :options="statusOptions"
              optionLabel="label"
              placeholder="Select Status"
              class="w-full bg-white"
              @change="filterData"
            />
          </div>
          
          <!-- Search Input -->
          <div class=" w-2/3">
            <label class="text-sm text-gray-600 mb-2 block">Search Guests</label>
            <div class="relative flex items-center">
              <span class="absolute inset-y-0 left-0 flex items-center pl-3">
                <i class="pi pi-search text-gray-400 w-8 block"></i>
              </span>
              <InputText
                v-model="filters.searchQuery"
                placeholder="Search by name or email..."
                class="w-1/3 ml-10"
                @input="filterData"
              />
              <Button
                v-if="hasActiveFilters"
                label="Clear Filters"
                class="absolute right-0 top-0 bottom-0 p-button-text"
                @click="clearFilters"
              />
            </div>
          </div>
        </div>

        <!-- RSVP List -->
        <DataTable
          :value="filteredRsvpList"
          :paginator="true"
          :rows="10"
          paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink"
          responsiveLayout="scroll"
          class="p-datatable-sm"
        >
          <Column field="name" header="Guest Name"></Column>
          <Column field="email" header="Email"></Column>
          <Column field="status" header="Status">
            <template #body="slotProps">
              <Tag
                :value="slotProps.data.status"
                :severity="getStatusSeverity(slotProps.data.status)"
              />
            </template>
          </Column>
          <Column field="guests" header="Additional Guests"></Column>
          <Column field="mealPreference" header="Meal Preference"></Column>
        </DataTable>
      </div>

      <!-- Profile Tab -->
      <div v-if="activeTab === 1" class="max-w-2xl mx-auto space-y-8">
        <h2 class="text-3xl font-light text-center">Wedding Details</h2>
        
        <form @submit.prevent="updateProfile" class="space-y-6 bg-white p-8 rounded-lg shadow-sm">
          <div class="grid md:grid-cols-2 gap-6">
            <!-- Couple Details -->
            <div class="space-y-4">
              <h3 class="text-xl font-light">Partner 1</h3>
              <InputText v-model="profile.partner1Name" placeholder="Full Name" class="w-full" />
              <InputText v-model="profile.partner1Email" placeholder="Email" class="w-full" />
            </div>
            
            <div class="space-y-4">
              <h3 class="text-xl font-light">Partner 2</h3>
              <InputText v-model="profile.partner2Name" placeholder="Full Name" class="w-full" />
              <InputText v-model="profile.partner2Email" placeholder="Email" class="w-full" />
            </div>
          </div>

          <!-- Wedding Details -->
          <div class="space-y-4">
            <h3 class="text-xl font-light">Event Details</h3>
            <Calendar v-model="profile.weddingDate" placeholder="Wedding Date" class="w-full" />
            <InputText v-model="profile.venue" placeholder="Venue" class="w-full" />
            <InputTextarea v-model="profile.additionalInfo" 
                          placeholder="Additional Information for Guests"
                          rows="4" 
                          class="w-full" />
          </div>

          <div class="flex justify-center">
            <Button label="Save Changes" 
                    class="bg-[#C8A898] border-none hover:bg-[#bd7a59]" />
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import InputTextarea from 'primevue/textarea'
import Calendar from 'primevue/calendar'
import Tag from 'primevue/tag'
import Dropdown from 'primevue/dropdown'

const activeTab = ref(0)
const coupleNames = ref('Aleksandra & Guido')
const weddingDate = ref('November 15, 2025')
const totalResponses = ref(45)

// RSVP Management Data
const rsvpStats = ref([
  { label: 'Total Invited', value: 120 },
  { label: 'Attending', value: 45 },
  { label: 'Declined', value: 15 },
])

const rsvpList = ref([
  { 
    name: 'John Smith', 
    email: 'john@email.com',
    status: 'Attending',
    guests: 2,
    mealPreference: 'Vegetarian'
  },
  { 
    name: 'Emma Johnson', 
    email: 'emma.j@email.com',
    status: 'Attending',
    guests: 1,
    mealPreference: 'Regular'
  },
  { 
    name: 'Michael Brown', 
    email: 'mbrown@email.com',
    status: 'Declined',
    guests: 0,
    mealPreference: '-'
  },
  { 
    name: 'Sarah Wilson', 
    email: 'swilson@email.com',
    status: 'Attending',
    guests: 3,
    mealPreference: 'Regular'
  },
  { 
    name: 'David Garcia', 
    email: 'dgarcia@email.com',
    status: 'Pending',
    guests: 2,
    mealPreference: 'Pending'
  },
  { 
    name: 'Lisa Chen', 
    email: 'lchen@email.com',
    status: 'Attending',
    guests: 0,
    mealPreference: 'Vegan'
  },
  { 
    name: 'James Williams', 
    email: 'jwilliams@email.com',
    status: 'Declined',
    guests: 0,
    mealPreference: '-'
  },
  { 
    name: 'Maria Rodriguez', 
    email: 'mrodriguez@email.com',
    status: 'Attending',
    guests: 4,
    mealPreference: 'Regular'
  },
  { 
    name: 'Robert Taylor', 
    email: 'rtaylor@email.com',
    status: 'Pending',
    guests: 1,
    mealPreference: 'Pending'
  },
  { 
    name: 'Jennifer Lee', 
    email: 'jlee@email.com',
    status: 'Attending',
    guests: 2,
    mealPreference: 'Vegetarian'
  }
])

// Filters
const filters = ref({
  status: null,
  searchQuery: ''
})

const statusOptions = [
  { label: 'All', value: null },
  { label: 'Attending', value: 'Attending' },
  { label: 'Declined', value: 'Declined' },
  { label: 'Pending', value: 'Pending' }
]

// Compute if any filters are active
const hasActiveFilters = computed(() => {
  return filters.value.status !== null || filters.value.searchQuery !== ''
})

// Filtered list computed property
const filteredRsvpList = computed(() => {
  let filtered = [...rsvpList.value]

  // Apply status filter
  if (filters.value.status) {
    filtered = filtered.filter(item => item.status === filters.value.status.value)
  }

  // Apply search filter
  if (filters.value.searchQuery) {
    const query = filters.value.searchQuery.toLowerCase()
    filtered = filtered.filter(item =>
      item.name.toLowerCase().includes(query) ||
      item.email.toLowerCase().includes(query)
    )
  }

  return filtered
})

// Profile Data
const profile = ref({
  partner1Name: 'Aleksandra',
  partner1Email: 'aleksandra@email.com',
  partner2Name: 'Guido',
  partner2Email: 'guido@email.com',
  weddingDate: new Date('2025-11-15'),
  venue: 'Grand Palace',
  additionalInfo: ''
})

const getStatusSeverity = (status) => {
  switch (status) {
    case 'Attending': return 'success'
    case 'Declined': return 'danger'
    default: return 'warning'
  }
}

const filterData = () => {
  // Filtering is handled by computed property
}

const clearFilters = () => {
  filters.value = {
    status: null,
    searchQuery: ''
  }
}

const updateProfile = () => {
  // Handle profile update logic
  console.log('Profile updated:', profile.value)
}
</script>

<style scoped>
/* Base styles */
:deep(.p-component) {
  font-family: inherit;
}

/* Dropdown styles */
:deep(.p-dropdown) {
  width: 100%;
  border-radius: 0.375rem;
  border: 1px solid #e5e7eb;
  background: #fff;
}

:deep(.p-dropdown:not(.p-disabled).p-focus) {
  border-color: #C8A898;
  box-shadow: none;
}

:deep(.p-dropdown-panel) {
  border: 1px solid #e5e7eb;
  border-radius: 0.375rem;
  margin-top: 4px;
}

:deep(.p-dropdown-panel .p-dropdown-items .p-dropdown-item) {
  padding: 0.75rem 1.25rem;
  color: #374151;
}

:deep(.p-dropdown-panel .p-dropdown-items .p-dropdown-item.p-highlight) {
  background-color: #f7dfd3;
  color: #C8A898;
}

:deep(.p-dropdown-panel .p-dropdown-items .p-dropdown-item:hover) {
  background-color: #f7dfd3;
  color: #C8A898;
}

/* Input styles */
:deep(.p-inputtext) {
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid #e5e7eb;
  border-radius: 0.375rem;
  background: #fff;
  font-size: 0.875rem;
}

:deep(.p-inputtext:enabled:focus) {
  outline: none;
  border-color: #C8A898;
  box-shadow: none;
}

/* Button styles */
:deep(.p-button.p-button-text) {
  color: #6b7280;
  padding: 0.75rem 1rem;
  font-weight: normal;
}

:deep(.p-button.p-button-text:hover) {
  background: rgba(0,0,0,0.04);
  color: #374151;
}

/* DataTable styles */
:deep(.p-datatable) {
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  overflow: hidden;
}

:deep(.p-datatable .p-datatable-thead > tr > th) {
  background: #f9fafb;
  border-bottom: 1px solid #e5e7eb;
  color: #374151;
  padding: 0.75rem 1.25rem;
  font-weight: 500;
}

:deep(.p-datatable .p-datatable-tbody > tr > td) {
  padding: 0.75rem 1.25rem;
  border-bottom: 1px solid #e5e7eb;
}

:deep(.p-datatable .p-datatable-tbody > tr:last-child > td) {
  border-bottom: none;
}

:deep(.p-datatable .p-datatable-tbody > tr:hover) {
  background: #f9fafb;
}

/* Tag styles */
:deep(.p-tag) {
  border-radius: 9999px;
  padding: 0.25rem 0.75rem;
  font-size: 0.875rem;
}

:deep(.p-tag.p-tag-success) {
  background-color: #86efac;
  color: #166534;
}

:deep(.p-tag.p-tag-danger) {
  background-color: #fecaca;
  color: #dc2626;
}

:deep(.p-tag.p-tag-warning) {
  background-color: #fef3c7;
  color: #d97706;
}

/* Paginator styles */
:deep(.p-paginator) {
  background: #fff;
  border-top: 1px solid #e5e7eb;
  padding: 0.75rem;
}

:deep(.p-paginator .p-paginator-pages .p-paginator-page) {
  min-width: 2rem;
  height: 2rem;
  margin: 0 0.125rem;
  border-radius: 0.375rem;
}

:deep(.p-paginator .p-paginator-pages .p-paginator-page.p-highlight) {
  background: #f7dfd3;
  color: #C8A898;
}

:deep(.p-paginator .p-paginator-first),
:deep(.p-paginator .p-paginator-prev),
:deep(.p-paginator .p-paginator-next),
:deep(.p-paginator .p-paginator-last) {
  color: #6b7280;
}

:deep(.p-paginator .p-paginator-first:not(.p-disabled):hover),
:deep(.p-paginator .p-paginator-prev:not(.p-disabled):hover),
:deep(.p-paginator .p-paginator-next:not(.p-disabled):hover),
:deep(.p-paginator .p-paginator-last:not(.p-disabled):hover) {
  background: #f7dfd3;
  color: #C8A898;
}

/* Calendar styles */
:deep(.p-calendar) {
  width: 100%;
}

:deep(.p-calendar .p-inputtext) {
  width: 100%;
}

:deep(.p-calendar-w-btn .p-datepicker-trigger) {
  background: #fff;
  border: 1px solid #e5e7eb;
  border-left: none;
  color: #6b7280;
}

:deep(.p-calendar-w-btn .p-datepicker-trigger:hover) {
  background: #f9fafb;
  color: #374151;
}

/* TextArea styles */
:deep(.p-inputtextarea) {
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid #e5e7eb;
  border-radius: 0.375rem;
  background: #fff;
  font-size: 0.875rem;
}

:deep(.p-inputtextarea:enabled:focus) {
  outline: none;
  border-color: #C8A898;
  box-shadow: none;
}
</style>