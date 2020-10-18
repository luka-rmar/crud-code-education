const jwt = require('fastify-jwt');

module.exports = async app => {
  app.register(jwt, {
    secret: 'android',
  });

  app.decorate('authenticate', async (req, res) => {
    try {
      await req.jwtVerify();
    } catch (error) {
      res.send(error);
    }
  });
};
