module.exports =(sequelize, DataTypes) => {
    //.define('테이블명',{ 속성명{ 속성값}....}
    return sequelize.define('gamelist', {
        score: {
            type: DataTypes.INTEGER ,
            allowNull: false,
        },  name: {
            type: DataTypes.STRING(20),
            allowNull: false,
        }
    }, {
        timestamps: true,
    });
};