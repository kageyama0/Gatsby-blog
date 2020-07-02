---
url: "git_tag"
title: git push のエラーのおかげで git tag の存在を知りました。
author: kageyama
date: "2020-06-10T17:53:03.284Z"
description: "git push origin tag をしたらエラーに遭遇しました。"
tags: ["git","error"]
---

## エラーに遭遇した状況
下記の通りブランチ名をtagにして作業をしていた。
```
 $ git branch
 develop
* tag
```

## やったこと & 遭遇したエラー

```
$ git add -A 
$ git commit -m "comment"  
$ git push origin tag  
fatal: tag shorthand without <tag>
```

コードを描き終えたので、add -> commit -> pushしようとしたらエラーが！
実は、gitには`$ git tag`っていう機能があって、それを使おうとしているのか？と勘違いされてるみたいです。

## 解決方法

tag-functionというブランチを新たに作ってpushした
```
$ git checkout -b tag-function
$ git add -A
$ git commit -m "comment" 
$ git push origin tag-function
```

## 備忘録

`git tag`を今まで知らなかったので、これから使っていこうかなと思い、少し調べたので備忘録を残しておきます。

[>> 詳しいことは公式ドキュメントに書いてます！](https://git-scm.com/book/ja/v2/Git-%E3%81%AE%E5%9F%BA%E6%9C%AC-%E3%82%BF%E3%82%B0)


#### タグ作成

  - 最新のcommitにタグ付け

  ```
  $ git tag <tag-name>
  ```

  - 最新のcommitにタグとコメントを付ける

  ```
  $ git tag -a <tag-name> -m "comment" 
  ```

  - 最新でないcommitにもタグ付けできる。

  ```
  $ git tag -a <tag-name> <commit-hash> -m "message"
  ```

ここだけの話、**コミットID**が何か分からないという方は、下記のコマンドを打ってみてください。

```
git log
```

logの一番上にある文字列がcommit commit idです。

今までやってきたcommitにランダムな文字列が与えれています。

その **コミットID** を指定して、様々な操作が行えます。

#### タグ表示

- タグ一覧表示

```
$ git tag
```

- 特定の文字列を含むタグのみ表示。下記コマンドは *v1.0* を含むタグを表示したい場合

```
$ git tag -l "v1.0"
```

- 最新でないcommitにもタグ付けできる。

```
$ git tag -a <tag-name> <commit-hash> -m "message" 
```

#### タグ削除

```
$ git tag -d <tag-name>
```

#### タグの名前変更

```
$ git tag <new-name> <old-name>
$ git tag -d <old-name>
```

一つのcommitに複数のtagをつけることができるので、古い名前のタグがついているやつに新しい名前をつけてから古いタグを削除すればいいという感じです。

***「まあ一通り操作方法は分かったけど、いつ使うのこれ...」***
![](./images/komaru_man.jpg)

と思いますよね。

僕は思いましたw

公式ドキュメントには、

> 歴史上の重要なポイントに印をつけることができます。
> よくあるのは、この機能を (v 1.0など) リリースポイントとして使うことです。

と書かれてるので、**開発しているサービスにおいて、大きな変更のあったcommitにタグという形で印を付けて、管理しやすくするためのもの**ですね！

最後まで読んでいただきありがとうございました！
ではまた！
