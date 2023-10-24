<script lang='ts' setup>
const props = defineProps<{

}>();

const solucoes = [
    {
        nome: 'PPAWeb',
        texto: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam, quo atque excepturi minus animi maxime itaque. Magnam dignissimos, enim rerum illo, quidem porro totam sint soluta, quo architecto quisquam voluptate.'
    },
    {
        nome: 'ContratoWeb',
        texto: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam, quo atque excepturi minus animi maxime itaque. Magnam dignissimos, enim rerum illo, quidem porro totam sint soluta, quo architecto quisquam voluptate.'
    },
    {
        nome: 'Portal de Gestão',
        texto: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam, quo atque excepturi minus animi maxime itaque. Magnam dignissimos, enim rerum illo, quidem porro totam sint soluta, quo architecto quisquam voluptate.'
    },
    {
        nome: 'ObrasWeb',
        texto: 'Lorem ipsum dolor, sit amet consadadadassectetur adipisicing elit. Laboriosam, quo atque excepturi minus animi maxime itaque. Magnam dignissimos, enim rerum illo, quidem porro totam sint soluta, quo architecto quisquam voluptate.'
    }
];

</script>

<template>
    <div class="mx-auto container px-6">  
        <div class="mt-20 mb-24">
            <h3 class="text-5xl text-center">Nossas Soluções</h3>
        </div>      
        <div class=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 grid lg:grid-cols-4 gap-10 py-6 justify-center container mx-auto ">
            <div class="h-auto mx-10 pr-4 divide-y divide-slate-700 px-6" v-for="solucao in (solucoes)">                
                <div class="">
                    <h4 class="text-xl font-semibold">{{ solucao.nome }}</h4>                
                </div>                
                <div class="my-2">
                    <p class="mt-6 text-justify">
                        {{ solucao.texto }}
                    </p>                    
                </div>                 
            </div> 
        </div>
    </div>    
</template>
<style scoped>

</style>