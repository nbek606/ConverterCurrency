<template>
   <div class="currency_search">
      <input
        v-model="searchValue"
        class="currency_search-input"
        placeholder="Поиск по названию валюты или по коду"
      />
      <div
        class="currency_search-btn"
        @click="setSearchValue"
      >
        Поиск
      </div>
    </div>
</template>
<script>
export default {
  name: 'CurrencySearch',
  data () {
    return {
      searchValue: ''
    }
  },

  methods: {
    setSearchValue () {
      this.$store.dispatch('search', this.searchValue)
    }
  }
}
</script>
<style lang="scss" scoped>
  .currency_search {
    width: 100%;
    display: flex;
    margin-bottom: 40px;
    
    &-input {
      font-size: 20px;
      padding: 10px 10px;
      border-radius: 5px 0 0 5px;
      min-width: 400px;
      border: none;
      border: 1px solid #cecece;
      border-right: 0;
    }  

    &-btn {
      font-size: 20px;
      padding: 10px 30px;
      border-radius: 0px 5px 5px 0px;
      color: #fff;
      background-color: #03305c;
      cursor: pointer;
    }
  }
</style>