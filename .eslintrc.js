module.exports = {
    // 사전에 정의된 전역 변수 설정
    env: {
      //browser와 node 환경에서 사용가능하게 함
      browser: true,
      node: true
    },
    // 사용 가능한 규칙 
    extends: [

      //vue  
      // 'plugin:vue/vue3-essential', // Lv1
      'plugin:vue/vue3-strongly-recommended', // Lv2
      // 'plugin:vue/vue3-recommended', // Lv3 가장 엄격함

      //js
      'eslint:recommended'
    ],
    // 구문 분석할 패키지 설정(Babel, ES6^ => ES5)
    parserOptions: {
      parser: 'babel-eslint'
    },
    // 추가적인 코드 규칙을 설정
    rules: {
      'vue/html-closing-bracket-newline': ['error', {
        "singleline": 'never',
        "multiline": 'never'
      }],    
        "vue/html-self-closing": ["error", {
          "html": {
            "void": "always",
            "normal": "never",
            "component": "always"
          },
          "svg": "always",
          "math": "always"
        }]
    }
  }
  