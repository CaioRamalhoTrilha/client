<script lang='ts' setup>
import { GoogleMap, Marker } from 'vue3-google-map'
const center = { lat: -20.30895263461249, lng: -40.29478393509859 }

</script>

<template>
<div class="container mx-auto px-6 pb-8 pt-20">  
  <h2 class="text-3xl text-center pb-8 pt-20">
    Onde nos encontrar:
  </h2>
  <div class="grid md:grid-cols-2 gap-4">
      <div class="h-full w-full">        
        <form class="bg-white shadow-md rounded px-10 pt-6 pb-8 flex h-full items-center justify-center">  
          <div class="w-full">
            <h4 class="text-3xl text-center pb-8 pt-20">
              Preencha o formulário para entraremos em contato
            </h4>
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
          </div>        
        </form>
      </div>
      <div class="h-full w-full flex justify-end">
        <div>
          <div class="grid gap-4">
            <GoogleMap          
              style="width: 100%; height: 500px"
              :center="center"
              :zoom="15"
              :api-key="'AIzaSyCR0XQVTlc2lW9kAxIK98Ew3z6riw2eSCM'"
              >
              <Marker :options="{ position: center }" />
            </GoogleMap>
            <div class="flex items-center">
              <div class="text-2xl text-justify">
                <i class="fa-duotone fa-location-pin"></i> Av. Nossa Senhora da Penha 250/606 Praia de Santa Helena, Vitória-ES. CEP. 29055.130
                <br>
                <i class="fa-duotone fa-phone"></i> Telefone (27) 3345-0205
                <br>
                <i class="fa-duotone fa-calendars"></i> Funcionamento -  9h ás 18h
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</div>
</template>
<style scoped>

</style>