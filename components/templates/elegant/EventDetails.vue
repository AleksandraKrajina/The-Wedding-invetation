<script setup lang="ts">
</script>

<template>
  <section class="py-20 bg-white md:mx-10 tanmoncheri">
    <div class="container mx-auto px-1">
      <h2 class="text-6xl font-light text-left mb-10 leading-relaxed">{{ $t('whenAndWhere') }}</h2>

      <div class="grid md:grid-cols-3 gap-8">

        <div>
          <div class="relative">
            <img src="/public/assets/images/templates/23.jpg" alt="Church Ceremony"
              class="w-full aspect-[4/3] object-cover border-black-80 border-2" />

            <div class="border-x-2 border-b-2 border-black-80 p-6 h-[230px] md:h-[220px] relative ">

              <div class="lg:space-y-1 font-sans">
                <p class="text-lg">13H</p>
                <p class="text-sm">CRKVA RUŽICA NA KALEMEGDANU</p>
              </div>

              <h3 class="text-3xl md:text-xl font-light mt-4">
                {{ $t('weddingText_1') }}
              </h3>

            </div>
          </div>
          <div class="grid grid-cols-2 container ">
            <button class="pt-5  text-black/55 text-xs">
              {{ $t('seeOnMap') }}
            </button>
            <img src="/assets/images/templates/rightArrow.png" class=" pt-5 right-0 w-8 opacity-30 " />
          </div>
        </div>

        <div>
          <div class="relative">
            <img src="/public/assets/images/templates/22.jpg" alt="Civil Ceremony"
              class="w-full aspect-[4/3] object-cover border-2 border-black-80" />

            <div class="border-x-2 border-b-2 border-black-80 p-6 h-[230px] md:h-[220px] relative">

              <div class="lg:space-y-1 font-sans">
                <p class="text-lg">16H30</p>
                <p class="text-sm ">SONATA OPEN CONCEPT ZRENJANINSKI PUT 106B</p>

              </div>

              <h3 class="text-3xl md:text-xl font-light mt-4">
                {{ $t('weddingText_2') }}
              </h3>

            </div>
          </div>
          <div class="grid grid-cols-2 container">
            <button class="pt-5 text-black/55 text-xs">
              {{ $t('seeOnMap') }}
            </button>
            <img src="/assets/images/templates/rightArrow.png" class=" pt-5 right-0 w-8 opacity-30 " />
          </div>
        </div>

        <div>
          <div class="relative">
            <img src="/public/assets/images/templates/4.jpg" alt="Reception"
              class="w-full aspect-[4/3] object-cover border-2 border-black-80" />

            <div class="border-x-2 border-b-2 border-black-80 p-6 h-[230px] md:h-[220px] relative">

              <div class="lg:space-y-1 font-sans">
                <p class="text-lg">18H</p>
                <p class="text-sm">{{ $t('weddingDescText_3') }}</p>


              </div>

              <h3 class="text-3xl md:text-xl font-light mt-4">
                {{ $t('weddingText_3') }}
              </h3>

            </div>
          </div>
          <div class="grid grid-cols-2 container">
            <button class="pt-5 text-black/55 text-xs">
              {{ $t('seeOnMap') }}
            </button>
            <img src="/assets/images/templates/rightArrow.png" class=" pt-5 right-0 w-8 opacity-30 " />
          </div>
        </div>

      </div>
    </div>
  </section>
</template>
