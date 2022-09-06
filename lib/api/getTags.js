/* hexo-info-api API module */

'use strict';

module.exports = function(locals) {
    var tags = [];
    locals.tags.data.forEach(tag => {
        tags.push({name: tag.name, _id: tag._id});
    });
    return {
        path: 'api/getTags/',
        data: JSON.stringify({
            type: "getTags",
            data: {
                tags
            }
        })
    }
}