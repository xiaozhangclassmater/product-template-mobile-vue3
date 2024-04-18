import stylisticJs from '@stylistic/eslint-plugin-js'
import pluginVue from 'eslint-plugin-vue'
export default [
  // add more generic rulesets here, such as:
  // js.configs.recommended,
  ...pluginVue.configs['flat/recommended'],
  {
    plugins:{
      '@stylistic/js': stylisticJs
    }
  },
  // ...pluginVue.configs['flat/vue2-recommended'], // Use this if you are using Vue.js 2.x.
  {
    rules: {
      'vue/no-unused-vars': 'error',
      "no-var": 'error',
      "vue/multi-word-component-names": 'off',
      '@stylistic/js/indent': ['error', 4],
    }
  }
]
