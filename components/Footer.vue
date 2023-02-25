<script lang="ts" setup>
const ano = new Date().getFullYear();
</script>
<template>
    <footer class="bg-gray-800 text-white py-8">
        <div class="container mx-auto">
            <div class="grid grid-cols-2">
                <div class=" col-auto">
                    <img src="/tectrilha.png" alt="logo">
                    <br>
                    <br>
                    <span>
                        <p>
                            A Tectrilha Software, fundada em março de 2003, é composta de profissionais com mais de 15 anos de experiência em desenvolvimento de software, e desde o seu nascimento especializou-se no desenvolvimento de soluções de software para a administração pública. 
                        </p>
                    </span>
                </div>
                <div>
                    &copy; <em id="date"></em>Tectrilha Software - {{ ano }}
                </div>
            </div>
        </div>
    </footer>
</template>
<style lang="">
    
</style>