<template>
  <section
    class="relative w-full bg-black tanmoncheri text-white shadow-lg  px-14 py-12 text-start overflow-hidden container mx-auto">
    <div class="relative ">
      <p class="tracking-[0.1em] text-6xl text-[#1e1c1c]-500  "> {{ $t('Rsvp_title_1') }} <br /> {{ $t('Rsrv_title_2')
      }}
      </p>
      <p class=" text-sm text-gray-200 ">
        {{ $t('Rsvp_desc') }}
      </p>
    </div>

    <form class="my-10  gap-5 text-left">
      <label class=" w-2/3 flex flex-col text-xs uppercase tracking-wide text-[#1e1c1c]-500">
        <input type="text " placeholder="IME I PREZIME"
          class="mt-2 bg-black border border-gray-200 px-4 py-3 text-sm  focus:outline-none" />
      </label>

      <label class=" w-2/3 flex flex-col text-xs uppercase tracking-wide text-[#1e1c1c]-500">
        <select class="mt-2 bg-black border border-gray-200 px-4 py-3 text-lg focus:outline-none">
          <option value="da">Da</option>
          <option value="ne">Nažalost ne mogu</option>
        </select>
      </label>

      <label class=" w-2/3 flex flex-col text-xs uppercase tracking-wide text-[#1e1c1c]-500">
        <input type="number" min="1" placeholder="ODABIR ODRASLIH"
          class="mt-2 bg-black border border-gray-200 px-4 py-3 text-sm  focus:outline-none" />
      </label>

      <label class=" w-2/3 flex flex-col text-xs uppercase tracking-wide text-[#1e1c1c]-500">
        <input type="number" min="1" placeholder="BROJ DECE (KLIKNI ZA ODABIR)"
          class="mt-2 bg-black border border-gray-200 px-4 py-3 text-sm  focus:outline-none" />
      </label>

      <label class=" w-2/3 flex  flex-col text-xs uppercase tracking-wide text-[#1e1c1c]-500">
        <textarea rows="4" placeholder="DIJETALNE PREFERENCIJE ILI NAPOMENE"
          class="mt-2 bg-black border border-gray-200 px-4 py-3 text-sm  focus:outline-none resize-none"></textarea>
      </label>
      <div class="mt-6">
        <button type="submit"
          class="  bg-white px-6 py-3 text-sm font-bold tracking-wide text-black transition hover:opacity-90">
          {{ $t('send') }}
        </button>
      </div>
    </form>

    <div>
      <p class="justify-center items-center text-center  px-24 py-5">
        {{ $t('Rsvp_note') }}
      </p>
    </div>

  </section>

</template>
