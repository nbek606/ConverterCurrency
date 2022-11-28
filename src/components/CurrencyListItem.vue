<template>
  <div class="currency_item">
    <div class="currency_item-block">
      <div class="switch">
        <span class="switch_item currency_color">
          {{ basicCurrencyCharCode }}
        </span>
        <span 
          class="switch_btn"
          @click="swapCurrency"
        >
          <span class="material-icons">
            swap_horiz
          </span>
        </span>
        <span class="switch_item currency_color">
          {{ convertCurrencyCharCode }}
        </span>
      </div>
      <div class="converter">
        <span class="converter_item currency_color">
          {{ basicCurrencyCharCode }} -
        </span>
        <span class="converter_value">
          {{ converterValue }}

          <span 
            class="converter_value-previos"
            :class="{'less_zero': previosValue < 0 }"
            v-if="previosValue != 0"
          >
            <span 
              v-if="previosValue > 0"
            >
              <span class="material-icons">
                north_west
              </span>
              +
            </span>
            <span v-else>
              <span class="material-icons">
                south_west
              </span>
            </span>
            {{ previosValue }}
          </span>  
        </span>
        <span class="converter_item currency_color">
          {{ convertCurrencyCharCode }}
        </span>
      </div>
    </div>  
  </div>
</template>
<script>

import { ConverterMixin } from '@/mixins/ConverterMixin'
import { mapGetters } from 'vuex'

export default {
  name: 'CurrencyListItem',
  mixins: [ConverterMixin],
  props: {
    itemCurrency: {
      type: Object,
      required: true
    }
  },

  data () {
    return {
      basicCurrencyCharCode: null,
      convertCurrencyCharCode: this.itemCurrency.CharCode
    }
  },

  mounted () {
    this.basicCurrencyCharCode = this.getBasicCurrency.CharCode
  },

  computed: {
    ...mapGetters({
      getBasicCurrency: 'getBasicCurrency'
    }),
    converterValue () {
      let value = this.itemCurrency.Value

      if (this.switched) {
        value = this.switchedValue
      }

      return this.round(value)
    },

    switchedValue () {
      return this.itemCurrency.Nominal / this.itemCurrency.Value
    },

    switchedPreviousValue () {
      return this.itemCurrency.Nominal / this.itemCurrency.Previous
    },

    previosValue () {
      let value = this.itemCurrency.Value - this.itemCurrency.Previous

      if (this.switched) {
        value = this.switchedValue - this.switchedPreviousValue
      }

      return this.round(value)
    }
  }
}
</script>
<style lang="scss" scoped>
  .currency_item {
    margin-bottom: 20px;
    font-size: 20px;

    &-block {
      background-color: #f9fafb;
      display: inline-block;
      width: 400px;
      .switch {
        padding: 10px 20px;
        display: flex;
        align-items: center;
        border-bottom: 1px solid #cecece;

        &_btn {
          cursor: pointer;

          span {
            font-size: 30px;
            padding: 0px 10px;
          }
        }
      }

      .converter {
        padding: 20px 20px;

        &_value {
          font-size: 25px;
          margin-right: 5px;

          &-previos {
            font-size: 16px;
            color: #6bc301
          }

          .less_zero {
            color: red !important;
          }
        }
      }
    }
  }
</style>