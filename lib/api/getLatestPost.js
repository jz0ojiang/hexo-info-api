/* hexo-info-api API module */

'use strict';

module.exports = function(hexo) {
    // get latest published post
    var lpost = hexo.locals.get('posts').data.sort((a, b) => b.date - a.date)[0];
    var categories = [];
    var tags = [];
    lpost.categories.data.forEach(category => {
        categories.push({name: category.name, _id: category._id});
    });
    lpost.tags.data.forEach(tag => {
        tags.push({name: tag.name, _id: tag._id});
    });
    var post = {
        path: "api/getLatestPost",
        data: JSON.stringify({
            type: "getLatestPost",
            data: {
                title: lpost.title,
                date: lpost.date,
                description: lpost.description?lpost.description:lpost.excerpt,
                categories,
                tags,
                content: lpost.content,
                _path: lpost.path,
                _link: lpost.permalink,
                _id: lpost._id,
            }
        })
    }
    return post
}