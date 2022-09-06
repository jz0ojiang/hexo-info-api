/* hexo-info-api API module */

'use strict';

module.exports = function(locals) {
    var categories_of_posts = [
        {
            path: 'api/getPostsByCategory/',
            data: JSON.stringify({
                type: "getPostsByCategory",
                data: {},
                error: "No category name specified."
            })
        }
    ];
    locals.categories.data.forEach(category => {
        // 遍历每个分类 获取分类下所有文章信息
        var posts = [];
        category.posts.data.forEach(post => {
            // 遍历每个文章 获取文章信息
            var categories = [];
            var tags = [];
            post.categories.data.forEach(category => {
                categories.push({name: category.name, _id: category._id});
            });
            post.tags.data.forEach(tag => {
                tags.push({name: tag.name, _id: tag._id});
            });
            posts.push({
                title: post.title,
                date: post.date,
                description: post.description?post.description:post.excerpt,
                categories,
                tags,
                _path: post.path,
                _link: post.permalink,
                _id: post._id,
            });
        });
        categories_of_posts.push({
            path: 'api/getPostsByCategory/'+category.name,
            data: JSON.stringify({
                type: "getPostsByCategory",
                data: posts
            })
        });
    });
    return categories_of_posts;
}