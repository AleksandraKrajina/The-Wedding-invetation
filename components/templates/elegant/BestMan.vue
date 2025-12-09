<template>
  <section class="md:p-10 ">
    <div class="container mx-auto px-1 my-3">
      <div class="grid md:grid-cols-3 gap-16 items-start mx-auto">

        <!-- LEFT CARD -->
        <div class=" border-2 border-black-80 shadow-sm h-full flex flex-col">
          <img src="/public/assets/images/templates/26.jpg" alt="Mila Milić" class="w-full aspect-[4/3] object-cover" />

          <div class="p-3 flex-1 flex flex-col">
            <h3 class="text-2xl  mb-2">MILA MILIĆ</h3>

            <p class="text-gray-600 mb-2 flex-1">
              {{ $t('bestManDescription1') }}
            </p>

            <p class="text-gray-600">{{ $t('bestManDescription1_2') }}</p>
          </div>
        </div>

        <!-- CENTER TEXT -->
        <h2 class="text-5xl font-light my-10 text-center justify-center flex items-center pt-11 tanmoncheri">
          {{ $t('saying') }}
        </h2>

        <!-- RIGHT CARD -->
        <div class="border-2 border-black-80 shadow-sm h-full flex flex-col">
          <img src="/public/assets/images/templates/30.jpg" alt="Filip Filipović"
            class="w-full aspect-[4/3] object-cover" />

          <div class="p-3 flex-1 flex flex-col">
            <h3 class="text-2xl  mb-2">FILIP FILIPOVIĆ</h3>

            <p class="text-gray-600 mb-2 flex-1">
              {{ $t('bestManDescription2') }}
            </p>

            <p class="text-gray-600">{{ $t('bestManDescription2_2') }}</p>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>
