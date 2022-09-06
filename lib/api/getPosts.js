/* hexo-info-api API module */

'use strict';

module.exports = function(locals) {
    var posts = [];
    locals.posts.data.forEach(post => {
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
    return {
        path: 'api/getPosts/',
        data: JSON.stringify({
            type: "getPosts",
            data: {
                posts
            }
        })
    }
}