<template>
    <section
        class="relative w-full space-y-10  EBGramond-BoldItalic px-14 py-12 text-start overflow-hidden container mx-auto">
        <div class="relative  space-y-10 ">
            <p class="tracking-[0.1em] engravers-old-english text-7xl text-[#1e1c1c]-500 ">RSVP
            </p>
            <p class=" text-sm text-black ">
                Molimo vas da potvrdite vas dolazak putem forme ispod do 10.09. Hvala!
            </p>
        </div>

        <form class="my-10  gap-5 text-left  space-y-6">
            <label class=" w-2/3 flex flex-col text-xs uppercase tracking-wide text-[#1e1c1c]-500">
                <input type="text " placeholder="IME I PREZIME"
                    class="mt-2 bg-transparent border border-black px-4 py-3 text-sm  focus:outline-none" />
            </label>

            <label class=" w-2/3 bg-transparent flex flex-col text-xs uppercase tracking-wide text-[#1e1c1c]-500">
                <select class="mt-2 bg-transparent border border-black px-4 py-3 text-lg focus:outline-none">
                    <option value="da">Da</option>
                    <option value="ne">Nažalost ne mogu</option>
                </select>
            </label>

            <label class=" w-2/3 flex flex-col text-xs uppercase tracking-wide text-[#1e1c1c]-500">
                <input type="number" min="1" placeholder="ODABIR ODRASLIH"
                    class="mt-2 bg-transparent border border-black px-4 py-3 text-sm  focus:outline-none" />
            </label>

            <label class=" w-2/3 flex flex-col text-xs uppercase tracking-wide text-[#1e1c1c]-500">
                <input type="number" min="1" placeholder="BROJ DECE (KLIKNI ZA ODABIR)"
                    class="mt-2 bg-transparent border border-black px-4 py-3 text-sm  focus:outline-none" />
            </label>

            <label class=" w-2/3 flex  flex-col text-xs uppercase tracking-wide text-[#1e1c1c]-500">
                <textarea rows="4" placeholder="DIJETALNE PREFERENCIJE ILI NAPOMENE"
                    class="mt-2 bg-transparent border border-black px-4 py-3 text-sm  focus:outline-none resize-none"></textarea>
            </label>
            <div class="mt-6">
                <button type="submit"
                    class="  shadow-sm rounded-md px-6 py-3 text-sm  tracking-wide text-black transition hover:opacity-90">
                    POSALJI
                </button>
            </div>
        </form>
    </section>

</template>