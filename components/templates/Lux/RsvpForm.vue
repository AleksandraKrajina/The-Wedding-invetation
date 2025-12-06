<template>
  <div class="container mx-auto px-4 sm:px-6 py-8 sm:py-12 max-w-2xl" id="rsvp">
    <div v-if="formSubmitted" class="text-center">
      <div class="mb-6 text-[#C5A669]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-16 w-16 mx-auto"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <h2 class="text-3xl text-[#C5A669] mb-4 font-eyesome">HVALA!</h2>
      <p class="text-gray-600 mb-8">Vaš odgovor je uspešno zabeležen.</p>
      <button
        @click="resetForm"
        class="border-2 border-[#C5A669] px-8 py-2 uppercase tracking-wider text-[#C5A669] hover:bg-[#C5A669] hover:text-white transition-colors duration-300 text-sm">
        Unesi novi odgovor
      </button>
    </div>

    <div v-else-if="formError" class="text-center">
      <div class="mb-6 text-red-500">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-16 w-16 mx-auto"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      </div>
      <h2 class="text-3xl text-red-500 mb-4 font-eyesome">GREŠKA</h2>
      <p class="text-gray-600 mb-8">Došlo je do greške prilikom slanja odgovora. Molimo pokušajte ponovo.</p>
      <button
        @click="resetFormError"
        class="border-2 border-[#C5A669] px-8 py-2 uppercase tracking-wider text-[#C5A669] hover:bg-[#C5A669] hover:text-white transition-colors duration-300 text-sm">
        Pokušaj ponovo
      </button>
    </div>

    <form
      v-else
      @submit.prevent="submitForm"
      class="space-y-6 sm:space-y-8 transition-all duration-300 ease-in-out">
      <!-- Title -->
      <div class="text-left mb-8 sm:mb-12 border-l-4 border-[#C5A669] pl-4">
        <h2
          class="text-3xl sm:text-4xl text-[#C5A669] mb-4 sm:mb-6 font-eyesome">
          POTVRDA PRISUSTVA
        </h2>
        <p class="text-gray-600 text-sm sm:text-base mb-2">
          Molimo vas da potvrdite vaš dolazak putem forme ispod do 15. maja.
        </p>
        <p class="text-gray-600 text-sm sm:text-base">
          Unesite ime i prezime jednog člana porodice.
        </p>
      </div>

      <!-- Name Input -->
      <div class="space-y-2">
        <label
          class="block text-gray-700 uppercase tracking-wide text-xs sm:text-sm"
          >Ime i prezime</label
        >
        <input
          type="text"
          v-model="formData.name"
          class="w-full border-b border-gray-300 py-2 focus:border-[#C5A669] focus:outline-none transition-colors bg-gray-50/30"
          required />
      </div>

      <!-- Attendance Radio Buttons -->
      <div class="space-y-3 sm:space-y-4 bg-gray-50/50 p-4 rounded-md">
        <h3
          class="text-gray-700 uppercase tracking-wide text-xs sm:text-sm mb-2">
          Status prisustva
        </h3>
        <div class="radio-option">
          <label
            for="attending"
            class="flex items-center space-x-3 cursor-pointer w-full">
            <div class="square-radio">
              <input
                type="radio"
                id="attending"
                v-model="formData.attendance"
                value="attending"
                class="square-radio-input" />
              <span class="square-radio-check"></span>
            </div>
            <span class="text-gray-700 text-sm sm:text-base"
              >SA ZADOVOLJSTVOM - PRISUSTVUJEM</span
            >
          </label>
        </div>
        <div class="radio-option">
          <label
            for="notAttending"
            class="flex items-center space-x-3 cursor-pointer w-full">
            <div class="square-radio">
              <input
                type="radio"
                id="notAttending"
                v-model="formData.attendance"
                value="notAttending"
                class="square-radio-input" />
              <span class="square-radio-check"></span>
            </div>
            <span class="text-gray-700 text-sm sm:text-base"
              >NAŽALOST, NISAM U MOGUĆNOSTI</span
            >
          </label>
        </div>
      </div>

      <!-- Number of Family Members - Conditionally shown when attending -->
      <div v-if="formData.attendance === 'attending'" class="space-y-2">
        <label
          class="block text-gray-700 uppercase tracking-wide text-xs sm:text-sm"
          >Broj članova porodice</label
        >
        <div class="flex items-center">
          <button
            type="button"
            @click="decrementMembers"
            class="border border-gray-300 px-3 py-1 text-gray-600 rounded-l bg-gray-50"
            :disabled="formData.familyMembers <= 1">
            -
          </button>
          <input
            type="number"
            v-model="formData.familyMembers"
            class="w-16 border-t border-b border-gray-300 py-1 text-center focus:border-[#C5A669] focus:outline-none transition-colors"
            min="1"
            readonly
            required />
          <button
            type="button"
            @click="incrementMembers"
            class="border border-gray-300 px-3 py-1 text-gray-600 rounded-r bg-gray-50">
            +
          </button>
          <span class="ml-3 text-gray-600 text-sm">osoba(e)</span>
        </div>
      </div>

      <!-- Dietary Preferences - Conditionally shown when attending -->
      <div
        v-if="formData.attendance === 'attending'"
        class="space-y-3 sm:space-y-4 bg-gray-50/50 p-4 rounded-md">
        <h3 class="text-gray-700 uppercase tracking-wide text-xs sm:text-sm">
          Dijetalne preference
        </h3>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div class="checkbox-option">
            <label
              for="glutenFree"
              class="flex items-center space-x-3 p-2 cursor-pointer w-full">
              <div class="square-checkbox">
                <input
                  type="checkbox"
                  id="glutenFree"
                  v-model="formData.dietary.glutenFree"
                  class="square-checkbox-input" />
                <span class="square-checkbox-check"></span>
              </div>
              <span class="text-gray-700 text-sm sm:text-base"
                >GLUTEN FREE</span
              >
            </label>
          </div>
          <div class="checkbox-option">
            <label
              for="vegan"
              class="flex items-center space-x-3 p-2 cursor-pointer w-full">
              <div class="square-checkbox">
                <input
                  type="checkbox"
                  id="vegan"
                  v-model="formData.dietary.vegan"
                  class="square-checkbox-input" />
                <span class="square-checkbox-check"></span>
              </div>
              <span class="text-gray-700 text-sm sm:text-base">VEGAN</span>
            </label>
          </div>
          <div class="checkbox-option">
            <label
              for="vegetarian"
              class="flex items-center space-x-3 p-2 cursor-pointer w-full">
              <div class="square-checkbox">
                <input
                  type="checkbox"
                  id="vegetarian"
                  v-model="formData.dietary.vegetarian"
                  class="square-checkbox-input" />
                <span class="square-checkbox-check"></span>
              </div>
              <span class="text-gray-700 text-sm sm:text-base"
                >VEGETARIJANAC</span
              >
            </label>
          </div>
          <div class="checkbox-option">
            <label
              for="fasting"
              class="flex items-center space-x-3 p-2 cursor-pointer w-full">
              <div class="square-checkbox">
                <input
                  type="checkbox"
                  id="fasting"
                  v-model="formData.dietary.fasting"
                  class="square-checkbox-input" />
                <span class="square-checkbox-check"></span>
              </div>
              <span class="text-gray-700 text-sm sm:text-base">NA POSTU</span>
            </label>
          </div>
        </div>
      </div>

      <!-- Other Dietary Requirements - Conditionally shown when attending -->
      <div v-if="formData.attendance === 'attending'" class="space-y-2">
        <label
          class="block text-gray-700 uppercase tracking-wide text-xs sm:text-sm"
          >Drugo</label
        >
        <input
          type="text"
          v-model="formData.otherDietary"
          placeholder="Ostale prehrambene preference ili alergije..."
          class="w-full border-b border-gray-300 py-2 focus:border-[#C5A669] focus:outline-none transition-colors bg-gray-50/30" />
      </div>

      <!-- Error/validation message -->
      <div v-if="validationError" class="text-red-500 text-sm text-center">
        {{ validationError }}
      </div>

      <!-- Loading state -->
      <div v-if="isSubmitting" class="text-center">
        <div class="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-[#C5A669]"></div>
        <p class="mt-2 text-gray-600">Šaljem odgovor...</p>
      </div>

      <!-- Submit Button -->
      <div v-if="!isSubmitting" class="text-center pt-4 sm:pt-6">
        <button
          type="submit"
          class="border-2 border-[#C5A669] px-8 sm:px-12 py-2 sm:py-3 uppercase tracking-wider text-[#C5A669] hover:bg-[#C5A669] hover:text-white transition-colors duration-300 text-sm sm:text-base shadow-md hover:shadow-lg">
          Pošalji
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref, watch, defineProps } from "vue";

