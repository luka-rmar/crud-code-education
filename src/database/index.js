const Sequelize = require('sequelize');

const User = require('../app/models/User')

const dbConfig = require('../config/database');

const models = [User];

class Database {
  constructor() {
    this.execute();
  }

  execute() {
    this.connection = new Sequelize(dbConfig);
    models.map(model => model.init(this.connection));
  }
}

module.exports = new Database();
