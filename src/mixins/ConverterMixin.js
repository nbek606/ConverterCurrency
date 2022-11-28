export const ConverterMixin = {
  data () {
    return {
      switched: false,
    }
  },

  methods: {
    swapCurrency () {
      this.convertCurrencyCharCode = [this.basicCurrencyCharCode, this.basicCurrencyCharCode = this.convertCurrencyCharCode][0];
      this.switched = !this.switched
    },

    round (value) {
      return Math.round(value * 10000) / 10000
    }
  }
}