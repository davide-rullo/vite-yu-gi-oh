<script>
import { state } from "../state.js";

export default {
    name: 'AppContent',
    data() {
        return {
            state
        }
    },
    mounted() {
        state.fetchData()
    }
}
</script>

<template>
    <div class="container wrap">
        <div class="results d-flex align-items-center text-white p-4">
            <h5>Found 39 Cards</h5>
        </div>
        <div class="row row-cols-sm-2 row-cols-md-4 row-cols-lg-5 justify-content-center align-items-center"
            v-if="state.characters">

            <div class="col  mt-4" v-for="character in state.characters">
                <div class="card h-100 g-4">
                    <img :src="character.card_images[0].image_url" alt="">
                    <div class="card-body ">
                        <h6 class="name text-white text-uppercase">{{ character.name }}</h6>

                        <p class="text-center">{{ character.archetype }}</p>

                    </div>
                </div>
            </div>


        </div>
        <div class="loading text-center" v-else>
            <img src="../assets/loading.png" alt="">
        </div>
    </div>
</template>


<style lang="scss" scoped>
@use '../assets/scss/partials/variables.scss' as *;

.wrap {
    background-color: white;

    margin-top: 1rem;
    padding: 2rem;
}

.results {
    height: 50px;
    background-color: black;
}

.card-body {
    height: 90px;
    background-color: $yu-primary;
}
</style>