// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss',
        '@nuxtjs/google-fonts'           
    ],   
    googleFonts: {
        families: {
            Montserrat: true,
            'Josefin+Sans': true,
            Lato: [100, 300],
            Raleway: {
                wght: [100, 400],
                ital: [100]
            },
        }
    },
    app: {
        head: {
            script: [
                {src: 'https://kit.fontawesome.com/84b3553096.js', crossorigin: 'anonymous'},
                {src: 'https://unpkg.com/vue3-google-map'}
            ],
            title: 'Tectrilha Software'
        }
    }
})
