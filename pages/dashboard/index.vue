# pages/dashboard.vue
<template>
  <div class="min-h-screen flex flex-col bg-gray-50">
    <!-- Navigation Header -->
    <nav class="bg-white border-b border-gray-100">
      <div class="px-6 flex justify-between items-center h-[70px]">
        <img src="/assets/images/logo/vp-logo.png" class="w-12 p-2" alt="Vow Perfect Logo">

        <!-- Mobile Menu Button -->
        <button @click="isMobileMenuOpen = !isMobileMenuOpen" class="lg:hidden text-gray-700">
          <i class="pi pi-bars"></i>
        </button>

        <!-- Navigation Menu -->
        <div :class="[
          'absolute lg:static left-0 right-0 top-[70px] bg-white lg:bg-transparent',
          'lg:flex items-center justify-between flex-1 lg:px-6',
          isMobileMenuOpen ? 'block' : 'hidden lg:flex'
        ]">
          <ul class="flex flex-col lg:flex-row gap-2 p-4 lg:p-0">
            <li v-for="tab in tabs" :key="tab.id">
              <button @click="activeTab = tab.id" :class="[
                'flex items-center px-6 py-4 w-full lg:px-4 font-medium rounded-md transition-colors',
                activeTab === tab.id ? 'bg-[#f7dfd3] text-[#C8A898]' : 'hover:bg-gray-50'
              ]">
                <i :class="[tab.icon, 'mr-2']"></i>
                {{ tab.name }}
              </button>
            </li>
          </ul>

          <!-- User Menu -->
          <div class="p-4 lg:p-0 border-t lg:border-t-0 border-gray-100">
            <div class="flex items-center gap-3 hover:bg-gray-50 p-2 rounded-md cursor-pointer">
              <img src="/assets/images/demo1/couple1.jpg" class="w-8 h-8 rounded-full object-cover" alt="Profile">
              <div>
                <div class="text-gray-900 font-medium">{{ coupleNames }}</div>
                <div class="text-gray-500 text-sm">{{ weddingDate }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>

    <!-- Main Content Area -->
    <main class="flex-1 p-8 mx-2">
      <!-- RSVP Management -->
      <div v-if="activeTab === 0" class="space-y-6">
        <div class="flex justify-between items-center">
          <h1 class="text-2xl font-light">RSVP Management</h1>
          <div class="flex items-center gap-2">
            <span class="inline-flex items-center px-3 py-1 rounded-full text-sm bg-[#C8A898] text-white">
              {{ totalResponses }} Responses
            </span>
          </div>
        </div>

        <!-- Filters -->
        <div class="flex gap-6 items-end">
          <div class="flex-1 max-w-xs">
            <label class="block text-sm text-gray-600 mb-2">Status Filter</label>
            <select v-model="filters.status"
              class="w-full px-3 py-2 border border-gray-200 rounded-md focus:border-[#C8A898] focus:ring-1 focus:ring-[#C8A898] outline-none">
              <option v-for="option in statusOptions" :key="option.value" :value="option.value">
                {{ option.label }}
              </option>
            </select>
          </div>

          <div class="flex-1">
            <label class="block text-sm text-gray-600 mb-2">Search Guests</label>
            <div class="relative flex gap-2">
              <div class="relative flex-1">
                <input v-model="filters.searchQuery" type="text" placeholder="Search by name or email..."
                  class="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-md focus:border-[#C8A898] focus:ring-1 focus:ring-[#C8A898] outline-none">
                <i class="pi pi-search absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
              </div>
              <button @click="clearFilters"
                class="px-4 py-2 bg-red-100 text-red-600 rounded-md hover:bg-red-200 transition-colors">
                Clear
              </button>
            </div>
          </div>
        </div>

        <!-- Guest Table -->
        <!-- Guest Table -->
        <div class="bg-white rounded-lg border border-gray-200 overflow-hidden">
          <div class="overflow-x-auto">
            <table class="w-full">
              <thead>
                <tr class="bg-gray-50 border-b border-gray-200">
                  <th v-for="column in tableColumns" :key="column.field"
                    class="px-6 py-3 text-left text-sm font-medium text-gray-500"
                    :class="{ 'cursor-pointer hover:bg-gray-100': column.sortable }"
                    @click="column.sortable && sortData(column.field)">
                    <div class="flex items-center gap-2">
                      {{ column.header }}
                      <div v-if="column.sortable" class="flex flex-col">
                        <i class="pi pi-angle-up text-xs"
                          :class="{ 'text-[#C8A898]': sortField === column.field && sortDirection === 'asc' }"></i>
                        <i class="pi pi-angle-down text-xs"
                          :class="{ 'text-[#C8A898]': sortField === column.field && sortDirection === 'desc' }"></i>
                      </div>
                    </div>
                  </th>
                </tr>
              </thead>

              <!-- Empty State -->
              <tbody v-if="paginatedGuests.length === 0" class="divide-y divide-gray-200">
                <tr>
                  <td colspan="4" class="px-6 py-8 text-center text-gray-500">
                    <div class="flex flex-col items-center">
                      <i class="pi pi-search text-4xl mb-2"></i>
                      <p class="text-lg">No guests found</p>
                      <p class="text-sm">Try adjusting your filters or search term</p>
                    </div>
                  </td>
                </tr>
              </tbody>

              <!-- Table Content -->
              <tbody v-else class="divide-y divide-gray-200">
                <tr v-for="guest in paginatedGuests" :key="guest.id" class="hover:bg-gray-50">
                  <td class="px-6 py-4 text-sm text-gray-900 whitespace-nowrap">
                    {{ guest.name }}
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                    <span :class="[
                      'inline-flex items-center px-3 py-1 rounded-full text-sm',
                      getStatusClasses(guest.status)
                    ]">
                      {{ guest.status }}
                    </span>
                  </td>
                  <td class="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
                    {{ guest.guests }}
                  </td>
                  <td class="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
                    {{ guest.mealPreference }}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <!-- Pagination -->
          <div class="flex items-center justify-between px-6 py-3 border-t border-gray-200 bg-white">
            <div class="flex items-center gap-2">
              <button @click="currentPage = Math.max(1, currentPage - 1)" :disabled="currentPage === 1"
                class="px-3 py-1 rounded hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed">
                <i class="pi pi-angle-left"></i>
              </button>
              <div class="flex gap-1">
                <button v-for="page in totalPages" :key="page" @click="currentPage = page" :class="[
                  'px-3 py-1 rounded min-w-[32px]',
                  currentPage === page
                    ? 'bg-[#f7dfd3] text-[#C8A898]'
                    : 'hover:bg-gray-100'
                ]">
                  {{ page }}
                </button>
              </div>
              <button @click="currentPage = Math.min(totalPages, currentPage + 1)"
                :disabled="currentPage === totalPages"
                class="px-3 py-1 rounded hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed">
                <i class="pi pi-angle-right"></i>
              </button>
            </div>

            <div class="text-sm text-gray-500">
              Showing {{ paginatedGuests.length }} of {{ totalResponses }} guests
            </div>
          </div>
        </div>
      </div>

      <!-- Profile Tab -->
      <div v-if="activeTab === 2" class="max-w-2xl mx-auto space-y-8">
        <h2 class="text-2xl font-light text-center">Wedding Details</h2>

        <form @submit.prevent="updateProfile" class="space-y-6 bg-white p-8 rounded-lg shadow-sm">
          <div class="grid md:grid-cols-2 gap-6">
            <!-- Partner 1 -->
            <div class="space-y-4">
              <h3 class="text-xl font-light">Partner 1</h3>
              <div class="space-y-2">
                <input v-model="profile.partner1Name" type="text" placeholder="Full Name"
                  class="w-full px-3 py-2 border border-gray-200 rounded-md focus:border-[#C8A898] focus:ring-1 focus:ring-[#C8A898] outline-none">
                <input v-model="profile.partner1Email" type="email" placeholder="Email"
                  class="w-full px-3 py-2 border border-gray-200 rounded-md focus:border-[#C8A898] focus:ring-1 focus:ring-[#C8A898] outline-none">
              </div>
            </div>

            <!-- Partner 2 -->
            <div class="space-y-4">
              <h3 class="text-xl font-light">Partner 2</h3>
              <div class="space-y-2">
                <input v-model="profile.partner2Name" type="text" placeholder="Full Name"
                  class="w-full px-3 py-2 border border-gray-200 rounded-md focus:border-[#C8A898] focus:ring-1 focus:ring-[#C8A898] outline-none">
                <input v-model="profile.partner2Email" type="email" placeholder="Email"
                  class="w-full px-3 py-2 border border-gray-200 rounded-md focus:border-[#C8A898] focus:ring-1 focus:ring-[#C8A898] outline-none">
              </div>
            </div>
          </div>

          <!-- Event Details -->
          <div class="space-y-4">
            <h3 class="text-xl font-light">Event Details</h3>
            <input v-model="profile.weddingDate" type="date"
              class="w-full px-3 py-2 border border-gray-200 rounded-md focus:border-[#C8A898] focus:ring-1 focus:ring-[#C8A898] outline-none">
            <input v-model="profile.venue" type="text" placeholder="Venue"
              class="w-full px-3 py-2 border border-gray-200 rounded-md focus:border-[#C8A898] focus:ring-1 focus:ring-[#C8A898] outline-none">
            <textarea v-model="profile.additionalInfo" placeholder="Additional Information for Guests" rows="4"
              class="w-full px-3 py-2 border border-gray-200 rounded-md focus:border-[#C8A898] focus:ring-1 focus:ring-[#C8A898] outline-none resize-none"></textarea>
          </div>

          <div class="flex justify-center">
            <button type="submit"
              class="px-6 py-2 bg-[#C8A898] text-white rounded-md hover:bg-[#bd7a59] transition-colors">
              Save Changes
            </button>
          </div>
        </form>
      </div>

      <!-- Table Management Tab -->
      <DashboardTableManagement v-if="activeTab === 1" />
    </main>
  </div>
