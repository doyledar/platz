let getters = {
  // Retourne un certain nombre de ressources
  // Les éléments start et end sont définis dans les params dans le fichier Index.vue
  getRessources(state) {
    return function({start, end}) {
      // Inspiré de https://stackoverflow.com/questions/59327314/reactjs-array-slicestart-end-not-working
      let ressources = {...state.ressources.slice(start, end)}
      return ressources
    }
  },
  // Retourne toutes les catégories
  getCategories(state) {
    return state.categories
  },
  // Retourne la catégorie en fonction de l'élément categorie_id de la ressource
  getCategoriesByRessourceId(state) {
    return function(data) {
      return state.categories.find(categorie => categorie.id === data.categorie_id)
    }
  }
}

export default getters;
