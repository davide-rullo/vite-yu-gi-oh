<script>
import AppHeader from './components/AppHeader.vue';
import AppContent from './components/AppContent.vue';
import AppSelect from './components/AppSelect.vue';


export default {

  name: 'App',
  data() {
    return {

    }
  },
  components: {
    AppHeader,
    AppContent,
    AppSelect
  }
}

</script>


<template>
  <AppHeader></AppHeader>
  <main>
    <AppSelect></AppSelect>
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
