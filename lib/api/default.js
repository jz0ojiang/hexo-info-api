/* hexo-info-api API module */

module.exports = function(locals) {
    return {
        path: 'api/',
        data: JSON.stringify({
            type: "apiInfo",
            data: {
                enabled: this.config.hexo_info_api.enable
            }
        })
    }
}