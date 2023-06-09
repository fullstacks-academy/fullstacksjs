const { init } = require('@fullstacksjs/eslint-config/init')

module.exports = init({
  modules: {
    auto: true,
    typescript: {
      parserProject: './tsconfig.json',
      resolverProject: './tsconfig.json',
    }
  }
})
