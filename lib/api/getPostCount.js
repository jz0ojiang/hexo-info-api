/* hexo-info-api API module */

'use strict';

module.exports = function(hexo) {
    return {
        path: 'api/getPostCount/',
        data: JSON.stringify({
            type: "getPostCount",
            data: {
                count: hexo.locals.get('posts').length
            }
        })
    }
}