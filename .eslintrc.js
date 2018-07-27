module.exports = {
  "plugins": ["prettier"],
  "rules": {
    "no-else-return": ["error", { allowElseIf: false }],
    "prettier/prettier": "error",
  },
  "parserOptions": {
    "ecmaVersion": 2017,
  },
};