</template>
<script setup>
import { ref, computed, watch } from 'vue'

const tabs = [
  { id: 0, name: 'RSVP Management', icon: 'pi pi-users' },
  { id: 1, name: 'Table Management', icon: 'pi pi-th-large' },
  { id: 2, name: 'Profile', icon: 'pi pi-user' }
]

const tableColumns = [
  { field: 'name', header: 'Guest Name', sortable: true },
  { field: 'status', header: 'Status', sortable: true },
  { field: 'guests', header: 'Additional Guests', sortable: true },
  { field: 'mealPreference', header: 'Meal Preference', sortable: true }
]

const activeTab = ref(0)
const isMobileMenuOpen = ref(false)
const currentPage = ref(1)
const itemsPerPage = 10
const coupleNames = ref('Aleksandra & Guido')
const weddingDate = ref('November 15, 2025')
const sortField = ref('name')
const sortDirection = ref('asc')

const filters = ref({
  status: 'all',
  searchQuery: ''
})

const statusOptions = [
  { label: 'All', value: 'all' },
  { label: 'Attending', value: 'Attending' },
  { label: 'Declined', value: 'Declined' },
  { label: 'Pending', value: 'Pending' }
]

const rsvpList = ref([
  {
    id: 1,
    name: 'John Smith',
    status: 'Attending',
    guests: 2,
    mealPreference: 'Vegetarian'
  },
  {
    id: 2,
    name: 'Emma Johnson',
    status: 'Attending',
    guests: 1,
    mealPreference: 'Regular'
  },
  {
    id: 3,
    name: 'Michael Brown',
    status: 'Declined',
    guests: 0,
    mealPreference: '-'
  },
  {
    id: 4,
    name: 'Sarah Wilson',
    status: 'Attending',
    guests: 3,
    mealPreference: 'Regular'
  },
  {
    id: 5,
    name: 'David Garcia',
    status: 'Pending',
    guests: 2,
    mealPreference: 'Pending'
  },
  {
    id: 6,
    name: 'Lisa Chen',
    status: 'Attending',
    guests: 0,
    mealPreference: 'Vegan'
  },
  {
    id: 7,
    name: 'James Williams',
    status: 'Declined',
    guests: 0,
    mealPreference: '-'
  },
  {
    id: 8,
    name: 'Maria Rodriguez',
    status: 'Attending',
    guests: 4,
    mealPreference: 'Regular'
  },
  {
    id: 9,
    name: 'Robert Taylor',
    status: 'Pending',
    guests: 1,
    mealPreference: 'Pending'
  },
  {
    id: 10,
    name: 'Jennifer Lee',
    status: 'Attending',
    guests: 2,
    mealPreference: 'Vegetarian'
  }
])

