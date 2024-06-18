const { DataTypes } = require('sequelize');

const sequelize = require('../config/database');

const Pupil = sequelize.define('Pupil', {
  firstname: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastname: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  coin: {
    type: DataTypes.INTEGER,
  },
  pupilphone: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  parentphone: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  role: {
    type: DataTypes.ENUM('mentor', 'admin', 'pupil'),
    defaultValue: 'pupil'
},
lessonDay: {
    type: DataTypes.STRING,
    allowNull: false,
},
lessonTime: {
    type: DataTypes.STRING,
    allowNull: false,
}
});
module.exports = Pupil;