module.exports =(sequelize, DataTypes) => {
    //.define('테이블명',{ 속성명{ 속성값}....}
    return sequelize.define('searchLoc', {
        location: {
            type: DataTypes.STRING(20),
            allowNull: false,

        },  name: {
            type: DataTypes.STRING(50),
            allowNull: false,

        }, lng: {
            type: DataTypes.STRING(30),
            allowNull: false,

        }, lat: {
            type: DataTypes.STRING(30),
            allowNull: false,

        }
    }, {
        timestamps: true,
    });
};