const profile = ref({
  partner1Name: 'Aleksandra',
  partner1Email: 'aleksandra@email.com',
  partner2Name: 'Guido',
  partner2Email: 'guido@email.com',
  weddingDate: '2025-11-15',
  venue: 'Grand Palace',
  additionalInfo: ''
})

const filteredAndSortedList = computed(() => {
  if (!rsvpList.value) return []
  let filtered = []
  filtered = [...rsvpList.value]

  // Status filtering with proper type checking
  const statusFilter = filters.value.status
  if (statusFilter && statusFilter !== 'all') {
    filtered = filtered.filter(guest => guest.status === statusFilter)
  }

  // Search filtering with better error handling
  const searchQuery = filters.value.searchQuery?.trim().toLowerCase()
  if (searchQuery) {
    filtered = filtered.filter(guest => {
      const searchableFields = [
        guest.name,
        guest.email,
        guest.status,
        guest.mealPreference,
        String(guest.guests)
      ].map(field => (field || '').toLowerCase())

      return searchableFields.some(field => field.includes(searchQuery))
    })
  }

  // Sorting with proper type checking
  if (sortField.value) {
    filtered.sort((a, b) => {
      const aValue = a[sortField.value]
      const bValue = b[sortField.value]

      // Handle undefined/null values
      if (!aValue && !bValue) return 0
      if (!aValue) return 1
      if (!bValue) return -1

      // Numeric comparison
      if (typeof aValue === 'number' && typeof bValue === 'number') {
        return sortDirection.value === 'asc'
          ? aValue - bValue
          : bValue - aValue
      }

      // String comparison
      const aString = String(aValue).toLowerCase()
      const bString = String(bValue).toLowerCase()

      return sortDirection.value === 'asc'
        ? aString.localeCompare(bString)
        : bString.localeCompare(aString)
    })
  }

  return filtered
})

