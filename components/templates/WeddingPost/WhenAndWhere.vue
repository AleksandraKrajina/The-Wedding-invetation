<template>
  <section class="w-full mx-auto container EBGramond-BoldItalic px-4 py-24 justify-center items-center bg-[#fffbf7]">
    <div class="border-t-4 border-black mb-1"></div>
    <div class="border-t border-black"></div>

    <h3 class="h-serif text-6xl text-center mb-11 pt-12">{{ $t('whenAndWhere') }}</h3>

    <div class="border-t-4 border-black mb-1"></div>
    <div class="border-t border-black"></div>

    <div class="mt-6 grid grid-cols-1 md:grid-cols-3 gap-10 w-full my-11">

      <div class="space-y-4 w-full relative pb-12 shadow-md md:shadow-none">

        <div class="h-12 flex flex-col justify-center p-5">
          <p class="text-md font-bold leading-tight">13H</p>
          <p class="text-md font-bold leading-tight">{{ $t('whereTitle_1') }}</p>
        </div>

        <div class="h-28 flex items-center p-5">
          <p class="h-serif text-2xl">
            {{ $t('whatTitle_1') }}
          </p>
        </div>

        <div class="grid grid-cols-2 container">
          <button class="pt-5 text-black/55 text-sm">
            {{ $t('seeOnMap') }}
          </button>
          <img src="/assets/images/templates/rightArrow.png" class=" pt-5 right-0 w-9 opacity-30 " />
        </div>
      </div>

      <div class="space-y-4 w-full relative pb-12 shadow-md md:shadow-none">
        <div class="h-12 flex flex-col justify-center p-5">
          <p class="text-md font-semibold leading-tight">16H30</p>
          <p class="text-md font-semibold leading-tight">
            {{ $t('whereTitle_2') }}
          </p>
        </div>

        <div class="h-28 flex items-center p-5">
          <p class="h-serif text-2xl">
            {{ $t('whatTitle_2') }}
          </p>
        </div>

        <div class="grid grid-cols-2 container">
          <button class="pt-5 text-black/55 text-sm">
            {{ $t('seeOnMap') }}
          </button>
          <img src="/assets/images/templates/rightArrow.png" class=" pt-5 right-0 w-9 opacity-30 " />
        </div>
      </div>


      <div class="space-y-4 w-full relative pb-12 shadow-md md:shadow-none">
        <div class="h-12 flex flex-col justify-center p-5">
          <p class="text-md font-semibold leading-tight">19H</p>
          <p class="text-md font-semibold leading-tight">{{ $t('whereTitle_3') }}</p>
        </div>

        <div class="h-28 flex items-center p-5">
          <p class="h-serif text-2xl">
            {{ $t('whatTitle_3') }}
          </p>
        </div>

        <div class="grid grid-cols-2 container">
          <button class="pt-5 text-black/55 text-sm">
            {{ $t('seeOnMap') }}
          </button>
          <img src="/assets/images/templates/rightArrow.png" class=" pt-5 right-0 w-9 opacity-30 " />
        </div>
      </div>

    </div>

    <div class="border-t-4 border-black mb-1 mt-4"></div>
    <div class="border-t border-black"></div>
  </section>
</template>
