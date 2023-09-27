import { reactive } from 'vue'
import axios from 'axios';

export const state = reactive({
    base_url: 'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0',
    archetypes_url: 'https://db.ygoprodeck.com/api/v7/archetypes.php',
    cards: null,
    arch: null,
    archetypeList: '',



    fetchData() {
        axios
            .get(this.base_url)

            .then(response => {
                this.cards = response.data.data

            })
            .catch(error => {
                console.log(error);
            })

    },

    fetchArchetypes(archetypes_url) {
        axios
            .get(this.archetypes_url)

            .then(response => {
                this.arch = response.data

            })
            .catch(error => {
                console.log(error);
            })

    }


})