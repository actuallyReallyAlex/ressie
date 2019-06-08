import Server from './index'

new Server({
  port: 5000,
  routes: [
    {
      method: 'get',
      path: '/',
      handler: (req, res, next) => {
        res.send({ result: 'success' })
      }
    }
  ]
  // * Other options
})
