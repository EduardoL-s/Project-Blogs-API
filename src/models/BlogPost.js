/**
 * 
 * @param {import('sequelize').Sequelize} sequelize 
 * @param {import('sequelize').DataTypes} DataTypes 
 */

module.exports = (sequelize, DataTypes) => {
    const BlogPostTable = sequelize.define('BlogPost', {
        id: {
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            type: DataTypes.INTEGER,
        },
        title: DataTypes.STRING,
        content: DataTypes.STRING,
        userId: {
            allowNull: false,
            type: DataTypes.INTEGER,
        },
        published: DataTypes.DATE,
        updated: DataTypes.DATE,
    }, {
        tableName: 'blog_posts',
        underscored: true,
        timestamps: false,
    });

    BlogPostTable.associate = (models) => {
        BlogPostTable.belongsTo(models.User, {
            foreignKey: 'userId',
            as: 'user'
        })
    };

    return BlogPostTable;
}