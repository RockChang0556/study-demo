<template>
  <p>{{ message }}</p>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  components: {},
  props: {},
  data() {
    return {
      message: "haha", // 会触发getter
      test: "wowo", // 不会触发getter,因为模板没用到,即和视图没关系
    };
  },
  created() {},
  methods: {},
});
</script>

<style lang="less" scoped>
</style>