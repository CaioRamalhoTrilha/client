<script setup lang="ts">
import { 
    initAccordions, 
    initCarousels, 
    initCollapses, 
    initDials, 
    initDismisses, 
    initDrawers, 
    initDropdowns, 
    initModals, 
    initPopovers, 
    initTabs, 
    initTooltips } from 'flowbite';
    
onMounted(() => {
    initAccordions();
    initCarousels();
    initCollapses();
    initDials();
    initDismisses();
    initDrawers();
    initDropdowns();
    initModals();
    initPopovers();
    initTabs();
    initTooltips();
});

</script>
<template>
    <div class="container mx-auto">
        <div class="flex justify-center">
            <h2 class="text-4xl p-2">Rede de Clientes</h2>                    
        </div>        
        <div class="grid grid-cols-2 md:grid-cols-3">
            <div class="flex justify-center">
                <img class="md:max-h-[180px] md:max-w-[180px] rounded-lg" src="@/Public/Clientes/Cliente_1.jpg" alt="">
            </div>
            <div class="flex justify-center">
                <img class="md:max-h-[180px] md:max-w-[180px] rounded-lg" src="@/Public/Clientes/Cliente_2.jpg" alt="">
            </div>
            <div class="flex justify-center">
                <img class="md:max-h-[180px] md:max-w-[180px] rounded-lg" src="@/Public/Clientes/Cliente_3.jpg" alt="">
            </div>
            <div class="flex justify-center">
                <img class="md:max-h-[180px] md:max-w-[180px]rounded-lg" src="@/Public/Clientes/Cliente_4.png" alt="">
            </div>
            <div class="flex justify-center">
                <img class="md:max-h-[180px] md:max-w-[180px] rounded-lg" src="@/Public/Clientes/Cliente_5.jpg" alt="">
            </div>
            <div class="flex justify-center">
                <img class="md:max-h-[180px] md:max-w-[180px] rounded-lg" src="@/Public/Clientes/Cliente_6.png" alt="">
            </div>
            <div class="flex justify-center">
                <img class="md:max-h-[180px] md:max-w-[180px] rounded-lg" src="@/Public/Clientes/Cliente_7.jpg" alt="">
            </div>
            <div class="flex justify-center">
                <img class="md:max-h-[180px] md:max-w-[180px] rounded-lg" src="@/Public/Clientes/Cliente_8.png" alt="">
            </div>
            <div class="flex justify-center">
                <img class="md:max-h-[180px] md:max-w-[180px] rounded-lg" src="@/Public/Clientes/Cliente_9.jpg" alt="">
            </div>
        </div>                
    </div>    
</template>
<style lang="scss">
    
</style>