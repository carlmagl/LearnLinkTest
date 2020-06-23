import Vuex from 'vuex'
import Axios from 'axios'

const createStore = () => {
    return new Vuex.Store({
        state: () => ({
            countries: []
        }),
        mutations: {
            storeCountries(state, array) {
                state.countries = array
            }
        },
        getters: {
            getCountries: state => state.countries
        },
        actions: {
            async nuxtServerInit(vuexContext, context) {
                return Axios.get("https://restcountries-v1.p.rapidapi.com/all", {
                    headers: {
                        "x-rapidapi-host": "restcountries-v1.p.rapidapi.com",
                        "x-rapidapi-key": "b6d30ad204mshda48b7cd0cc5f9ep143885jsn188cc3b94a8c",
                        useQueryString: true
                    }
                })
                    .then(data => {
                        const countriesArray = data.data;
                        /* for (const name in data.data) {
                            countriesArray.push(data.data);
                        } */
                        vuexContext.commit("storeCountries", countriesArray);
                    })
                    .catch(e => context.error(e));
            }
        }
    })
}

export default createStore