module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    // Giving the Author model a name of type STRING
    name: DataTypes.STRING
  },
  // Here we'll pass a second "classMethods" object into the define method
  // This is for any additional configuration we want to give our models
    {
      // We're saying that we want our User to have Items associated to her
      classMethods: {
        associate: function(models) {
          // Associating User with Items
          User.hasMany(models.Item);
        }
      }
    });
  return User;
};
