<template>
  <div class="converter">
     <div class="converter_block">
        <div class="converter_item">
          <input
            v-model="basicCurrencyNominal"
            class="converter_item-input"
            type="number"
          >
          <ConverterSelect 
            :options="currencyCharCodeList"
            v-model:char-code="basicCurrencyCharCode"
          />
        </div>  
        <div 
          class="currency_switched"
          @click="swapCurrency()"
        >
          <span class="material-icons currency_switched-icon">
            swap_vert
          </span>
        </div>
        <div class="converter_item">
          <input
            :value="getConvertCurrencyValue"
            class="converter_item-input"
            type="number"
            disabled
          >
          <ConverterSelect 
            :options="currencyCharCodeList"
            v-model:char-code="convertCurrencyCharCode"
          />
        </div>  
     </div> 
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import { ConverterMixin } from '@/mixins/ConverterMixin'

/* import components */
import ConverterSelect from '@/components/ConverterSelect.vue'

export default {
  name: 'CurrencyList',
  mixins: [ConverterMixin],
  components: {
    ConverterSelect
  },

  data () {
    return {
      basicCurrencyCharCode: null,
      convertCurrencyCharCode: null,
      basicCurrencyNominal: 1,
    }
  },

  mounted () {
    this.basicCurrencyCharCode = this.getBasicCurrency.CharCode
    this.convertCurrencyCharCode = this.getConvertCurrencyCharCode
  },

  watch: {
    basicCurrencyCharCode: {
      handler (value) {
        if (value) {
          this.changeBasicCurrencyValue()
        }
      }
    }
  },

  computed: {
    ...mapGetters({
      currencyList: 'getCurrencyList',
      currencyCharCodeList: 'getCurrencyCharCodeList',
      getBasicCurrency: 'getBasicCurrency',
      getCurrencyByCharCode: 'getCurrencyByCharCode',
      getCurrencyWellByCharCode: 'getCurrencyWellByCharCode',
      convertCurrencyValue: 'getConvertCurrencyValue',
      getConvertCurrencyCharCode: 'getConvertCurrencyCharCode'
    }),

    getConvertCurrencyValue () {
      return this.convertCurrencyValue(this.basicCurrencyCharCode, this.convertCurrencyCharCode, this.basicCurrencyNominal)
    }
  },

  methods: {
    changeBasicCurrencyValue () {
      const selectedBasicCurrency = this.getCurrencyByCharCode(this.basicCurrencyCharCode)

      if (!selectedBasicCurrency || this.basicCurrencyCharCode == this.getBasicCurrency.CharCode) {
        return
      }
      
      this.basicCurrencyNominal = selectedBasicCurrency.Nominal
    }
  }
}
</script>
<style lang="scss" scoped>
  .converter {
    width: 100%;
    box-sizing: border-box;
    min-height: 100vh;
    background-color: #fff;
    padding: 20px ;
    border-radius: 10px;

    .currency_switched {

      &-icon {
        font-size: 60px;
        color: #a4a9b5;
        cursor: pointer;
        margin:  0px 10px 10px 10px;
      }
    }

    &_item {
      display: flex;

      &-input {
        height: 40px;
        border: 1px solid;
        border-right: none;
        padding: 0 10px;
        font-size: 20px;
        box-sizing: border-box;
      }
    }

    &_block {

    }
  }
</style>