<template>
  <div class="container">
    <button
      class="btn"
      @click="setTimeTest">
      Click me!!!
    </button>
    <h1> {{ test1 }}</h1>
    <h1> {{ test2 }}</h1>
  </div>
</template>

<script>

import {mapState, mapActions, mapMutations} from 'vuex';
export default {
  computed : {
     ...mapState('store',[
       'test1',
       'test2' 
  ]),

    // test1 () {
    //   return this.$store.state.store.test1 //state 변수에 접근
    // }
    // test2 () {
    //   return this.$store.state.store.test1 //state 변수에 접근
    // }
    
  }, 
  methods : {
    //mapMutations 사용
   ...mapMutations ('store',[
     'setText1',
     'setText2'
     ]),
     // mutations 호출
     changeText1() {
       //this.$store.commit('store/setText1', 'new text~')
       this.setText1('text1 수정합니다');
     },
     changeText2() {
     //  this.$store.commit('store/setText2', 'new text~~')
        this.setText2('text2 수정합니다');
     },
  
      //mapActions 사용
    ...mapActions ('store',[
      'setTime'
    ]),
      setTimeTest() {
    //   this.$store.dispatch('store/setTime', 'new test')
          this.setTime('3초 후 수정됐습니다.');
      }

     // actions  호출
     // setTimeTest() {
     //   this.$store.dispatch('store/setTime', 'new test')
     // }


  }
}
</script>
<style scoped lang="scss">
.container {
   width: 200px;
   height: 200px;
   text-align: center;
  .btn {
    width: 150px;
    height: 50px;
    font-weight: bold;
    font-size: 16px;
    background-color : yellow;
    border-radius: 7px;    
  }
  h1 {
    margin: 10px 0;
  }
}
</style>