/* hexo-info-api API module */

module.exports = function(hexo) {
    return {
        path: 'api/getInfo/',
        data: JSON.stringify({
            type: "getInfo",
            data: {
                title: hexo.config.title,
                subtitle: hexo.config.subtitle,
                description: hexo.config.description,
                author: hexo.config.author,
                language: hexo.config.language,
                timezone: hexo.config.timezone,
                url: hexo.config.url,
            }
        })
    }
}