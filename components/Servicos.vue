<script lang='ts' setup>

const itensCard = [
  {
    titulo: 'Transparência',
    texto: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus consectetur ratione quisquam veniam, amet harum corporis placeat tempore, aliquam culpa molestiae laboriosam, impedit fugit natus dolores iusto. Dicta, reiciendis totam.',
    icone: 'fa-solid fa-medal text-yellow-400'
  },
  {
    titulo: 'Gestão',
    texto: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus consectetur ratione quisquam veniam, amet harum corporis placeat tempore, aliquam culpa molestiae laboriosam, impedit fugit natus dolores iusto. Dicta, reiciendis totam.',
    icone: 'fa-solid fa-people-group text-blue-400'
  },
  {
    titulo: 'Experiência',
    texto: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus consectetur ratione quisquam veniam, amet harum corporis placeat tempore, aliquam culpa molestiae laboriosam, impedit fugit natus dolores iusto. Dicta, reiciendis totam.',
    icone: 'fa-duotone fa-graduation-cap text-emerald-400'
  }
];

const scrollar = (el: string) => {
    let elemento = document.getElementById(el);  
    if (elemento)
      elemento.scrollIntoView({behavior: 'smooth'});
};
</script>

<template>
    <div class="container mx-auto px-5">
        <div class="flex justify-center">
            <div class="py-10 ">
                <h3 class="text-4xl text-center">
                    Conheça a nossa Fábrica de Softwares
                </h3>
                <div class="pt-5 px-6">
                    <h4 class="text-xl font-extralight text-justify">              
                        Softwares feitos sobre demanda para <span class="font-semibold">automatizar, digitalizar e agilizar processos.</span> Prestação de Suporte técnico, treinamento, capacitação dos operadores do Software e 
                        documentação do Produto dinâmica e de fácil compreensão.
                    </h4>
                </div>
            </div>
        </div>
        <div class="grid lg:grid-cols-3 gap-5 py-6 px-5 justify-center container mx-auto">
            <div class="max-w-lg p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" v-for="(item, ix) in itensCard" v-bind:key="ix">
                <div class="flex mt-7 items-end" >
                    <div class="basis-4/4">
                        <div class="flex justify-center">
                            <i class="text-5xl" :class="item.icone"></i>
                        </div>
                    </div>
                </div>
                <div class="row-auto py-8">
                    <div class="flex justify-start">
                        <h4 class="text-3xl font-semibold">{{item.titulo}}</h4>
                    </div>
                </div>
                <div class="flex gap-4 pb-8">
                    <p class="text-justify tracking-wide">
                    {{ item.texto }}
                    </p>
                </div>
            </div>       
        </div>
        <div class="container mx-auto flex justify-end  px-5">
            <button @click.prevent="scrollar('contato')" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                Quero Contratar!
            </button>
        </div>
    </div>
</template>
<style scoped>

</style>