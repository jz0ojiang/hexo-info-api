/* hexo-info-api API module */

'use strict';

module.exports = function(hexo) {
    // get latest 5 published posts
    var lposts = hexo.locals.get('posts').data.sort((a, b) => b.date - a.date).slice(0, 5);
    var posts = [];
    lposts.forEach(lpost => {
        var categories = [];
        var tags = [];
        lpost.categories.data.forEach(category => {
            categories.push({name: category.name, _id: category._id});
        });
        lpost.tags.data.forEach(tag => {
            tags.push({name: tag.name, _id: tag._id});
        });
        posts.push({
            title: lpost.title,
            date: lpost.date,
            description: lpost.description?lpost.description:lpost.excerpt,
            categories,
            tags,
            _path: lpost.path,
            _link: lpost.permalink,
            _id: lpost._id,
        });
    });
    var latest5posts = {
        path: "api/getLatest5Posts",
        data: JSON.stringify({
            type: "getLatest5Posts",
            data: posts
        })
    }
    return latest5posts  
}