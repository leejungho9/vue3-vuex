

export default {
    namespaced : true,
    state : {
        test1 : 'test11',
        test2 :  'test222'
    },
    mutations : {
        setText1(state, value) {
            state.test1 = value;
        },
        setText2(state, value) {
            state.test2 = value;
        }
    },
    actions : {
        setTime({commit}, value) {
            return setTimeout(()=> {
                commit('setText1', value);
            }, 3000)
        }
    },
    getter : {}
}