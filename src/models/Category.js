/**
 * 
 * @param {import('sequelize').Sequelize} sequelize 
 * @param {import('sequelize').DataTypes} DataTypes 
 */

module.exports = (sequelize, DataTypes) => {
    const CategoryTable = sequelize.define('Category', {
        id: {
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            type: DataTypes.INTEGER,
        },
        name: DataTypes.STRING,
    }, {
        tableName: 'categories',
        underscored: true,
        timestamps: false,
    });

    return CategoryTable;
}