<div align="center">
<h1>Hexo Info Api</h1>
<a href="https://www.npmjs.com/package/hexo-info-api"><img src="https://img.shields.io/npm/v/hexo-info-api"></a>&nbsp;
<a href="https://github.com/0ojixueseno0/hexo-info-api"><img src="https://img.shields.io/github/stars/0ojixueseno0/hexo-info-api?style=social"></a>
</div>

## Install

```sh
npm install hexo-info-api --save
```

## Config

add the following to _config.yml

```yaml
hexo_info_api:
  allowOrigin: "*" # Set to "*" to allow all origins (Access-Control-Allow-Origin)
  enableGetPostCount: true # Set to false to disable the GET /api/getPostCount endpoint
  enableGetInfo: true # Set to false to disable the GET /api/getInfo endpoint
```

## Run (Test)

```sh
hexo server

#Open http://localhost:4000/api/getPostCount or http://localhost:4000/api/getInfo
```

## Result

This is the result of the GET /api/getPostCount endpoint.

```json
{
    "type": "getPostCount",
    "data": {
        "count": 0
    }
}
```

This is the result of the GET /api/getInfo endpoint

*(Test on my blog)*

```json
{
    "type": "getInfo",
    "data": {
        "title": "Hello! I'm 0o\u9171",
        "subtitle": "Our world is worth fighting for.",
        "description": null,
        "author": " 0o\u9171",
        "language": "zh-CN",
        "timezone": "Asia/Shanghai",
        "url": "https://blog.im0o.top"
    }
}
```