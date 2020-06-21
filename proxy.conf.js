const proxy = [
  {
    context: '/backend/*',
    target: 'http://localhost:4200',
    pathRewrite: {'^/backend' : ''}
  }
];

module.exports = proxy;