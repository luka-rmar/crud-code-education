module.exports = async app => {
  app.get('/', async (req, res) => {
    return res.send({ message: 'APicação inicial' });
  });
};
