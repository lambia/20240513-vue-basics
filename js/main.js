console.log("Caricamento file JS iniziato");

const { createApp } = Vue

createApp({

    data() {
        return {
            title: 'VueJS Basics',
            percorsoImg: "./img/finestra.jpg"
        }
    },
    methods: {
        cambiaTitolo() {
            this.title = "Nuovo titolo";
        },
        cambiaPercorso() {
            this.percorsoImg = "./img/r8.jpg";
        }
    },
    mounted() {
        console.log("Applicazione Vue montata correttamente");
        // this.title = "Applicazione caricata";
        // this.cambiaTitolo();
    }

}).mount('#app')
