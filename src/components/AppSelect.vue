<script>
import { state } from "../state.js";

export default {
    name: 'AppSelect',
    data() {
        return {
            state
        }
    },
    mounted() {
        state.fetchData()
        state.fetchArchetypes()
    },
    methods: {

    }
}
</script>
<template>
    <div class="container">
        <div class="search">
            <select class="form-select" aria-label="Default select example" @change="">

                <option value="" v-for="archetype in state.arch">{{ archetype.archetype_name }}</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </select>
        </div>
    </div>
</template>


<style lang="scss" scoped></style>