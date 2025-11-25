<script setup>
import { ref, computed } from 'vue'

const tables = ref([
  {
    id: 1,
    number: 1,
    capacity: 8,
    assigned: 3,
    position: { x: 30, y: 30 },
    guests: [
      { name: 'John Smith', mealPreference: 'Vegetarian' },
      { name: 'Emma Johnson', mealPreference: 'Regular' },
      { name: 'Michael Brown', mealPreference: 'Vegan' },
    ]
  },
  {
    id: 2,
    number: 2,
    capacity: 8,
    assigned: 2,
    position: { x: 70, y: 30 },
    guests: [
      { name: 'Sarah Wilson', mealPreference: 'Regular' },
      { name: 'David Garcia', mealPreference: 'Regular' },
    ]
  },
  {
    id: 3,
    number: 3,
    capacity: 6,
    assigned: 2,
    position: { x: 50, y: 70 },
    guests: [
      { name: 'Lisa Chen', mealPreference: 'Vegetarian' },
      { name: 'James Williams', mealPreference: 'Regular' },
    ]
  }
])

const allGuests = ref([
  { name: 'John Smith', mealPreference: 'Vegetarian', assigned: true },
  { name: 'Emma Johnson', mealPreference: 'Regular', assigned: true },
  { name: 'Michael Brown', mealPreference: 'Vegan', assigned: true },
  { name: 'Sarah Wilson', mealPreference: 'Regular', assigned: true },
  { name: 'David Garcia', mealPreference: 'Regular', assigned: true },
  { name: 'Lisa Chen', mealPreference: 'Vegetarian', assigned: true },
  { name: 'James Williams', mealPreference: 'Regular', assigned: true },
  { name: 'Maria Rodriguez', mealPreference: 'Regular', assigned: false },
  { name: 'Robert Taylor', mealPreference: 'Vegetarian', assigned: false },
  { name: 'Jennifer Lee', mealPreference: 'Vegan', assigned: false },
])

const selectedTable = ref(null)
const isDragging = ref(false)
const draggedTable = ref(null)
const isAddingTable = ref(false)
const showGuestSelector = ref(false)

const newTable = ref({
  number: '',
  capacity: 8
})

const unassignedGuests = computed(() => {
  return allGuests.value.filter(guest => !guest.assigned)
})

const getTableStyles = (table) => {
  const occupancyRate = table.assigned / table.capacity
  let borderColor = 'border-emerald-400'

  if (occupancyRate >= 1) {
    borderColor = 'border-red-400'
  } else if (occupancyRate >= 0.75) {
    borderColor = 'border-amber-400'
  }

  return [
    borderColor,
    'bg-white'
  ]
}

const startDragging = (table, event) => {
  isDragging.value = true
  draggedTable.value = table

  const moveTable = (e) => {
    const container = event.target.closest('.border-dashed')
    const rect = container.getBoundingClientRect()

    const x = ((e.clientX - rect.left) / rect.width) * 100
    const y = ((e.clientY - rect.top) / rect.height) * 100

    table.position = {
      x: Math.max(0, Math.min(100, x)),
      y: Math.max(0, Math.min(100, y))
    }
  }

  const stopDragging = () => {
    isDragging.value = false
    draggedTable.value = null
    document.removeEventListener('mousemove', moveTable)
    document.removeEventListener('mouseup', stopDragging)
  }

  document.addEventListener('mousemove', moveTable)
  document.addEventListener('mouseup', stopDragging)
}

const selectTable = (table) => {
  selectedTable.value = table
}

const removeGuest = (table, guest) => {
  const index = table.guests.indexOf(guest)
  if (index > -1) {
    table.guests.splice(index, 1)
    table.assigned--
    const guestIndex = allGuests.value.findIndex(g => g.name === guest.name)
    if (guestIndex > -1) {
      allGuests.value[guestIndex].assigned = false
    }
  }
}

const assignGuest = (guest) => {
  if (!selectedTable.value || selectedTable.value.assigned >= selectedTable.value.capacity) return

  selectedTable.value.guests.push(guest)
  selectedTable.value.assigned++
  guest.assigned = true
  showGuestSelector.value = false
}

const addTable = () => {
  const table = {
    id: tables.value.length + 1,
    number: parseInt(newTable.value.number),
    capacity: parseInt(newTable.value.capacity),
    assigned: 0,
    position: { x: 50, y: 50 },
    guests: []
  }

  tables.value.push(table)
  isAddingTable.value = false
  newTable.value = { number: '', capacity: 8 }
}
</script>

