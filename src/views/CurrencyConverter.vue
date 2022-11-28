<template>
  <div class="currency_block">
    <Converter />
  </div>
</template>
<script>
/* import components */
import Converter from '@/components/Converter.vue'

export default {
  name: 'CurrencyList',
  components: {
    Converter
  }
}
</script>
<style lang="scss" scoped>
  .currency_converter {
    width: 100%;
    box-sizing: border-box;
    min-height: 100vh;
    background-color: #fff;
    padding: 20px ;
    border-radius: 10px;
  }
</style>