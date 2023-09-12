<template>
  <div v-if="modalOpen" class="black-bg">
    <div class="white-bg">
      <img :src="content[selNum].image">
      <h4>{{content[selNum].title}}</h4>
      <p>{{content[selNum].content}}</p>
      <!-- <input @input="month = $event.target.value" type="text" name="month" /> 개월 -->
      <input v-model.number="month" />
      <!-- <input v-model.number="monthRange" type="range" min="1" max="12" > -->
      
      <p class="tot-price">{{month}} 개월 선택함 : {{Number(month) * content[selNum].price}} 원</p>
      <button @click="$emit('closeModal')">닫기</button>
      <!-- props 로 넘겨준건 read-only다 수정안됨 component에서는 -->
    </div>
  </div>
</template>

<script>

export default {
  name: 'ModalView',
  props : {
    content: Object,
    selNum: Number,
    modalOpen: Boolean,
  },
  data() {
    return {
      month : 1,
    }
  },
  // watch : {
  //   month(val) {
  //     console.log(val);
  //     if(val < 3) {
  //       alert('3개월 이상 입력가능합니다.');
  //       this.month = 3;
  //       return;
  //     }
  //   }
  // }
  beforeUpdate() {
    if(this.month < 3) {
      alert('3개월 이상 입력가능합니다.');
      this.month = 3;
      return;
    }
  }
}
</script>

<style>

</style>