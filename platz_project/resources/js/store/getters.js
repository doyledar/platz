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
  },
  // Retourne la ressource en fonction de son id
  getRessourceById(state) {
    return function(id) {
      return state.ressources.find(ressource => ressource.id == id);
    }
  },
  // Retourne le user en fonction de l'élément user_id de la ressource
  getUserByRessourceId(state) {
    return function(data) {
      return state.users.find(user => user.id === data.user_id)
    }
  }
}

export default getters;
