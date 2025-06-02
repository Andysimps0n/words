// create a model and export it


module.exports = (sequelize, DataTypes) => {
    
    
    // Table formats
    const Users = sequelize.define("Users", {
        name : {
            type : DataTypes.STRING,
            allowNull : false
        }, 
        password : {
            type : DataTypes.INTEGER,
            allowNull : false
        },
        status : {
            type: DataTypes.STRING,
            allowNull : false
        }
    })

    return Users
}