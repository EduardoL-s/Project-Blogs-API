/**
 * 
 * @param {import('sequelize').Sequelize} sequelize 
 * @param {import('sequelize').DataTypes} DataTypes 
 */

module.exports = (sequelize, DataTypes) => {
    const PostCategoryTable = sequelize.define('PostCategory', {
        postId: {
            allowNull: false,
            primaryKey: true,
            type: DataTypes.INTEGER,
        },
        categoryId: {
            allowNull: false,
            primaryKey: true,
            type: DataTypes.INTEGER,
        },
    }, {
        tableName: 'posts_categories',
        underscored: true,
        timestamps: false,
    });

    PostCategoryTable.associate = ({ BlogPost, Category }) => {
        BlogPost.belongsToMany(Category, {
            as: 'categories',
            through: PostCategoryTable,
            foreignKey: 'postId',
            otherKey: 'categoryId',
        })

        Category.belongsToMany(BlogPost, {
            as: 'blog_posts',
            through: PostCategoryTable,
            foreignKey: 'categoryId',
            otherKey: 'postId'
        })
    };

    return PostCategoryTable;
}