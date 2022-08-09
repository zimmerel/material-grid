/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  extends: ["@zmrl"],
  overrides: [
    {
      files: ["**/*.ts?(x)"],
      parserOptions: {
        tsconfigRootDir: __dirname,
        project: ["./tsconfig.eslint.json"],
        sourceType: "module",
      },
    },
  ],
  ignorePatterns: ["**/dist/**"],
};
