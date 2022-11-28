<template>
  <div>
    <select
      :value="charCode"
      @change="select"
      class="converter_select"
    >
      <option 
        v-for="item in options"
        :key="item.CharCode"
        :value="item.CharCode"
      >
        {{ item.CharCode }} {{ item.Name }}
      </option>
    </select>
  </div>
</template>
<script>
export default {
  name: 'ConverterSelect',
  props: {
    options: {
      type: Array,
      required: true
    },
    charCode: {
      type: String,
      default: ''
    }
  },
  methods: {
    select (event) {
      this.$emit('update:char-code', event.target.value)
    }
  }
}
</script>
<style lang="scss" scoped>
  .converter_select {
    height: 40px;
    font-size: 20px;
    text-align: center;
  }
</style>