const bodyParser = require('body-parser');

const defaultConfig = {
    "allowOrigin": "",
    "enableGetPostCount": true,
    "enableGetInfo": true
}

const config = hexo.config.hexo_info_api == null ? defaultConfig : hexo.config.hexo_info_api

var api = {  
    getPostCount: {
        type: "getPostCount",
        data: {
            count: hexo.locals.get('posts').length
        }
    },
    getInfo: {
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
    }
}

// hexo.extend.filter.register('before_generate', function(){
//     console.log("hexo-info-api: prepareing api data...")
// })

function setHeader(req, res, next){
    res.setHeader('Access-Control-Allow-Origin', config.allowOrigin);
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    // res.writeHead(200, {'Content-Type': 'application/json; charset=utf-8'});
    next();
}

hexo.extend.filter.register('server_middleware', function(app){
    app.use(hexo.config.root + 'api/', setHeader);
    app.use(hexo.config.root + 'api/', bodyParser.json({
        limit: '50mb'
    }));
    
  }, 1);

// hexo.extend.filter.register('server_middleware', function(app){
//     app.use(hexo.config.root + 'api/', function(req, res, next){
//         res.setHeader('Content-Type', 'application/json; charset=utf-8');
//         next();
//     });
// })

hexo.extend.generator.register('api', function(locals){
    // Array
    // hexo.theme.setView('api.ejs', layout);
    return [
        {
            path: 'api/getPostCount/',
            data: JSON.stringify(api.getPostCount).replace(/[\u007F-\uFFFF]/g, function(chr) {
                return "\\u" + ("0000" + chr.charCodeAt(0).toString(16)).substr(-4)
            })
        },
        {
            path: 'api/getInfo/',
            // data: JSON.stringify(api.getInfo)
            data: JSON.stringify(api.getInfo).replace(/[\u007F-\uFFFF]/g, function(chr) {
                return "\\u" + ("0000" + chr.charCodeAt(0).toString(16)).substr(-4)
            })
        }
    ];
  }); 