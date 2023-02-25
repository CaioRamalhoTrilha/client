<script lang="ts" setup>
import { onMounted } from 'vue';

onMounted(() => {
    
});

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
]
</script>
<template>
<div class="bg-zinc-300">
  <section class="bg-gradient-to-l from-blue-500 to-cyan-600" id="missao">
    <main class="h-screen isolate">
      <div class="relative px-6 lg:px-8">
        <div class="mx-auto max-w-3xl pt-20 pb-32 sm:pt-48 sm:pb-40">
          <div>
            <div>
              <h1 class="text-zinc-200 text-4xl font-bold tracking-tight sm:text-center sm:text-6xl">Inovando a Gestão Pública com Transparência e Competência</h1>
              <p class="mt-6 text-lg leading-8 text-slate-300 sm:text-center">Mais de 20 anos de experiência no desenvolvimento de soluções de Software para esfera pública e privada.

              </p>
              <div class="mt-8 flex gap-x-4 sm:justify-center">
                <a href="#" class="inline-block rounded-lg bg-blue-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-blue-600 hover:bg-blue-700 hover:ring-blue-700">
                  Agendar Conversa
                  <span class="text-indigo-200" aria-hidden="true">&rarr;</span>
                </a>
                <a href="#" class="inline-block rounded-lg px-4 py-1.5 text-base font-semibold leading-7 text-gray-200 ring-1 ring-slate-100/10 hover:ring-gray-200/20">
                  Visualizar Soluções
                  <span class="text-gray-200" aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>
            <div class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
              <svg class="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]" viewBox="0 0 1155 678" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)" fill-opacity=".3" d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z" />
                <defs>
                  <linearGradient id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc" x1="1155.49" x2="-78.208" y1=".177" y2="474.645" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#9089FC"></stop>
                    <stop offset="1" stop-color="#FF80B5"></stop>
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </main>
  </section>
  <section class="lg:py-24 md:py-14" id="info">
    <div class="flex justify-center container mx-auto">
      <div class="py-10">
        <h3 class="text-4xl text-center">
            Conheça a nossa Fábrica de Softwares
          </h3>
          <div class="pt-5">
            <h4 class="text-xl font-extralight text-center">              
              Softwares feitos sobre demanda para <span class=" font-semibold">automatizar, digitalizar e agilizar processos.</span> Prestação de Suporte técnico, treinamento, capacitação dos operadores do Software e 
              documentação do Produto dinâmica e de fácil compreensão.
            </h4>
          </div>
      </div>
    </div>
    <div class="grid grid-cols-3 gap-5 py-6 px-5 justify-center container mx-auto">
      <div class="bg-zinc-200 px-8 border-slate-300 border rounded-md lg:w-9/12 shadow-2xl" v-for="(item, ix) in itensCard" v-bind:key="ix">
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
  </section>
  <section id="solucoes">      
    <div class="container mx-auto flex flex-row w-2/3 gap-24 justify-center">
      <div class="w-1/2 break-words">
      </div>
      <div>
        <div class="container mx-auto divide-transparent lg:w-5/6">
          <form class="bg-white  shadow-md rounded px-10  pt-6 pb-8 mb-4">
            <h2 class="text-lg text-center pb-8">
              Mande uma mensagem preenchendo o formulário e entraremos em contato com você
            </h2>
            <div class="mb-4">
              <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
                Email <span class="text-red-700">*</span>
              </label>
              <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="email@email.com.br">
            </div>
            <div class="mb-6">
              <label class="block text-gray-700 text-sm font-bold mb-2" for="assunto">
                Assunto <span class="text-red-700">*</span>
              </label>
              <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="assunto" type="text" placeholder="Suporte, Contato...">              
            </div>
            <div class="mb-6">
              <label class="block text-gray-700 text-sm font-bold mb-2" for="Mensagem">
                Mensagem <span class="text-red-700">*</span>
              </label>
              <textarea rows="4" cols="50" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="Mensagem" type="text" placeholder="Gostaria de Solicitar uma reunião..."/>              
            </div>
            <div class="flex items-center justify-end">
              <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                Enviar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</div>
</template>
<style lang="scss" scoped>
.bg-img{
    // background-color: rgba(35, 27, 46, 1);
    height: 1440px;
    width: 1920px;
}
</style>