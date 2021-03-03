<template>
  <div>
    <div class="container object">
      <div id="main-container-image">
        <section class="work" v-for="ressource in ressources" :key="ressource.id">

          <figure class="white">
            <router-link :to="{name: 'show', params: { id: ressource.id }}">
              <img :src="`assets/img/${ressource.image}`" :alt="ressource.nom" />
              <dl>
                <dt>{{ ressource.nom }}</dt>
                <dd>{{ ressource.description }}</dd>
              </dl>
            </router-link>
            <div id="wrapper-part-info">
              <div class="part-info-image"><img :src="`assets/img/${categories(ressource).icone}`" :alt="categories(ressource).nom" width="28" height="28"/></div>
              <div id="part-info">{{ categories(ressource).nom }}</div>
            </div>
          </figure>

        </section>
      </div>
    </div>
    <div id="wrapper-oldnew">
      <div class="oldnew">
        <div class="wrapper-oldnew-prev">
          <div id="oldnew-prev"></div>
        </div>
        <div class="wrapper-oldnew-next">
          <div id="oldnew-next"></div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  export default {
    data() {
      return {
        params: {
          start: 0,
          end: 10
        }
      }
    },
    computed: {
      ressources() {
        // Retourne un certain nombre de ressources (le nombre dépend des params)
        return this.$store.getters.getRessources(this.params)
      },
      categories() {
        return function(ressource) {
          // Retourne les catégories de la ressource choisie
          return this.$store.getters.getCategoriesByRessourceId(ressource)
        }
      }
    }
  }
</script>
