const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('videogame', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
    name:{
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
    },
    description:{
        type: DataTypes.TEXT,
        allowNull: false,
    },
    released:{
        type: DataTypes.STRING,
        allowNull:false,

    },
    image:{
        type: DataTypes.STRING(1234),
        allowNull: false,
        validate:{
            isUrl: true,
        },
    },
    rating:{
        type: DataTypes.FLOAT

    },
    platforms:{
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull:true,

    },
    createInDb:{
        type: DataTypes.BOOLEAN,
        allowNull:false,
        defaultValue: true,
    }
   
    
},
{
    timestamps:false,
});
};
