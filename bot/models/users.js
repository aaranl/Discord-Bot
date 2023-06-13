module.exports = (sequelize, DataTypes) => {
    return sequelize.define ('userinfo' , {
        user_id: {
            type: DataTypes.STRING,
            primaryKey: true,
        },
        user_messages: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
            allowNull: false,
        }
    })
}