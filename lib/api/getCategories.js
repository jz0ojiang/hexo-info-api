/* hexo-info-api API module */

'use strict';

module.exports = function(hexo) {
    let categories = hexo.locals.get('categories').data;
    return {
        path: 'api/getCategories/',
        data: JSON.stringify({
            type: "getCategories",
            data: {
                categories
            }
        })
    }
}