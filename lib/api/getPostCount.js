/* hexo-info-api API module */

module.exports = function(locals) {
    return {
        path: 'api/getPostCount/',
        data: {
            type: "getPostCount",
            data: {
                count: locals.posts.length
            }
        }
    }
}