const totalResponses = computed(() => filteredAndSortedList.value.length)

const totalPages = computed(() => {
  const total = filteredAndSortedList.value.length
  return Math.max(1, Math.ceil(total / itemsPerPage))
})

const paginatedGuests = computed(() => {
  const filtered = filteredAndSortedList.value
  const start = (currentPage.value - 1) * itemsPerPage
  const end = Math.min(start + itemsPerPage, filtered.length)

  // Ensure currentPage is valid
  if (currentPage.value > totalPages.value) {
    currentPage.value = totalPages.value
  }

  return filtered.slice(start, end)
})

const getStatusClasses = (status) => {
  switch (status) {
    case 'Attending':
      return 'bg-green-100 text-green-800'
    case 'Declined':
      return 'bg-red-100 text-red-800'
    default:
      return 'bg-yellow-100 text-yellow-800'
  }
}

const sortData = (field) => {
  if (sortField.value === field) {
    sortDirection.value = sortDirection.value === 'asc' ? 'desc' : 'asc'
  } else {
    sortField.value = field
    sortDirection.value = 'asc'
  }
}

const clearFilters = () => {
  filters.value = {
    status: 'all',
    searchQuery: ''
  }
  currentPage.value = 1
  sortField.value = 'name'
  sortDirection.value = 'asc'
}

const updateProfile = () => {
  console.log('Profile updated:', profile.value)
}

// Add watchers for filters
watch(() => filters.value.status, () => {
  currentPage.value = 1
})

watch(() => filters.value.searchQuery, () => {
  currentPage.value = 1
})

// Add watcher for sorting
watch([sortField, sortDirection], () => {
  currentPage.value = 1
})
</script>

<style>
@import 'primeicons/primeicons.css';
</style>