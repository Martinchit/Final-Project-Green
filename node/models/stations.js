'use strict';
module.exports = (sequelize, DataTypes) => {
  var stations = sequelize.define('stations', {
    key: DataTypes.STRING,
    location: DataTypes.STRING,
    lat: DataTypes.STRING,
    lng: DataTypes.STRING,
    districtL: DataTypes.STRING,
    districtS: DataTypes.STRING,
    address: DataTypes.STRING,
    provider: DataTypes.STRING,
    parkingNo: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return stations;
};