const props = defineProps({
  userId: {
    type: String,
    required: true,
    default: "b88cd2a8-8850-4d8e-8edd-a38f4a3bc2bd"
  },
  apiUrl: {
    type: String,
    default: "https://vowperfectapi.azurewebsites.net"
  }
});

const formData = ref({
  name: "",
  attendance: "",
  familyMembers: 1,
  dietary: {
    glutenFree: false,
    vegan: false,
    vegetarian: false,
    fasting: false,
  },
  otherDietary: "",
});

const formSubmitted = ref(false);
const formError = ref(false);
const validationError = ref("");
const isSubmitting = ref(false);

// Watch attendance for form validation
watch(
  () => formData.value.attendance,
  (newValue) => {
    if (newValue === "notAttending") {
      // Reset dietary preferences when not attending
      formData.value.dietary = {
        glutenFree: false,
        vegan: false,
        vegetarian: false,
        fasting: false,
      };
      formData.value.otherDietary = "";
    }
  }
);

const incrementMembers = () => {
  formData.value.familyMembers++;
};

const decrementMembers = () => {
  if (formData.value.familyMembers > 1) {
    formData.value.familyMembers--;
  }
};

const submitForm = async () => {
  // Validation
  if (!formData.value.name.trim()) {
    validationError.value = "Molimo unesite ime";
    return;
  }

  if (!formData.value.attendance) {
    validationError.value = "Molimo izaberite da li prisustvujete";
    return;
  }

  validationError.value = "";
  isSubmitting.value = true;

  try {
    // Map form data to API schema
    const requestData = {
      guest_name: formData.value.name,
      attendance_status: formData.value.attendance === "attending", // Convert to boolean
      guest_count: formData.value.familyMembers,
      dietary_preferences: formData.value.attendance === "attending" ? {
        gluten_free: formData.value.dietary.glutenFree,
        vegan: formData.value.dietary.vegan,
        vegetarian: formData.value.dietary.vegetarian,
        fasting: formData.value.dietary.fasting,
        other: formData.value.otherDietary || null
      } : null, // Only include dietary preferences if attending
      additional_notes: null // Add this if needed
    };

    console.log("Sending RSVP data:", requestData);
    console.log("API URL:", `${props.apiUrl}/public/rsvp/${props.userId}`);

    // Call API with proper CORS handling
    const response = await fetch(`${props.apiUrl}/public/rsvp/${props.userId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Origin': window.location.origin
      },
      mode: 'cors',
      body: JSON.stringify(requestData)
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error("API error response:", errorData);
      throw new Error(errorData.detail || `HTTP error! Status: ${response.status}`);
    }

    // Handle successful response
    const responseData = await response.json();
    console.log("RSVP submitted successfully:", responseData);
    formSubmitted.value = true;
  } catch (error) {
    console.error("Error submitting RSVP:", error);
    
    // Specific error handling for CORS issues
    if (error instanceof TypeError && error.message.includes('NetworkError')) {
      console.error("CORS error detected. This is likely a cross-origin issue.");
      validationError.value = "Greška u povezivanju sa serverom. Molimo kontaktirajte podršku.";
    } else if (error.message.includes('Failed to fetch')) {
      validationError.value = "Neuspešno povezivanje sa serverom. Proverite internet konekciju.";
    } else {
      formError.value = true;
    }
  } finally {
    isSubmitting.value = false;
  }
};

const resetForm = () => {
  formData.value = {
    name: "",
    attendance: "",
    familyMembers: 1,
    dietary: {
      glutenFree: false,
      vegan: false,
      vegetarian: false,
      fasting: false,
    },
    otherDietary: "",
  };
  formSubmitted.value = false;
  formError.value = false;
  validationError.value = "";
};

const resetFormError = () => {
  formError.value = false;
};
</script>

<style scoped>
/* Custom square radio buttons */
.square-radio {
  position: relative;
  display: inline-block;
  width: 20px;
  height: 20px;
  margin-right: 5px;
  flex-shrink: 0;
}

.square-radio-input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
  z-index: 1;
}

.square-radio-check {
  position: absolute;
  top: 0;
  left: 0;
  height: 20px;
  width: 20px;
  background-color: #fff;
  border: 2px solid #d1d5db;
  border-radius: 0; /* Square shape */
}

.square-radio-input:checked ~ .square-radio-check {
  background-color: #c5a669; /* Gold background when checked */
  border-color: #c5a669;
}

/* Add checkmark (hidden when not checked) */
.square-radio-check:after {
  content: "";
  position: absolute;
  display: none;
}

/* Style the checkmark */
.square-radio-input:checked ~ .square-radio-check:after {
  display: block;
  left: 6px;
  top: 2px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
}

/* Focus styles for custom radio */
.square-radio-input:focus ~ .square-radio-check {
  box-shadow: 0 0 0 2px rgba(197, 166, 105, 0.2);
}

/* Enhanced tap target for radio options */
.radio-option {
  position: relative;
}

.radio-option label {
  min-height: 44px; /* Minimum recommended touch target height */
  display: flex;
  padding: 8px 4px;
  border-radius: 4px;
}

.radio-option:hover {
  background-color: rgba(197, 166, 105, 0.05);
}

/* Custom square checkbox styles */
.square-checkbox {
  position: relative;
  display: inline-block;
  width: 20px;
  height: 20px;
  margin-right: 5px;
  flex-shrink: 0;
}

.square-checkbox-input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
  z-index: 1;
}

.square-checkbox-check {
  position: absolute;
  top: 0;
  left: 0;
  height: 20px;
  width: 20px;
  background-color: #fff;
  border: 2px solid #d1d5db;
  border-radius: 0; /* Square shape */
}

.square-checkbox-input:checked ~ .square-checkbox-check {
  background-color: #c5a669; /* Gold background when checked */
  border-color: #c5a669;
}

/* Add checkmark (hidden when not checked) */
.square-checkbox-check:after {
  content: "";
  position: absolute;
  display: none;
}

/* Style the checkmark */
.square-checkbox-input:checked ~ .square-checkbox-check:after {
  display: block;
  left: 6px;
  top: 2px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
}

/* Focus styles for custom checkbox */
.square-checkbox-input:focus ~ .square-checkbox-check {
  box-shadow: 0 0 0 2px rgba(197, 166, 105, 0.2);
}

/* Enhanced tap target for checkbox options */
.checkbox-option {
  position: relative;
}

.checkbox-option label {
  min-height: 44px; /* Minimum recommended touch target height */
  display: flex;
  border-radius: 4px;
}

.checkbox-option:hover {
  background-color: rgba(197, 166, 105, 0.05);
}

/* Remove number input arrows */
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
input[type="number"] {
  -moz-appearance: textfield;
}

/* Focus states for better accessibility */
input:focus,
button:focus {
  outline: none;
  border-color: #c5a669;
  box-shadow: 0 0 0 1px rgba(197, 166, 105, 0.2);
}

/* Placeholder styles */
input::placeholder {
  color: #9ca3af;
  font-style: italic;
  font-size: 0.875rem;
}

/* Disabled button states */
button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

/* Responsive form elements */
@media (max-width: 640px) {
  input,
  label,
  button {
    font-size: 0.95rem;
  }

  .text-3xl {
    font-size: 1.75rem;
  }

  .square-radio-check,
  .square-checkbox-check {
    height: 18px;
    width: 18px;
  }

  .square-radio-input:checked ~ .square-radio-check:after,
  .square-checkbox-input:checked ~ .square-checkbox-check:after {
    left: 5px;
    top: 2px;
    width: 4px;
    height: 9px;
  }

  /* Larger touch targets for mobile */
  .radio-option label,
  .checkbox-option label {
    padding: 10px 6px;
    min-height: 48px;
  }
}

/* Active/tap state for mobile */
@media (hover: none) {
  .radio-option label:active,
  .checkbox-option label:active {
    background-color: rgba(197, 166, 105, 0.1);
  }
}

/* Print styles */
@media print {
  .container {
    max-width: 100%;
    padding: 0;
  }

  button {
    display: none;
  }
}
</style>