<template>
 <div class="currency">
    <div 
      class="tab"
    >
      <div 
        class="tab_item"
        v-for="item in tabItems"
        :key="item.id"
        @click="goToRoute(item.routeName)"
      >
        {{ item.label }}
      </div>
    </div>
  </div>
</template>
<script>

import { RouteName } from '@/router/utils'

export default {
  name: "Home",

  data () {
    return {
      tabItems: [
        {
          'id': 1,
          'label': 'Список валют',
          'routeName': RouteName.CurrencyList
        },
        {
          'id': 2,
          'label': 'Конвертер',
          'routeName': RouteName.CurrencyConverter
        }
      ]
    }
  },

  methods: {
    goToRoute(transName) {
      this.$router.push({
        name: transName
      })
    }
  }
}
</script>
<style lang="scss" scoped>
  .currency {
    padding: 50px;
    .tab {
      display: flex;

      &_item {
        background-color: #fff;
        padding: 20px 15px;
        border-radius: 5px;
        margin-right: 5px;
        cursor: pointer;
      }
    }
  }
</style>