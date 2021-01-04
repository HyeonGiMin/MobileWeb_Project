module.exports =(sequelize, DataTypes) => {
    //.define('테이블명',{ 속성명{ 속성값}....}
    var user= sequelize.define('user', {
        name: {
            type: DataTypes.STRING(20),
            allowNull: false,
            primaryKey:true,
        },
        email: {
            type: DataTypes.STRING(20),
            primaryKey:true,
            unique:true,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        average: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        goal:{
            type: DataTypes.INTEGER,
            allowNull: true
        }
    }, {
        timestamps: false,
    });

    return user;
};