module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    "prettier",
    "plugin:tailwindcss/recommended"
  ],

  parser: '@typescript-eslint/parser',
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  plugins: ['react-refresh', "tailwindcss"],
  rules: {
    'react-refresh/only-export-components': 'warn',
    "react/jsx-key": "off",
    "tailwindcss/no-custom-classname": "off"
  },
  "settings": {
    "tailwindcss": {
      "callees": ["cn"],
      "config": "tailwind.config.js"
    },
    "next": {
      "rootDir": ["./"]
    }
  },
  "overrides": [
    {
      "files": ["*.ts", "*.tsx"],
      "parser": "@typescript-eslint/parser"
    }
  ]
}
