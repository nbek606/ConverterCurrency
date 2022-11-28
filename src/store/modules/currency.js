import api from '@/plugins/axios'

const state = {
  currencyList: [],
  searchValue: '',
  basicCurrency: {
    CharCode: 'RUB',
    Name: 'Российский рубль'
  },
  convertCurrencyCharCode: 'KGS'
}

const mutations = {
  setCurrencyList: (state, payload) => { state.currencyList = payload },
  setSearchValue: (state, payload) => { state.searchValue = payload }
}

const actions = {
  currency ({ commit }) {
    api().get('daily_json.js').then((response) => {
      commit('setCurrencyList', response.data.Valute)
    })
  },

  search ({ commit }, payload) {
    commit('setSearchValue', payload)
  }

}

const getters = {
  getCurrencyList: state => {
    const list = Object.entries(state.currencyList).map(item => item[1])
    const searchValue = state.searchValue.toLowerCase()

    if (state.searchValue != '') {
      return list.filter(item => item.CharCode.toLowerCase().includes(searchValue) || item.Name.toLowerCase().includes(searchValue))
    }
    return list
  },

  getCurrencyCharCodeList: state => {
    let list = Object.entries(state.currencyList).map(item => {
      return {
        CharCode: item[1].CharCode,
        Name: item[1].Name
      }
    })

    list.push(state.basicCurrency)
  
    return list
  },
  getConvertCurrencyCharCode: state => state.convertCurrencyCharCode,
  getSearchValue: state => state.searchValue,
  getBasicCurrency: state => state.basicCurrency,
  getCurrencyByCharCode: (state, getters) => (charCode) => getters.getCurrencyList.find(item => item.CharCode == charCode),
  getCurrencyWellByCharCode: (state, getters) => (charCode) => {
      const currency = getters.getCurrencyByCharCode(charCode)

      if (charCode == 'RUB') {
          return 1
      }

      if (!currency) {
        return
      }

      return currency.Value / currency.Nominal 
  },

  getConvertCurrencyValue: (state, getters) => (basicCharCode, convertCharCode, basicCurrencyNominal) => {
    const basicCurrencyWell = getters.getCurrencyWellByCharCode(basicCharCode)
    const convertCurrencyWell = getters.getCurrencyWellByCharCode(convertCharCode)

    let convertSum = basicCurrencyWell / convertCurrencyWell * basicCurrencyNominal

    return Math.round(convertSum  * 10000) / 10000
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
