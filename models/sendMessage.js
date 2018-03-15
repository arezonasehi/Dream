// Sequelize (capital) references the standard library
module.exports = function (sequelize, DataTypes) {
    // sequelize (lowercase) references our connection to the DB.
    // Creates a "permissionLevel" model that matches up with DB
    var sendMessage = sequelize.define("sendMessage", {
        //unique id for each Messages will save as int 
        name: {
            type: DataTypes.STRING,
            AllowNull: false,
            Validate: {
                len: [0, 2000]
            }
        },
        // the permission Type gets saved as a string
        email: {
            type: DataTypes.STRING,
            AllowNull: false,
            Validate: {
                len: [0, 2000]
            }
        },
        message: {
          type: DataTypes.STRING,
          allowNull: true,
          Validate : {
              len : [0,2000]
          }
    
        }
        // the permission Description  (a string)
    }, {
        timestamps: false
    });
    
        sendMessage.associate = function (models) {
            sendMessage.belongsTo(models.User, {
                foreignKey: {
                    allowNull: false
                }
            });
        }
    
        return sendMessage
    };
    // Syncs with DB
    // Makes the Character Model available for other files (will also create a table)