import { createStore } from 'vuex'

import currency from './modules/currency'

export default createStore({
  modules: {
    currency
  }
})
