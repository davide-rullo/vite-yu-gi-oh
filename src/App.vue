<script>
import AppHeader from './components/AppHeader.vue';
import AppContent from './components/AppContent.vue';
import AppSelect from './components/AppSelect.vue';
import { state } from "./state.js";


export default {

  name: 'App',

  data() {
    return {
      state
    }
  },
  methods: {
    searchByArch() {
      console.log('searching', this.state.archetypeList);
      const urlAr = 'https://db.ygoprodeck.com/api/v7/cardinfo.php' + `?archetype=${this.state.archetypeList}`
      console.log(urlAr);
      this.state.fetchData(urlAr);

    },




  },
  components: {
    AppHeader,
    AppContent,
    AppSelect
  },


}

</script>


<template>
  <AppHeader></AppHeader>

  <main>
    <AppSelect @performSearch="searchByArch"></AppSelect>
    <AppContent></AppContent>
  </main>
</template>

<style lang="scss">
@use './assets/scss/partials/variables.scss' as *;

main {
  background-color: $yu-primary;


  .search {
    width: 8rem;
    padding-top: 1rem;

  }
}
</style>
