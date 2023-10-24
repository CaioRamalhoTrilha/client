<script lang='ts' setup>
const props = defineProps<{

}>();

</script>

<template>
   <div id="default-carousel" class="relative w-full" data-carousel="slide">
    <h4 class="flex justify-center text-center text-zinc-200 font-bold tracking-tight sm:text-center sm:text-2xl mb-4">Portal de Gestão - Visão Gerencial de Diversas Áreas</h4>      
        <div class="relative h-56 overflow-hidden rounded-lg md:h-96">       
            <div class="hidden duration-700 ease-in-out" data-carousel-item>
                <!-- <img class="absolute block -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" src="@/Public/PortalGestao/Despesas.png">  -->
                <div class="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[16px] rounded-t-xl h-[222px] max-w-[301px] md:h-[320px] md:max-w-[590px]">
                    <div class="rounded-xl overflow-hidden h-[150px] md:h-[300px]">
                        <img src="@/Public/PortalGestao/Despesas.png" class="dark:hidden h-[156px] md:h-[278px] w-full rounded-xl" alt="Painel de Despesas">        
                    </div>
                </div>
                <div class="relative mx-auto bg-gray-900 dark:bg-gray-700 rounded-b-xl h-[24px] max-w-[301px] md:h-[42px] md:max-w-[590px]"></div>
                <div class="relative mx-auto bg-gray-800 rounded-b-xl h-[55px] max-w-[83px] md:h-[95px] md:max-w-[142px]"></div>                 
            </div>
            <div class="hidden duration-700 ease-in-out" data-carousel-item>
                <!-- <img class="absolute block -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" src="@/Public/PortalGestao/Licitacoes.png">  -->
                <div class="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[16px] rounded-t-xl h-[222px] max-w-[301px] md:h-[320px] md:max-w-[590px]">
                    <div class="rounded-xl overflow-hidden h-[150px] md:h-[300px]">
                        <img src="@/Public/PortalGestao/Licitacoes.png" class="dark:hidden h-[156px] md:h-[278px] w-full rounded-xl" alt="Painel de Despesas">        
                    </div>
                </div>
                <div class="relative mx-auto bg-gray-900 dark:bg-gray-700 rounded-b-xl h-[24px] max-w-[301px] md:h-[42px] md:max-w-[590px]"></div>
                <div class="relative mx-auto bg-gray-800 rounded-b-xl h-[55px] max-w-[83px] md:h-[95px] md:max-w-[142px]"></div>                 
            </div>
            <div class="hidden duration-700 ease-in-out" data-carousel-item>
                <!-- <img class="absolute block -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" src="@/Public/PortalGestao/VisaoGeral.png">  -->
                <div class="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[16px] rounded-t-xl h-[222px] max-w-[301px] md:h-[320px] md:max-w-[590px]">
                    <div class="rounded-xl overflow-hidden h-[150px] md:h-[300px]">
                        <img src="@/Public/PortalGestao/VisaoGeral.png" class="dark:hidden h-[156px] md:h-[278px] w-full rounded-xl" alt="Painel de Despesas">        
                    </div>
                </div>
                <div class="relative mx-auto bg-gray-900 dark:bg-gray-700 rounded-b-xl h-[24px] max-w-[301px] md:h-[42px] md:max-w-[590px]"></div>
                <div class="relative mx-auto bg-gray-800 rounded-b-xl h-[55px] max-w-[83px] md:h-[95px] md:max-w-[142px]"></div>                 
            </div>
            <div class="hidden duration-700 ease-in-out" data-carousel-item>
                <!-- <img class="absolute block -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" src="@/Public/PortalGestao/GestaoFiscal.png">  -->
                <div class="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[16px] rounded-t-xl h-[222px] max-w-[301px] md:h-[320px] md:max-w-[590px]">
                    <div class="rounded-xl overflow-hidden h-[150px] md:h-[300px]">
                        <img src="@/Public/PortalGestao/GestaoFiscal.png" class="dark:hidden h-[156px] md:h-[278px] w-full rounded-xl" alt="Painel de Despesas">        
                    </div>
                </div>
                <div class="relative mx-auto bg-gray-900 dark:bg-gray-700 rounded-b-xl h-[24px] max-w-[301px] md:h-[42px] md:max-w-[590px]"></div>
                <div class="relative mx-auto bg-gray-800 rounded-b-xl h-[55px] max-w-[83px] md:h-[95px] md:max-w-[142px]"></div>                 
            </div>            
        </div>
        <div class="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-9 left-1/2">
            <button type="button" class="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
            <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>        
            <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>        
            <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>        
        </div>
        <button type="button" class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
            <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg class="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
                </svg>
                <span class="sr-only">Previous</span>
            </span>
        </button>
        <button type="button" class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
            <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg class="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                </svg>
                <span class="sr-only">Next</span>
            </span>
        </button>
   </div>    
</template>
<style scoped>
</style>