<script lang="ts" setup>
import { onMounted } from 'vue';

const scrollar = (el: string) => {
    console.log('el');
    let elemento = document.getElementById(el);  
    if (elemento)
      elemento.scrollIntoView({behavior: 'smooth'});
  };
</script>
<template>
<div class="bg-zinc-300">
  <section class="bg-gradient-to-l from-blue-500 to-cyan-600" id="missao">
    <main class="h-screen isolate">
      <div class="md:flex md:items-center md:justify-center md:gap-5">
        <div class="relative px-6 lg:px-8 w-full">
          <div class="mx-auto max-w-3xl pt-20 pb-32 sm:pt-48 sm:pb-40">
            <div>
              <div>
                <h1 class="text-zinc-200 text-4xl font-bold tracking-tight text-center sm:text-6xl">Inovando a Gestão Pública com Transparência e Competência</h1>
                <p class="mt-6 text-lg leading-8 text-slate-300 sm:text-center">Mais de 20 anos de experiência no desenvolvimento de soluções de Software para esfera pública e privada.
                </p>
                <div class="mt-8 flex gap-x-4 sm:justify-center">
                  <a @click.prevent="scrollar('contato')" class="cursor-pointer inline-block rounded-lg bg-blue-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-blue-600 hover:bg-blue-700 hover:ring-blue-700">
                    Agendar Conversa
                    <span class="text-indigo-200" aria-hidden="true">&rarr;</span>
                  </a>
                  <a @click.prevent="scrollar('solucoes')" class="cursor-pointer inline-block rounded-lg px-4 py-1.5 text-base font-semibold leading-7 text-gray-200 ring-1 ring-slate-100/10 hover:ring-gray-200/20">
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
        <CarousselPortalGestao class="hidden md:block"></CarousselPortalGestao>
      </div>
    </main>    
  </section>
  <section id="solucoes">
    <Solucoes></Solucoes>
  </section>
  <section class="lg:py-24 md:py-14" id="info">
    <Servicos></Servicos>
  </section>
  <section id="clientes">
    <Clientes></Clientes>
  </section>
  <section class="pb-10" id="contato">      
    <Contato></Contato>
  </section>
</div>
</template>
