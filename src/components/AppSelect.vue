<script>
import { state } from "../state.js";

export default {
    name: 'AppSelect',

    data() {
        return {
            state
        }
    },
    created() {
        state.fetchData()
        state.fetchArchetypes()
    },

}
</script>
<template>
    <div class="container">
        <div class="search">
            <select class="form-select" aria-label="Default select example" name="archetype" id="archetype"
                @change="$emit('performSearch')" v-model="state.archetypeList">
                <option value="" disabled hidden> Select</option>
                <option value="" v-for="archetype in state.arch">{{ archetype.archetype_name }}</option>

            </select>
        </div>
    </div>
</template>


<style lang="scss" scoped></style>