---
title: Getting started
---

[OpenStreetMap編集を始める](https://www.mapbox.com/blog/making-the-most-josm/)ために、まずは編集に必要となるツールと環境を整えましょう。

## OpenStreetMapアカウントの設定Setting up an OpenStreetMap Account

1. OpenStreetMap.orgを表示し、アカウントを作成: [https://www.openstreetmap.org/user/new](https://www.openstreetmap.org/user/new)
2. **重要** プロフィール画面に写真を登録
3. 以下を参考に、プロフィール文章を作成

### Profile description　プロフィールの書き方

以下の情報が含まれると有用です。

- マッピングに興味があるエリア
- 他のユーザからの連絡を受け入れることを示すナイスな一言
- ホームページやTwitterなど、他のユーザがあなたのことを知るために手掛かりとなるリンク

* (記載は[Markdown](http://en.wikipedia.org/wiki/Markdown)形式で行います)*

以下は良いプロフィールの一例です。

![osm-profile-description-example]({{site.baseurl}}/images/osm-profile-description-example.png)

## JOSMのインストール

ここでは多くのタスクをJava OpenStreetMap Editor (JOSM)を使って行います。以下の手順でセットアップしてください。

**1. JREのダウンロードとインストール**

JOSMはJava Runtime Environment - JREを必要とします。[JREのダウンロードとインストール]( http://www.oracle.com/technetwork/java/javase/downloads/jre8-downloads-2133155.html)を行います。

**2. JOSMのダウンロード**

[JOSMのウェブサイト](https://josm.openstreetmap.de/wiki/Download)を表示し、 `テスト済み`バージョンをダウンロードしてください。利用中のOS環境に合わせて、アプリケーションの配置場所としてよく使われる場所に移動させてください。

- OSX: `/Applications/`
- Windows: `C:\Program Files\`

**3. JOSMを起動**

ダウンロードしたJOSMアプリケーションをダブルクリックすると起動します。

JOSMへのメモリ割り当てを多くする場合、[Linux環境](http://wiki.openstreetmap.org/wiki/JOSM/Linux)であれば以下のコマンドでも起動可能です

    ~$ java -Xmx1024M -DproxyHost=$PROXY -DproxyPort=8080 -jar josm-tested.jar

JOSMが起動すると、以下のような画面が表示されます。**設定/Preference**ダイアログを選択し、次のステップに進んでください。ダイアログは証明スイッチの形をしたアイコンの下にあります。

![josm-preferences]({{site.baseurl}}/images/josm-preferences.png)

**4. 上級者モードの有効化**

**設定**ダイアログを開き、 **上級者モード**を有効化します。

![check-expert-mode]({{site.baseurl}}/images/check-expert-mode.png)

**5. ユーザ名とパスワードの設定**

OpenStreetMapへの接続を行います。あなたがOpenStreetMapで取得したユーザ名とパスワードをJOSMに入力します。

![set-osm-username-and-password]({{site.baseurl}}/images/set-osm-username-and-password.png)

これでOpenStreetMapからデータをダウンロードすることができるようになりました。画面左上の緑色の矢印ボタンをクリックするとダウンロードを行うことができます。

![download-data]({{site.baseurl}}/images/download-data.gif)

**6. 遠隔コントロールの有効化**

遠隔コントロールを有効化することで、OpenStreetMap.orgの地図表示からJOSMを直接起動することができるようになります。遠隔コントロールを有効化するには、設定にある以下のボックスをチェックしてください。

![enable-remote-control]({{site.baseurl}}/images/enable-remote-control.png)

その際、**オブジェクトを新規レイヤーでダウンロードする**のオプションもチェックしておきましょう。これでOpenStreetMap.orgから直接データをダウンロードし、編集作業を開始する準備が整ったはずです。

![retrieve-data]({{site.baseurl}}/images/retrieve-data.gif)

**7. JOSMの割り当てメモリを追加**

JOSMはOS環境により、デフォルトで247～1024MBのメモリを割り当てる設定になっています。JOSMがメモリの利用可能上限に近づくと、以下のポップアップとともに `JOSMのメモリ不足`エラーが表示されます。

![increasing memory]({{site.baseurl}}/images/increasing-memory.png)

このエラーを回避するには、[こちらの手順](https://gist.github.com/jothirnadh/00352fff58ce2628cc4f#supply-parameters)に従い、JOSMへのメモリ割り当てを増やしてください。やりかたがよくわからない場合は、Mapboxのデータチームの誰かに問い合わせてください。

## ゲーミングマウスの利用

ゲーミングマウスを使い、よく使うマッピング動作のショートカットを登録しておくことで、作業効率が向上します。この項目では、JOSMでゲーミングマウスを使うための基本的な設定の概要を解説します。

**システム:** Linux and Mac

**利用するマウス:** Razer Gaming mouse

**全般的なガイドライン:** Macの場合、`システム設定 > マウス`からマウスの速度を早くする

**機能の例**

**建物**

**ゲーミングマウスとキーボードの設定**

1. Razer Naga config softwareをインストール: https://www.razerzone.com/synapse/
2. razer IDでアカウント作成: https://razer-id.razerzone.com/new
3. メールアドレスを使ってプロファイルを作成
4. マウスを設定: 

**建物を描く際にゲーミングマウスに設定しておくとよいショートカット**: Enter, Extrude (`X`), building tracing (`B`), OSMのデータアップロードとダウンロード (JOSMのデフォルトキーボードショートカットを利用).

**登録推奨**: Join and merge nodes/ways (`J` and `M`), select overlapping ways (`I`), join overlapping areas (`Shift + J`), Split objects (`Alt + X`)

**注意事項**: マウスの設定例:

**左利き (キーボードショートカット設定)**:

   * Upload

   * Select

   * Orthogonalize 

   * Rotate

**右利き (マウスへのショートカット設定)**:

   * Enter

   * X

   * B

   * Merge two nodes(M)

   * Join node to way (N)

   * Select intersecting ways (I)
   
   * Join overlapping ways (shift+J)
   
　マッパーの好みに応じて他のショートカットも設定ください。

**注意事項**: 道路の修正や、to fixを使ったタスク作業を行う場合、それらの地物に対応したショートカット・プロファイルを別途設定しておくことを推奨
