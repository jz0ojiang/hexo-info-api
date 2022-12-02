<div align="center">
<h1>Hexo Info Api</h1>
<a href="https://www.npmjs.com/package/hexo-info-api"><img src="https://img.shields.io/npm/v/hexo-info-api"></a>&nbsp;
<a href="https://github.com/0ojixueseno0/hexo-info-api"><img src="https://img.shields.io/github/stars/0ojixueseno0/hexo-info-api?style=social"></a>
</div>

[en](./README.md)

## 安装

```sh
# npm
npm install hexo-info-api --save

# yarn
yarn add hexo-info-api
```

## 配置

向 hexo 的配置文件 _config.yml 中添加以下内容

```yaml
hexo_info_api:
  allowOrigin: "*" # 设置为 "*" 以允许所有源访问 (跨域访问 Access-Control-Allow-Origin)
  enable: # 启用你需要的 api 接口 (只有在这里启用的 api 才会生效)
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
  # 禁用默认 api (host:port/api/) 默认: false
  # 该 api 的作用为返回所有启用的 api 接口
  disable_default_api: false 
```

## 运行 (测试)

```sh
hexo s

#访问 http://localhost:4000/api/ 查看你启用的 api 接口
```

## 返回结果

这是 GET /api/getPostCount 接口的返回结果

```json
{
    "type": "getPostCount",
    "data": {
        "count": 0
    }
}
```

*其他接口对应结构请前往 Github 仓库 wiki [查看](https://github.com/0ojixueseno0/hexo-info-api/wiki)*