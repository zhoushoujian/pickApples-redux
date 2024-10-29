module.exports = {
  extends: ["eslint-config-ts-base"],
  parser: "babel-eslint",
  globals: {
    Babel: true,
    React: true,
  },
  rules: {

  },
  env: {
    browser: true,
    es6: true,
  },

  plugins: ["react", "import", "react-hooks", "jsx-a11y", "babel"],
};
