module.exports = function(sequelize, DataTypes) {
  var Item = sequelize.define("Item", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [1]
    }
  },
  notification: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    notification_sent_at: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    date_created: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },

    {
      // We're saying that we want our Author to have Posts
      classMethods: {
        associate: function(models) {
          // When we delete an Author, we'll also delete their Posts "cascade"
          // An Author (foreignKey) is required or a Post can't be made
          Item.belongsTo(models.User,
            {
              onDelete: "cascade",
              foreignKey: {
                allowNull: false
              }
            });
        }
      }
    });
  return Post;
};
