const Sequelize = require('sequelize');

class User extends Sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        sex: Sequelize.ENUM(["M", "F"]),
        birthDate: Sequelize.VIRTUAL,
        age: Sequelize.DATE,
        email: Sequelize.STRING,
      },
      {
        sequelize,
      },
    );

    this.addHook('beforeSave', async (user)=>{
      user.age = new Date().getFullYear() - new Date(user.birthDate).getFullYear()
    })

    return this;
  }
}

module.exports = User;

