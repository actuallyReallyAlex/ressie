import Ressie from './index'

// * Simple
new Ressie({
  routes: [
    {
      method: 'get',
      path: '/',
      handler: (req, res, next) => {
        res.send({ result: 'success' })
      }
    }
  ]
})

// * Options
// new Ressie({
//   middleware: [
//     {
//       name: 'morgan',
//       options: {
//         format: 'dev'
//       }
//     }
//   ],
//   port: 5000,
//   routes: [
//     {
//       method: 'get',
//       path: '/',
//       handler: (req, res, next) => {
//         res.send({ result: 'success' })
//       }
//     }
//   ]
//   // * Other options
// })
