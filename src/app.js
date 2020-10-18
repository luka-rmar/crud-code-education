require('./database');

const Fastify = require('fastify');
const routes = require('./routes');



class App {
  constructor(){
    this.server = Fastify({
      ignoreTrailingSlash: true,
      logger: {
        level: 'info'
      }
    });

    this.routes()
  }
  routes(){
    this.server.register(routes)
  }

}


module.exports = new App().server;
