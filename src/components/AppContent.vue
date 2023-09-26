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
        <div class="row row-cols-sm-2 row-cols-md-4 row-cols-lg-5 justify-content-center align-items-center">

            <div class="col" v-for="character in state.characters">
                <div class="card">
                    <img src="" alt="">
                    <div class="card-body">
                        <p>{{ character.name }}</p>
                    </div>
                </div>
            </div>


        </div>
    </div>
</template>


<style lang="scss" scoped>
.wrap {
    background-color: white;
    height: 800px;
    margin-top: 1rem;
    padding: 2rem;
}

.results {
    height: 50px;
    background-color: black;
}
</style>