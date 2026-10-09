# SunnysideWebpage

株式会社Sunnyside のホームページ（静的サイト）です。

## 構成

```
index.html      ページ本体
css/style.css   スタイル
js/main.js      スマホ用メニューなどの動作
images/logo.png ロゴ（白背景。CSSでコーポレートカラー #FFFF72 の上に乗算表示）
```

## 確認方法

`index.html` をブラウザで開くだけで表示できます。

ローカルサーバーで確認する場合:

```sh
python3 -m http.server 8000
# → http://localhost:8000
```

## 公開（GitHub Pages）

- 公開URL：https://sunny-side.tokyo/
- `main` ブランチのルートを GitHub Pages で配信しています（Settings → Pages）
- 独自ドメインは `CNAME` ファイルで指定しています
- DNS はムームードメイン（ムームーDNS）で管理しています。メール（Google Workspace）の MX レコードは消さないでください

## 掲載内容の方針

- 実績は守秘義務のため、作品名・アーティスト名を出さずジャンルのみ記載
- 電話番号・従業員数・主要取引先は非掲載
- トップのイラストは `index.html` 内のインライン SVG（円・四角・線による幾何学の構成）

## 文章を編集するときの注意（日本語の改行）

日本語の文章は、文節の区切りでだけ改行されるように設定しています（`word-break: keep-all`）。
文章を書き換えるときは、改行してよい位置に `<wbr>` を入れてください。

```html
<p>撮影から<wbr>中継配信まで、<wbr>自社スタッフ・<wbr>自社機材で<wbr>お届けします。</p>
```

- `<wbr>` がない部分は、句読点の位置でしか改行されません
- 1つの段落は、HTML上でも改行せずに1行で書いてください（途中で改行すると、文の間に半角スペースが表示されます）
- PC表示のときだけ改行したい位置には `<br class="pc-only">` を使います

## メールアドレスの表記（迷惑メール対策）

HTMLにはメールアドレスを平文で書かず、`js/main.js` で表示時に組み立てています。

```html
<a data-mail-u="ofni" data-mail-d="oykot.edis-ynnus" data-mail-text>info［at］sunny-side.tokyo</a>
```

- `data-mail-u`：`@` より前を**逆順**にしたもの（`info` → `ofni`）
- `data-mail-d`：`@` より後ろを**逆順**にしたもの（`sunny-side.tokyo` → `oykot.edis-ynnus`）
- `data-mail-text` を付けると、要素の文字がアドレスに置き換わります（付けない場合はリンク先だけ設定）
- 要素の中の文字（`info［at］…`）は、JavaScriptが動かない環境での表示です

アドレスを変えるときは、逆順の文字列を次のコマンドで作ると間違えません。

```sh
python3 -c "print('sunny-side.tokyo'[::-1])"
```
