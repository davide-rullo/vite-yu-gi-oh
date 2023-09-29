import { reactive } from 'vue'
import axios from 'axios';

export const state = reactive({
    base_url: 'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0',
    url: 'https://db.ygoprodeck.com/api/v7/archetypes.php',
    cards: [],
    arch: [],
    archetypeList: '',



    fetchData(url) {
        axios
            .get(url)

            .then(response => {
                this.cards = response.data.data

            })
            .catch(error => {
                console.log(error);
            })

    },

    fetchArchetypes(url) {
        axios
            .get(url)

            .then(response => {
                this.arch = response.data

            })
            .catch(error => {
                console.log(error);
            })

    }


})