<script setup lang="ts">

</script>
<template>

  <section id="mapLocation"
    class="relative w-full h-auto bg-cover bg-center flex p-0 m-0 bg-[url('~/assets/images/templates/party.png')]">

    <div class="relative container mx-auto z-10 w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
      <p class=" p-4  text-[color:var(--text-color)] text-lg justify-center mt-7"> {{ $t('mapAndLocation') }}</p>

      <div class="flex justify-center flex-col space-y-1 bg-blue-50">

        <div class="w-full h-64  md:h-80 shadow-md rounded-lg overflow-hidden">
          <iframe class="w-full h-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509375!2d144.95373631531695!3d-37.8162797420217!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDQ5JzAwLjYiUyAxNDTCsDU3JzE0LjEiRQ!5e0!3m2!1sen!2srs!4v1632903012345!5m2!1sen!2srs"
            style="border:0;" allowfullscreen loading="lazy" />
        </div>
        <div class=" p-4 rounded-lg shadow text-center blok ">
          <p class=" text-[color:var(--text-color)]"><strong> Bride: </strong> +381 64 123 4567 </p>
          <p class=" text-[color:var(--text-color)]"><strong> Groom: </strong> +381 63 987 6543 </p>
        </div>
      </div>

    </div>

  </section>
</template>