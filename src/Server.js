import express from 'express'
import chalk from 'chalk'

class Server {
  constructor({ port, routes }) {
    this.port = port
    this.routes = routes

    const app = express()

    this.routes.forEach(({ method, path, handler }) => {
      app[method](path, handler)
    })

    app.listen(port, () => {
      console.log(chalk.green(`Server is listening on port ${port} ...`))
    })
  }
}

export default Server
