module.exports =(sequelize, DataTypes) => {
    //.define('테이블명',{ 속성명{ 속성값}....}
    var chatlist= sequelize.define('chatlist', {
        msg: {
            type: DataTypes.STRING(100) ,
            allowNull: false
        },
            name: {
                type: DataTypes.STRING(20),
                allowNull: false,

            },
    },
    {
        timestamps: true,
    });




    return chatlist;
};