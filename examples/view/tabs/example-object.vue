<template>
  <div class="example">
    <p class="title">Array & Object</p>
    <owl-tabs :data="data"
              :active.sync="active"
              :init-callback="initCallback"
              :name="name"
              :line-width="lineWidth"
              :highlight="highlight"
              :line-color="lineColor"
              @callback="getData"/>
    <params :data="paramsData"/>
  </div>
</template>

<script>
import params from '../../components/params'

export default {
  components: {
    params
  },
  data () {
    return {
      data: [{key: 'Google'}, {key: 'IBM'}, {key: 'Apple'}, {key: 'Oracle'}, {key: 'Facebook'}, {key: 'Baidu'}],
      active: 1,
      name: 'key',
      lineWidth: '40px',
      highlight: '#24292e',
      lineColor: '#24292e',
      initCallback: true,
      result: null,
      paramsData: []
    }
  },
  methods: {
    getData (res) {
      this.result = res
    },
    getParamsData () {
      this.paramsData = Object.entries({
        data: this.data,
        active: this.active,
        name: this.name,
        lineWidth: this.lineWidth,
        highlight: this.highlight,
        lineColor: this.lineColor,
        initCallback: this.initCallback,
        result: this.result
      })
    }
  },
  watch: {
    active: 'getParamsData',
    result: 'getParamsData'
  },
  created () {
    this.getParamsData()
  }
}
</script>

<style lang="less" scoped>
.title {
  font-family: PingFangSC-Medium;
  font-size: 48px;
  padding: 20px 0 20px 20px;
}
</style>