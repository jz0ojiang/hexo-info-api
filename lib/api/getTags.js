/* hexo-info-api API module */

'use strict';

module.exports = function(hexo) {
    let tags = hexo.locals.get('tags').data;
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