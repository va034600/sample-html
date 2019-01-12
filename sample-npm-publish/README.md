# npm プライベート公開方法

- 参考サイト

https://kazuhira-r.hatenablog.com/entry/20170109/1483972099


## npm認証情報

~/.npmrc に以下を追加

```
email=va034600@gmail.com
always-auth=true
# $ echo -n 'admin:admin123' | openssl base64
_auth=YWRtaW46YWRtaW4xMjM=

registry=http://mlocalhost:8081/repository/my-npm-group-repo/
```

## npm publish

```
$ cd fetch-library
$ npm publish
```

## test

```
$ npm install
$ cd fetch-main
$ node src/index.js
```