/* hexo-info-api API module */

'use strict';

module.exports = function(hexo) {
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
    let tags = hexo.locals.get('tags');
    let posts = hexo.locals.get('posts');
    Object.keys(tags.data).forEach(tag => {
        let post_data = [];
        let posts_of_tag = posts.data.filter(post => {
            return post.tags.data.length > 0 && post.tags.data[0]._id === tag;
        });
        hexo.log.debug(`hexo-info-api: ${tags.data[tag].name} has ${posts_of_tag.length} posts.`)

        posts_of_tag.forEach(post => {
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
        tags_of_posts.push({
            path: 'api/getPostsByTag/'+tags.data[tag].name,
            data: JSON.stringify({
                type: "getPostsByTag",
                data: post_data
            })
        });
    });
    return tags_of_posts;
}