module.exports = {
  dialect: 'mysql',
  host: 'db',
  username: 'root',
  password: 'root',
  database: 'cruddb',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
