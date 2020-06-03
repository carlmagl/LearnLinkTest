import axios from 'axios';

export default {
    nuxtServerInit(vuexContext, context) {
        return axios.get('https://trefle.io/api/plants?token=b29Jd0pCNEw3cUFhSk1nNHlXWkVrdz09')
        .then()
        .catch(e => context.error(e))
    }

}