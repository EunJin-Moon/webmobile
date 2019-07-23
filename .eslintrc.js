module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/essential", "@vue/prettier", "eslint:recommended"],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "semi": 0,
    "prettier/prettier": [
        "warn",
        {
          "semi": false,
          "trailingComma": "none"
        }
      ]
  },
  parserOptions: {
    parser: "babel-eslint"
  }
};
