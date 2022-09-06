/* hexo plugin */

'use strict';

const fs = require('hexo-fs');
const bodyParser = require('body-parser');

hexo.config.hexo_info_api = Object.assign({
    allowOrigin: "",
    enable: [],
    disable_default_api: false,
}, hexo.config.hexo_info_api);

hexo.log.debug(`hexo-info-api: config = ${JSON.stringify(hexo.config.hexo_info_api)}`);

// 设置响应头与跨域
function setHeader(req, res, next){
    res.setHeader('Access-Control-Allow-Origin', hexo.config.hexo_info_api.allowOrigin);
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    next();
}

hexo.extend.filter.register('server_middleware', function(app){
    app.use(hexo.config.root + 'api/', setHeader);
    app.use(hexo.config.root + 'api/', bodyParser.json({
        limit: '50mb'
    }));
}, 1);

// 从 ./lib/api/ 下加载 api
// 只有在 config.hexo_info_api.enable 中的 api 才会被加载
// api 的文件名必须和 api 的名称一致
hexo.config.hexo_info_api.enable.forEach(api => {
    if (fs.existsSync(__dirname + '/lib/api/' + api + '.js')) {
        hexo.extend.generator.register(`api.${api}`, require(`./lib/api/${api}`));
        hexo.log.debug(`hexo-info-api: [${api}] api enabled`);
    } else {
        hexo.log.warn(`hexo-info-api: api [${api}] not found! Please check your config file.`);
    }
});

// 默认接口 返回所有已开启的接口列表
if (!hexo.config.hexo_info_api.disable_default_api) 
    hexo.extend.generator.register("api", require("./lib/api/default"));