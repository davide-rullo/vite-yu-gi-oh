<script>
import AppHeader from './components/AppHeader.vue';
import AppContent from './components/AppContent.vue';


export default {

  name: 'App',
  data() {
    return {

    }
  },
  components: {
    AppHeader,
    AppContent
  }
}

</script>


<template>
  <AppHeader></AppHeader>



  <main>
    <div class="search">
      <select class="form-select" aria-label="Default select example">

        <option value="1">Alien</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
    </div>
    <AppContent></AppContent>
  </main>
</template>

<style lang="scss">
@use './assets/scss/partials/variables.scss' as *;

main {
  background-color: $yu-primary;
  height: 1000px;

  .search {
    width: 8rem;
    padding-top: 1rem;
    margin-left: 10rem;
  }
}
</style>
