/* hexo-info-api API module */

module.exports = function(locals) {
    return {
        path: 'api/getPostCount/',
        data: JSON.stringify({
            type: "getPostCount",
            data: {
                count: locals.posts.length
            }
        })
    }
}