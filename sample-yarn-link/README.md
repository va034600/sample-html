# yarn link

- 参考サイト

https://kazuhira-r.hatenablog.com/entry/20170109/1483972099


## npm認証情報

~/.npmrc に以下を追加

```
email=va034600@gmail.com
always-auth=true
# $ echo -n 'admin:admin123' | openssl base64
_auth=YWRtaW46YWRtaW4xMjM=

registry=http://localhost:9998/repository/my-npm-group-repo/
```

## yarn publish

```
$ cd yarn-fetch-library
$ yarn publish
```

## yarn install

```
$ yarn install
```

## yarn-fetch-library/src/index.js 修正

```
# 4 を追加
_.each([1, 2, 3, 4], console.log);
```

## test1

```
$ cd yarn-fetch-main
$ node src/index.js
```

console.logから反映されないこと確認


## yarn link

```
$ cd yarn-fetch-library
$ yarn link
```

```
$ cd yarn-fetch-main
$ yarn link @va034600/yarn-fetch-library
```

## test2

```
$ cd yarn-fetch-main
$ node src/index.js
```

console.logから反映されていること確認