<template>
  <div class="space-y-6 p-6">
    <div class="flex justify-between items-center mb-8">
      <h1 class="text-xl font-light">Floor Plan & Table Management</h1>
      <button @click="isAddingTable = true"
        class="bg-[#C8A898] text-white px-4 py-2 rounded-md hover:bg-[#bd7a59] transition-colors">
        Add New Table
      </button>
    </div>

    <div class="flex gap-6">
      <div class="w-3/4">
        <div class="bg-white p-6 rounded-lg shadow-sm">
          <div class="flex gap-4 mb-6">
            <span class="text-sm text-gray-500 flex items-center gap-2">
              <div class="w-3 h-3 rounded-full bg-emerald-400"></div> Available
            </span>
            <span class="text-sm text-gray-500 flex items-center gap-2">
              <div class="w-3 h-3 rounded-full bg-amber-400"></div> Almost Full
            </span>
            <span class="text-sm text-gray-500 flex items-center gap-2">
              <div class="w-3 h-3 rounded-full bg-red-400"></div> Full
            </span>
          </div>

          <div class="border-2 border-dashed border-gray-200 p-8 min-h-[600px] bg-gray-50 rounded-lg relative">
            <div v-for="table in tables" :key="table.id"
              :style="{ left: table.position.x + '%', top: table.position.y + '%' }"
              class="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-move"
              @mousedown="startDragging(table, $event)">
              <div class="flex flex-col items-center"
                :class="{ 'opacity-50': isDragging && draggedTable?.id === table.id }">
                <div class="relative group">
                  <div class="w-24 h-24 rounded-full border-4 flex items-center justify-center"
                    :class="getTableStyles(table)">
                    <div class="text-center">
                      <div class="font-semibold">Table {{ table.number }}</div>
                      <div class="text-sm">{{ table.assigned }}/{{ table.capacity }}</div>
                    </div>
                  </div>
                  <div @click="selectTable(table)"
                    class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 rounded-full flex items-center justify-center transition-all duration-200">
                    <span
                      class="opacity-0 group-hover:opacity-100 text-white bg-black bg-opacity-50 px-2 py-1 rounded text-sm">
                      Manage
                    </span>
                  </div>
                </div>
                <div class="mt-2 flex flex-wrap justify-center gap-1">
                  <div v-for="(guest, index) in table.guests.slice(0, 3)" :key="index"
                    class="w-2 h-2 rounded-full bg-gray-400">
                  </div>
                  <div v-if="table.guests.length > 3" class="text-xs text-gray-500">
                    +{{ table.guests.length - 3 }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="w-1/4">
        <div v-if="selectedTable" class="bg-white p-6 rounded-lg shadow-sm">
          <div class="flex justify-between items-center mb-6">
            <h3 class="text-lg font-semibold">Table {{ selectedTable.number }}</h3>
            <button @click="selectedTable = null" class="text-gray-400 hover:text-gray-600">
              ×
            </button>
          </div>

          <div class="space-y-4">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">
                Guests ({{ selectedTable.assigned }}/{{ selectedTable.capacity }})
              </label>
              <div class="space-y-2">
                <div v-for="guest in selectedTable.guests" :key="guest.name"
                  class="flex justify-between items-center p-2 bg-gray-50 rounded">
                  <div>
                    <div class="font-medium">{{ guest.name }}</div>
                    <div class="text-sm text-gray-500">{{ guest.mealPreference }}</div>
                  </div>
                  <button @click="removeGuest(selectedTable, guest)" class="text-red-400 hover:text-red-600">
                    ×
                  </button>
                </div>
              </div>
            </div>

            <button v-if="selectedTable.assigned < selectedTable.capacity" @click="showGuestSelector = true"
              class="w-full mt-4 bg-gray-100 text-gray-600 px-4 py-2 rounded hover:bg-gray-200 transition-colors">
              Add Guest
            </button>
          </div>
        </div>

        <div v-else class="bg-white p-6 rounded-lg shadow-sm text-center text-gray-500">
          Select a table to manage guests
        </div>
      </div>
    </div>

    <!-- Add Table Modal -->
    <div v-if="isAddingTable" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div class="bg-white p-6 rounded-lg w-96">
        <h3 class="text-lg font-semibold mb-4">Add New Table</h3>
        <div class="space-y-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">
              Table Number
            </label>
            <input v-model="newTable.number" type="number" class="w-full border rounded-md px-3 py-2" />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">
              Capacity
            </label>
            <input v-model="newTable.capacity" type="number" class="w-full border rounded-md px-3 py-2" />
          </div>
          <div class="flex justify-end gap-2 mt-6">
            <button @click="isAddingTable = false" class="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded">
              Cancel
            </button>
            <button @click="addTable" class="px-4 py-2 bg-[#C8A898] text-white rounded hover:bg-[#bd7a59]">
              Add Table
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Guest Selector Modal -->
    <div v-if="showGuestSelector" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div class="bg-white p-6 rounded-lg w-96">
        <h3 class="text-lg font-semibold mb-4">Add Guest to Table</h3>
        <div class="max-h-96 overflow-y-auto">
          <div v-for="guest in unassignedGuests" :key="guest.name" @click="assignGuest(guest)"
            class="p-3 hover:bg-gray-50 cursor-pointer rounded">
            <div class="font-medium">{{ guest.name }}</div>
            <div class="text-sm text-gray-500">{{ guest.mealPreference }}</div>
          </div>
        </div>
        <button @click="showGuestSelector = false"
          class="mt-4 w-full px-4 py-2 bg-gray-100 text-gray-600 rounded hover:bg-gray-200">
          Cancel
        </button>
      </div>
    </div>
  </div>
</template>
