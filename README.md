<div align="center">
<h1>Hexo Info Api</h1>
<a href="https://www.npmjs.com/package/hexo-info-api"><img src="https://img.shields.io/npm/v/hexo-info-api"></a>&nbsp;
<a href="https://github.com/0ojixueseno0/hexo-info-api"><img src="https://img.shields.io/github/stars/0ojixueseno0/hexo-info-api?style=social"></a>
</div>

[中文文档](./README_zh.md)

## Install

```sh
# npm
npm install hexo-info-api --save

# yarn
yarn add hexo-info-api
```

## Config

add the following to _config.yml

```yaml
hexo_info_api:
  allowOrigin: "*" # Set to "*" to allow all origins (Access-Control-Allow-Origin)
  enable: # enable what api u need
  - getInfo
  - getPostCount
  - getPosts
  - getPostsByCategory
  - getPostsByCategoryId
  - getPostsByTag
  - getPostsByTagId
  - getPostByPath
  - getPostById
  - getCategories
  - getTags
  - getLatestPost
  - getLatest5Posts
  # Disable default api(host:port/api/) default: false
  disable_default_api: false 
```

## Run (Test)

```sh
hexo s

#Open http://localhost:4000/api/ to see what api u enabled
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

*Other api response is similar to this.*

*You can see all the api in [hexo-info-api wiki](https://github.com/0ojixueseno0/hexo-info-api/wiki)*