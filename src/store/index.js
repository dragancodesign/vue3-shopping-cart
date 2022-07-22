import { createStore } from 'vuex'
import axios from 'axios'
// import { update } from 'immutable';

export default createStore({
  state: {
    products: [],
    productsInBag: []
  },
  getters: {
  },
  mutations: {
    loadProducts(state, products) {
      
      state.products = products;
    }, 
    addToBag(state, product) {
      state.productsInBag.push(product);
    },
    removeFromBag(state, productId) {
      var updatedBag = state.productsInBag.filter(item => productId != item.id);
      state.productsInBag = updatedBag;
    }
  },
  actions: {
    loadProducts({ commit }) {
      axios
      .get('https://fakestoreapi.com/products')
      .then(response => { 
        commit('loadProducts', response.data);
        }) 
    },
    addToBag({ commit }, product) {
      commit('addToBag', product);
    },
    removeFromBag({ commit }, productId) {
      if(confirm('Are your sure you want to remove the item from bag?')) {
        commit('removeFromBag', productId);
      }
    }
  },
  modules: {
  }
})

