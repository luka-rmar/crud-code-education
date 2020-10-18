const app = require('./app');

app.listen(9000, '0.0.0.0', (err) => {
  if (err) {
      app.log.error(err);
      console.log(err);
      process.exit(1);
  }
  app.log.info('Server Started');
});
