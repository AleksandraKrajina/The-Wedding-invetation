<template>
  <section id="rsvp" class="w-full container mx-auto py-12 px-8 flex items-center justify-center bg-blue-50">
    <div class="w-full max-w-2xl bg-white shadow-lg rounded-2xl p-8">
      <h2 class="text-5xl font-bold text-center  text-[color:var(--text-color)] mb-8">RSVP</h2>
      <p class=" text-[color:var(--text-color)]/50 text-center mb-5">{{ t('rsvp') }}</p>

      <form class="space-y-6">

        <div>
          <label class="block text-gray-700 font-medium">{{ t('nameSurname') }}</label>
          <input type="text" placeholder="Name and Surname"
            class="w-full mt-2 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-babyblue">
        </div>


        <div>
          <label class="block text-gray-700 font-medium">{{ t('emailPhone') }}</label>
          <input type="text" placeholder="Email or phone"
            class="w-full mt-2 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-babyblue">
        </div>


        <div>
          <label class="block text-gray-700 font-medium">{{ t('numberOfPerson') }}</label>
          <select class="w-full mt-2 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-babyblue">
            <option value="">{{ t('chooseNumber') }}</option>
            <option v-for="n in 5" :key="n" :value="n">{{ n }}</option>
          </select>
        </div>

        <div>
          <label class="block text-gray-700 font-medium">{{ t('comingOn') }}</label>
          <div class="mt-2 space-y-2">
            <label class="flex items-center space-x-2">
              <input type="checkbox" class="h-5 w-5  text-[color:var(--text-color)] rounded border-gray-300">
              <span>{{ t('fullEvent') }}</span>
            </label>
            <label class="flex items-center space-x-2">
              <input type="checkbox" class="h-5 w-5  text-[color:var(--text-color)] rounded border-gray-300">
              <span>{{ t('reception') }}</span>
            </label>
            <label class="flex items-center space-x-2">
              <input type="checkbox" class="h-5 w-5  text-[color:var(--text-color)] rounded border-gray-300">
              <span>{{ t('church') }}</span>
            </label>
          </div>
        </div>


        <div class="text-center">
          <button type="submit"
            class="px-6 py-3 bg-babyblue text-white font-semibold rounded-lg shadow hover:bg-blue-400 transition">
            Send
          </button>
        </div>
      </form>
    </div>
  </section>
</template>



<style>
.text-babyblue {
  color: #4B7DBD;
}

.babyblue-opacity {
  color: #4B7DBD80;
}

.bg-babyblue {
  background-color: #4B7DBD;
}

.focus\:ring-babyblue:focus {
  --tw-ring-color: #4B7DBD;
}
</style>
