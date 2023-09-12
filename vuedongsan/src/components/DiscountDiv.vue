<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="discount">
    <h4>지금 결제하면 {{discountNum}}% 할인</h4>
  </div>
</template>

<script>
export default {
  name : 'DiscountDiv',
  props: {
    discountNum: Number,
  }
}
</script>

<style>

</style>