/* hexo-info-api API module */

'use strict';

module.exports = function(locals) {
    var tags_of_posts = [
        {
            path: 'api/getPostsByTag/',
            data: JSON.stringify({
                type: "getPostsByTag",
                data: {},
                error: "No tag name specified."
            })
        }
    ];
    locals.tags.data.forEach(tag => {
        // 遍历每个tag 获取tag下所有文章信息
        var posts = [];
        tag.posts.data.forEach(post => {
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
        tags_of_posts.push({
            path: 'api/getPostsByTag/'+tag.name,
            data: JSON.stringify({
                type: "getPostsByTag",
                data: posts
            })
        });
    });
    return tags_of_posts;
}