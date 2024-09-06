module.exports = {
  root: true,
  // 现有校验antfu包
  extends: ['@antfu'],
  rules: {
    // 覆盖或添加新的规则
    'no-alert': 'error', // 将no-alert规则设置为error级别，即不允许使用alert()
    // 你可以在这里添加更多的自定义规则
  },
}
