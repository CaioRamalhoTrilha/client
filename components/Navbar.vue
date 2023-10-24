

<template>
<header>
  <div class="px-6 py-3 lg:px-8 bg-gradient-to-l to-gray-300/75  from-inc-300/75 shadow-lg border-slate-300/20 border rounded-md">    
    <div>
      <nav class="flex h-9 items-center justify-between" aria-label="Global">
        <div class="flex lg:min-w-0 lg:flex-1" aria-label="Global">
          <a href="#" class="-m-1.5 p-1.5">
            <img class="h-5" src="headerapenaslogo.png" alt="">
          </a>
        </div>
        <div class="flex lg:hidden">
          <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
            <span class="sr-only">Open main menu</span>
            <!-- Heroicon name: outline/bars-3 -->
            <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
        <div class="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-center lg:gap-x-12">
          <ul class="flex flex-col p-4 mt-4 borderrounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0">
            <li>
              <a @click.prevent="scrollar('contato')" class="cursor-pointer text-lg font-semibold text-gray-900 hover:text-blue-500">Inicio</a>        
            </li>
            <li>
              <a @click.prevent="scrollar('solucoes')" class="cursor-pointer text-lg  font-semibold text-gray-900 hover:text-blue-500">Soluções</a>  
            </li>
            <li>
              <a @click.prevent="scrollar('info')" class="cursor-pointer text-lg  font-semibold text-gray-900 hover:text-blue-500">Sobre</a>
            </li>
            <li>
              <a @click.prevent="scrollar('clientes')" class="cursor-pointer text-lg  font-semibold text-gray-900 hover:text-blue-500">Clientes</a>          
            </li>
          </ul>
        </div>
        <div class="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-end">
          <a @click.prevent="scrollar('contato')" class="cursor-pointer inline-block rounded-lg px-3 py-1.5 text-base font-semibold leading-6 text-gray-900 shadow-sm ring-1 ring-gray-900/10 hover:ring-gray-900/20">Contato 
            <span>&rarr;</span></a>
        </div>
      </nav>
      <!-- Mobile menu, show/hide based on menu open state. -->
      <!-- <div role="dialog" aria-modal="true">
        <div focus="true" class="fixed inset-0 z-10 overflow-y-auto bg-white px-6 py-6 lg:hidden">
          <div class="flex h-9 items-center justify-between">
            <div class="flex">
              <a href="#" class="-m-1.5 p-1.5">
                <span class="sr-only">Your Company</span>
                <img class="h-8" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="">
              </a>
            </div>
            <div class="flex">
              <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
                <span class="sr-only">Close menu</span>

                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
          <div class="mt-6 flow-root">
            <div class="-my-6 divide-y divide-gray-500/10">
              <div class="space-y-2 py-6">
                <a href="#" class="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10">Product</a>

                <a href="#" class="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10">Features</a>

                <a href="#" class="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10">Marketplace</a>

                <a href="#" class="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10">Company</a>
              </div>
              <div class="py-6">
                <a href="#" class="-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-6 text-gray-900 hover:bg-gray-400/10">Log in</a>
              </div>
            </div>
          </div>
        </div>
      </div> -->
    </div>
  </div>
</header>
</template>
<script lang="ts" setup>
  const scrollar = (el: string) => {
    console.log('el');
    let elemento = document.getElementById(el);  
    if (elemento)
      elemento.scrollIntoView({behavior: 'smooth'});
  };
</script>
<style lang="scss">
    
</style>