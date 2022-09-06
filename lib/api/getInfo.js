/* hexo-info-api API module */

module.exports = function(locals) {
    return {
        path: 'api/getInfo/',
        data: JSON.stringify({
            type: "getInfo",
            data: {
                title: this.config.title,
                subtitle: this.config.subtitle,
                description: this.config.description,
                author: this.config.author,
                language: this.config.language,
                timezone: this.config.timezone,
                url: this.config.url,
            }
        })
    }
}