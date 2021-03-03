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
  },
  setUsers({commit}) {
    // Transaction AJAX
    axios.get('api/users')
          .then(responsePHP => commit('SET_USERS', responsePHP.data))
  }
}

export default actions;
