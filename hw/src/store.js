import axios from 'axios';
import { createStore } from 'vuex'

export const store = createStore({
    state: {
        cartItems: []
    },
    mutations: {
        updateCartItems(state, payload) {
            state.cartItems = payload;
        }    
    },
    actions: {
        getProductItems({ commit }) {
            axios.get(`http://127.0.0.1:3000/api/latest/song`).then((response) => {
                //console.log(response.data);
                commit('updateCartItems', response.data.entry)
            });
        }
    },
    getters: {
        cartItems: state => state.cartItems
    }
});
