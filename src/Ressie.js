import express from 'express'
import morgan from 'morgan'
import favicon from 'serve-favicon'
import path from 'path'
import chalk from 'chalk'

class Ressie {
  constructor({
    middleware = [
      {
        name: 'morgan',
        options: {
          format: 'dev'
        }
      }
    ],
    port = 5000,
    routes
  }) {
    this.port = port
    this.routes = routes
    this.middleware = middleware
    this.middlewarePackages = [
      {
        name: 'morgan',
        package: morgan
      }
    ]

    const app = express()

    app.use(favicon(path.join(__dirname, 'favicon.ico')))

    this.middleware.forEach(({ name, options }) => {
      const middleware = this.middlewarePackages.find(
        middleware => middleware.name === name
      ).package
      app.use(middleware(options.format))
    })

    this.routes.forEach(({ method, path, handler }) =>
      app[method](path, handler)
    )

    app.listen(port, () => {
      console.clear()
      console.log(chalk.green(`Server is listening on port ${port} ...`))
    })
  }
}

export default Ressie
