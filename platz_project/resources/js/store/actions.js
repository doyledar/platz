let actions = {
  setRessources({commit}) {
    // Transaction AJAX
    axios.get('api/ressources')
          .then(responsePHP => commit('SET_RESSOURCES', responsePHP.data))
  },
  setCategories({commit}) {
    // Transaction AJAX
    axios.get('api/categories')
          .then(responsePHP => commit('SET_CATEGORIES', responsePHP.data))
  }
}

export default actions;
