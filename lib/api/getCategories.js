/* hexo-info-api API module */

'use strict';

module.exports = function(locals) {
    var categories = [];
    locals.categories.data.forEach(category => {
        categories.push({name: category.name, _id: category._id});
    });
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