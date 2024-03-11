/* hexo-info-api API module */

'use strict';

module.exports = function(hexo) {
    var categories_of_posts = [
        {
            path: 'api/getPostsByCategoryId/',
            data: JSON.stringify({
                type: "getPostsByCategoryId",
                data: {},
                error: "No category id specified."
            })
        }
    ];
    let categories = hexo.locals.get('categories');
    let posts = hexo.locals.get('posts');
    Object.keys(categories.data).forEach(category => {
        let post_data = [];
        let posts_of_category = posts.data.filter(post => {
            return post.categories.data.length > 0 && post.categories.data[0]._id === category;
        });
        hexo.log.debug(`hexo-info-api: ${categories.data[category].name} has ${posts_of_category.length} posts.`)

        posts_of_category.forEach(post => {
            // 遍历每个文章 获取文章信息
            var categories = [];
            var tags = [];
            post.categories.data.forEach(category => {
                categories.push({name: category.name, _id: category._id});
            });
            post.tags.data.forEach(tag => {
                tags.push({name: tag.name, _id: tag._id});
            });
            post_data.push({
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
            path: 'api/getPostsByCategoryId/'+category,
            data: JSON.stringify({
                type: "getPostsByCategoryId",
                data: post_data
            })
        });
    });
    return categories_of_posts;
}