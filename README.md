# Vuex, Vuex helper 

### Vuex란?

<Blockquote>
vue를 사용시 부모 컴포넌트의 데이터를 자식 컴포넌트로 보내야할 일이 많다. 이때 일반적으로 props 기능을 이용해 데이터를 보내지만, 또 그 자식의 자식 컴포넌트로 보내야할 때 계속 props를 사용한다면 코드가 복잡해지고 유지보수가 어려워 진다.  <br>
 이를 해결하기 위해 존재하는 것이 Vuex로,  중앙 집중화된 상태 관리 패턴의 라이브러리이다. 데이터를 한 곳에 몰아서 처리해주며 하나의 매개체를 통해 어느 곳에도 데이터를 전달할 수 있다.
</Blockquote>

### Vuex 속성
1. state : 실제로 취급해야하는 데이터 (vue의 data 비슷)
2. gettes : 데이터를 계산된 형태로 만들어내는 방식 (vue의 computed와 비슷)
3. mutations : 함수들을 생성, 데이터를 변경하는 용도 (vue의 method와 비슷)
4. actions : 함수들을 생성, 그 외 나머지 로직과 비동기로 실행할 때 사용 (vue의method와 비슷)

### mutations, actions의 차이점

* mutations(변이) : 관리하고 있는 데이터를 변경시킬 수 있음, 이곳을 제외한 다른 곳에서는 데이터를 변경을 허용하지 않음(데이터의 복잡성을 줄여줌)
* actions(비동기) : 데이터 수정이 허용되지 않음, 비동기로 처리하도록 구성되어 있음, 이 곳에서는 직접 state를 사용하는 것이 아닌 context를 사용하며 context를 사용해 state, getter, commit(mutations), dispatch(actions) 에 접근할 수 있음 
하지만 commit과 dispatch는 함수처럼 실행해야하는 개념

```
ex ) context.state, context.getter, context.commit(mutations), context.dispatch(actions) 
```


### Vue 컴포넌트에서 store 사용하기
* state :　$store.state.모듈.상태
* getters : $store.getters[‘모듈/게터’]
* mutations : $store.commit(‘모듈/변이’)
* actions : $store.dispatch(‘모듈/액션’)


### Vuex Helper란?
<Blockquote>
Vuex에 선언한 속성들을 뷰 컴포넌트에 더 쉽게 연결을 도와주는 함수들
</Blockquote>

### Helper함수 종류
* mapState : state를 연결해주는 함수
* mapGetters : getters를 연결해주는 함수
* mapMutations : mutations를 연결해주는 함수
* mapActions : actions를 연결해주는 함수

### Helper 사용법 
헬퍼를 사용하고 싶은 vue 파일에서 아래 코드 작성 
```
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
```
### mapState, mapGetter 사용법
```
computed() {
...mapState (‘모듈’ ,[ ‘상태1’, ‘상태2’])
...mapGetters (‘모듈’ ,[ ‘게터1’, ‘게터2’])
```

### mapMutations, mapActions 사용법
```
methods() {
...mapMutations (‘모듈’ ,[ ‘변이1’, ‘변이2’])
...mapActions (‘모듈’ ,[ ‘액션1’, ‘액션2’])
```
