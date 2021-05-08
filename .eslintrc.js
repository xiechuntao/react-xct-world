module.exports = {
  root: true,
  parserOptions: {
    sourceType: 'module',
  },
  // required to lint *.vue files
  plugins: ['html'],
  // add your custom rules here
  rules: {
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
  },
  // 脚本在执行期间访问的额外的全局变量
  // 当访问未定义的变量时，no-undef 规则将发出警告。
  // 如果你想在一个文件里使用全局变量，推荐你定义这些全局变量，这样 ESLint 就不会发出警告了。
  // 你可以使用注释或在配置文件中定义全局变量
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    AMap: true,
    window: true,
    document: true,
  },
};
