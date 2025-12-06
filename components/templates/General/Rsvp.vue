<template>
  <main class="min-h-screen mx-auto container bg-[#fcefee] flex items-center justify-center px-4 py-12">
    <section class="relative w-full bg-white shadow-lg rounded-2xl px-10 py-12 text-center overflow-hidden">
      <div class="absolute -left-6 -top-6 h-28 w-28 rounded-full bg-[#f5d9d9] opacity-70"></div>
      <div class="absolute -right-10 bottom-6 h-32 w-32 rounded-full bg-[#fde3e3] opacity-70"></div>

      <div class="relative">
        <p class="tracking-[0.3em] text-sm text-[#1e1c1c]-500">POTVRDA DOLASKA</p>
        <div class="mt-4 flex flex-col items-center gap-1 text-xs text-[#1e1c1c]-400">
          <span class="h-px w-10 bg-gray-200"></span>
          <span class="h-1 w-1 rounded-full bg-gray-300"></span>
          <span class="h-px w-10 bg-gray-200"></span>
        </div>
        <p class="mt-6 text-sm text-[#1e1c1c]-500 italic">
          Ne zaboravite da potvrdite dolazak do 20. jula 2025. godine!
        </p>
      </div>

      <form class="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
        <label class="flex flex-col text-xs uppercase tracking-wide text-[#1e1c1c]-500">
          Ime
          <input type="text" placeholder="Vaše ime"
            class="mt-2 rounded-md border border-gray-200 px-4 py-3 text-sm focus:border-[#c37c18] focus:outline-none" />
        </label>
        <label class="flex flex-col text-xs uppercase tracking-wide text-[#1e1c1c]-500">
          Email
          <input type="email" placeholder="email@primer.com"
            class="mt-2 rounded-md border border-gray-200 px-4 py-3 text-sm focus:border-[#c37c18] focus:outline-none" />
        </label>
        <label class="flex flex-col text-xs uppercase tracking-wide text-[#1e1c1c]-500">
          Broj gostiju
          <input type="number" min="1" placeholder="npr. 2"
            class="mt-2 rounded-md border border-gray-200 px-4 py-3 text-sm focus:border-[#c37c18] focus:outline-none" />
        </label>
        <label class="flex flex-col text-xs uppercase tracking-wide text-[#1e1c1c]-500">
          Potvrđujem svoj dolazak
          <select
            class="mt-2 rounded-md border border-gray-200 px-4 py-3 text-sm focus:border-[#c37c18] focus:outline-none">
            <option value="da">Da</option>
            <option value="ne">Nažalost ne mogu</option>
          </select>
        </label>
        <label class="md:col-span-2 flex flex-col text-xs uppercase tracking-wide text-[#1e1c1c]-500">
          Poruka za mladence
          <textarea rows="4" placeholder="Napišite kratku poruku..."
            class="mt-2 rounded-md border border-gray-200 px-4 py-3 text-sm focus:border-[#c37c18] focus:outline-none resize-none"></textarea>
        </label>
        <div class="md:col-span-2">
          <button type="submit"
            class="w-full rounded-md bg-[#c37c18] px-6 py-3 text-sm font-semibold tracking-wide text-white transition hover:opacity-90">
            POTVRDI
          </button>
        </div>
      </form>
    </section>
  </main>
</template>
