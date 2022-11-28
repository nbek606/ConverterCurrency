<template>
  <div class="currency_block">
    <div class="currency_list">
      <CurrencySearch />
      <CurrencyListItem
        v-for="itemCurrency in currencyList"
        :key="itemCurrency.ID"
        :item-currency="itemCurrency"
      />
    </div>
  </div>
</template>
<script>

import { mapGetters } from 'vuex'

/* import components */
import CurrencyListItem from '@/components/CurrencyListItem.vue'
import CurrencySearch from '@/components/CurrencySearch.vue'

export default {
  name: 'CurrencyList',
  components: {
    CurrencyListItem,
    CurrencySearch
  }, 
  data () {
    return {
    }
  },

  computed: {
    ...mapGetters({
      currencyList: 'getCurrencyList'
    }),
  },

}
</script>
<style lang="scss" scoped>
  .currency_block {
    padding: 20px;

    .currency_list {
      width: 100%;
      box-sizing: border-box;
      border-radius: 10px;
      padding: 20px 20px;
      background-color: #fff;
      display: flex;
      flex-direction: column;
    }
  }
</style>