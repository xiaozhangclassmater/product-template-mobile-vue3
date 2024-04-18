module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        // "eslint:recommended",
        "plugin:vue/vue3-essential",
        'plugin:vue/vue3-recommended',
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
    },
    "rules": {
      'vue/no-unused-vars': 'error',
      "no-var": 'error',
      "vue/multi-word-component-names": 'off'
    }
}
