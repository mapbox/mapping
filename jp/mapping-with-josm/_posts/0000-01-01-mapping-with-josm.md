---
title: Mapping with JOSM
---

このガイドでは、[Java OpenStreetMap editor (JOSM)を使ってマッピング](https://www.mapbox.com/blog/making-the-most-josm/)を始める方法について解説します。JOSMはOpenStreetMapで使われる、パワフルでポピュラーなデスクトップ環境です。もうひとつポピュラーなエディタとして、シンプルで短時間のマッピングによく使われる、ブラウザベースのエディタ[iD](https://www.mapbox.com/blog/new-map-editor-launches-openstreetmap/)があります。この章では、JOSMを使った編集のみを取り扱います。

## OpenStreetMapからのデータダウンロード

編集を始めるには、メニューバーの左側にある緑色の下側矢印をクリックし、編集対象のエリアのデータをOpenStreetMapからダウンロードしてください。

## 衛星写真の使い方

マッピングを行う際には、衛星写真や航空写真を日常的に利用することになります。JOSMには、よく使われる画像としてBingやMapboxレイヤなど、さまざまな画像レイヤがあらかじめ設定されています。BingとMapboxでは、地域ごとに画像の詳細さや鮮明度が異なっており、両方を見比べることは有用です。画像メニューからそれらのうちの1つを選択するだけで準備は完了です。

![](https://s3.amazonaws.com/f.cl.ly/items/0E463a191T1R182t0o09/imagery.gif)

衛星画像を利用する際には、画像のズレ（オフセット）に注意してください。これは衛星画像に対して複雑な処理を行った結果、地表に存在する場所の位置と画像の位置がずれてしまうために発生します。試しに、OpenStreetMapで描かれている既存の地物や地図と、衛星画像やGPSトラックを重ね合わせて比較してみましょう。OpenStreetMapからGPSトラックをダウンロードするには、ダウンロードを行う際のダイアログで "生のGPS"ボックスにチェックを入れてください。もし画像とデータの間にズレが生じていた場合、"画像"メニューの"新規オフセット"項目を選択することで画像の位置を修正することができます。

## データの作成

"ノードを描く"ボタンをクリックし、データ作成モードに移ってください。地図上をクリックすると、その位置にノードが配置され、連続して複数のノードを置くことでウェイが描かれます。ウェイの描画を完了するにはダブルクリックしてください。ノードを1つだけ描きたい場合は、ダブルクリックだけを行ってください。閉じたウェイを描く場合は、最初に描いたノードをもう一度クリックしてください。

![](https://s3.amazonaws.com/f.cl.ly/items/1w3i0p411R2b0s0y1r2R/trace.gif)

## データ修正

"選択"ボタンをクリックすると、既存のノードやウェイを選択することができます。ノードやウェイを移動させるには、一度それらのオブジェクトをクリックし、マウスの左ボタンを押したままドラッグさせてください。ボタンを離した場所にノードやウェイが移動します。

![](https://s3.amazonaws.com/f.cl.ly/items/2r3h0m1E262s3j3M191q/edit.gif)

データを削除する場合、キーボードの`del`キーを押すか、macの場合は `fn+delete`を押してください。

入力を間違えてしまった場合は、`ctrl+Z`あるいはmacなら`command+Z`で最後に行った作業をやり直しできます。

ウェイはお互いに接続することができます。JOSMでは、接着（glue）、引き剥がし（unglue）、分割（split）、結合（combine）と表現します。論理的な接合を行うことは、例えば異なるタイプの道路を接続する場合など、非常に有益な機能です。ウェイを接続せずに編集を行う場合、例えば建物の近くまで道路を描く場合などは、`ctrl`キーを押したままマウスをクリックしてください。

![](https://s3.amazonaws.com/f.cl.ly/items/2p3Y2x461o390V3q1E22/split.gif)

## タグ付け

タグの追加や編集、削除はJOSMサイドバーから行います。なんらかの理由によってパネルが見えなくなっている場合、"ウィンドウ"メニューから表示設定を行ってください。以下の例では、2つのウェイに対して同時にタグを付与しています。複数のオブジェクトを選択するには、Shiftキーを押しながら選択するだけです。

![screenshot from 2014-11-24 16 15 10](https://s3.amazonaws.com/f.cl.ly/items/0C2X2O3I0l2K0X3G2P00/tagging.gif)

**プリセット**とは、オブジェクトに対してよく使われるタグや、複数タグの組み合わせについて定めているものです。利用は"プリセット"メニューから行うことができ、論理的に構成されたカテゴリ構造で整理されています。プリセットを使ってみて、タグパネルに表示される内容がどのように変化するか、確認してみましょう。

![ssasa](https://cloud.githubusercontent.com/assets/1152236/5173525/5bf9022a-73f7-11e4-97b8-89203488adca.png)

** タグのコピー＆ペースト **

オブジェクト間でタグをコピーすることも可能です。まず1つのオブジェクトを選択し、`Ctrl + c`でコピーを行います。次にペースト先のオブジェクトを選択し、 `ctrl + shift + v`で貼り付けます。この操作ではタグ _だけ_ がコピーされます。位置情報はコピーされません。

## OpenStreetMapへのアップロード

データのアップロードを行うには、メニューバーの左側にある上向きの緑矢印をクリックします。アップロードを行おうとすると、自動的に *妥当性検証*が行われます。検証の結果を確認し、アップロードを行う際にはすべてのエラーを解決してください。エラー（赤色）や警告（黄色）が複数検知された場合は、できるだけそれらを修正してからアップロードしましょう。また、アップロードを行う際には **適切な変更セットコメントと、利用した情報源に関する情報を書くようにしましょう。** これにより、他のユーザが後でデータの編集を検討する際に、既存のデータがどのようなデータをもとに編集されたかを知ることができ、たいへん重要な情報となります。

アップロードは数秒で終わり、データは即座にOpenStreetMapに反映されます。キャッシュがクリアされるまでには通常、数分間程度かかります。

![](https://s3.amazonaws.com/f.cl.ly/items/390y0t3A1M2i260F2n0k/upload.gif)

データのアップロードを行うと、あなたのOpenStreetMapプロフィールの"ユーザの編集"から、あなたが行った編集を誰でも閲覧することができるようになります。

![](https://s3.amazonaws.com/f.cl.ly/items/3T141H1W1b1y1m301T0v/Screen%20Shot%202014-12-16%20at%2011.44.27%20AM.png)

## 生産性向上のためのTIPS

### フィルタ

フィルタは非常にパワフルな機能で、利用することによって作業の効率がまったく変わります。[JOSMフィルタドキュメント](https://josm.openstreetmap.de/wiki/Help/Dialog/Filter)と、[フィルタ関するAJ氏のブログ記事](https://www.mapbox.com/blog/2012-08-15-using-filters-josm/)を読むと、フィルタの動作について知ることができます。

以下、編集の際に使い勝手のよいフィルタをいくつか紹介します。

`boundary: | leisure: |  landuse:  | waterway: | amenity: | natural: | building:`

### よく使う道路階層をツールバーに登録

OpenStreetMapの編集では、道路の階層構造の情報を多用します。すべてツールバーに登録しておくとよいでしょう。

   ![screenshot from 2014-11-24 15 59 41](https://cloud.githubusercontent.com/assets/1152236/5173024/fd25da56-73f2-11e4-805f-ff3a321ca15a.png)

### キーボードショートカット

編集を行う際にはショートカットを使うことで作業が非常に速くなります。いくつか練習してみて、ぜひ使ってみてください！ キーボードショートカットは、スクリーンショットのようにメニューの中にいくつか表示されますが、その他、[JOSMウェブサイトにはすべてのキーボードショートカットが一覧化](https://josm.openstreetmap.de/wiki/Shortcuts) ([en español](https://josm.openstreetmap.de/wiki/Es%3AShortcuts))されています。

![screenshot from 2014-11-25 22 25 06](https://cloud.githubusercontent.com/assets/1152236/5195894/23afd078-74f2-11e4-9735-640cefcbfe0c.png)

### プラグイン

JOSMのプラグインを使うことで、マッピングを素早く行うことが可能です。以下は非常によく使われるプラグインです。設定パネルから、すべてのプラグインを参照することができます。

![](https://s3.amazonaws.com/f.cl.ly/items/3Q2T452P2j0H3t2F1h1b/plugins.gif)

**Buildings plugin（建物プラグイン）**

建物のトレースを行う場合は、この building pluginが常に利用されます。このプラグインを利用することにより、`building=yes`がデフォルトで付与された四角形のボックスを、素早く描くことが可能になります。同じ向きを向いている建物を大量に描く場合は、最初に建物を1つ選択し、その状態で建物を描くことで、その建物と並行に描画を行うことができます。

![](https://s3.amazonaws.com/f.cl.ly/items/0Y2T1s0x0M2t3C24363A/buildings.gif)

既存の建物の向きをそろえるには、対象となる複数の建物を選択し、追加でノードを2つ選択した状態で [形状の直行化、キーボードショートカット`Q`](http://josm.openstreetmap.de/wiki/Help/Action/OrthogonalizeShape)を押してください。

![3zpk8nxbdt](https://cloud.githubusercontent.com/assets/126868/6900081/d65cf23c-d721-11e4-82f9-7084b11bb41f.gif)

**turnrestrictions plugin（進行方向制限プラグイン）**

このプラグインを使うことで、例えば"左折禁止"などの[進行方向制限（turn restrictions）](http://wiki.openstreetmap.org/wiki/Relation:restriction)を簡単に追加することが可能になります。

![edit a new turn restriction in layer data layer 1 2015-12-11 17-02-26](https://cloud.githubusercontent.com/assets/369696/11742854/fb630938-a028-11e5-88cf-c03a6e175abf.png)

詳しくはJOSMのヘルプを参照ください - https://josm.openstreetmap.de/wiki/Help/Plugin/TurnRestrictions

**Fast draw plugin（高速描画プラグイン）**

このプラグインでは、森林や湖沼、河川の流域や土地利用や、その他道路などライン状の地物を高速でトレースすることが可能になります。

利用を開始するには `shift + f`を押し、マウスをクリックします。ノードを配置したい場合は、キーボードのスペースバーを押します。フリーハンドで描画を行う場合、スペースバーやマウスのボタンをクリックしたままマウスを動かしてください。

![untitled](https://cloud.githubusercontent.com/assets/126868/8275787/b1ffb342-18bd-11e5-8262-c2fba62b05b9.gif)

最後に作成したノードを削除するには、`backspace`を押します。

フリーハンドモードで自動的に配置されるノードの数を調整するには、上下の夜市汁キーを使います。

描画を完了するにはエンターキーを押し、簡素化モードに移行（地物が黄色に変わります）し、上下の矢印キーを押して簡素化のレベルを調整、もう一度エンターキーを押してウェイの作成を行ってください。

トレースしている間に `Q`を押すことで、"FastDraw"の設定を行うことが可能です。

![fastdraw configuration 2015-12-14 22-55-16](https://cloud.githubusercontent.com/assets/369696/11788197/c9ec99d4-a2b5-11e5-9ab7-9c0c3530d963.png)

*[Video Tutorial](https://www.youtube.com/watch?v=xqDd-Crk3o4)*

**Utilsplugin2**

Utilsplugin2をインストールすることにより、メニューの"他のツール"項目に大量のツールが追加されます。その中で最もよく使われる "交差点にノードを追加" 機能は、現在選択中のウェイの交点に対して素早くノードを追加することができます。

![screenshot from 2014-11-25 17 03 51](https://cloud.githubusercontent.com/assets/1152236/5193091/698be05e-74cb-11e4-8dcb-1a1a228daa07.png)

*[Video Tutorial](https://www.youtube.com/watch?v=F5NsYpKC6G4)*

**Notes（地図メモ）**

Notes （訳：日本語では地図メモ）機能は、閲覧者からの地図に関する質問を受け付ける非常に良い手段です。マッピングを行う際には、その地域に残された地図メモをチェックし、もし逆に、自分がなにか地図の改善について残しておいたほうがよい情報があれば、地図メモとして残しておくようにしましょう。

noteプラグインの有効化

![screenshot from 2014-11-25 16 49 25](https://cloud.githubusercontent.com/assets/1152236/5192168/3f6704c8-74c3-11e4-9c69-d214b95d78cc.png)

地図編集画面のサイドバーとして、表示中の地域の地図メモがリスト表示されるようになります。

![screenshot from 2014-11-25 16 52 11](https://cloud.githubusercontent.com/assets/1152236/5192216/8abfc5f4-74c3-11e4-8a5d-89bce76c7039.png)

### 妥当性検証

JOSMではデータのアップロードを行う際に自動的に妥当性検証が行われますが、それとは別に、パネルから'妥当性検証'ボタンをクリックすることにより、任意のタイミングで検証処理を実行することが可能です。

![](https://s3.amazonaws.com/f.cl.ly/items/2i0I3E3I3m0r3u2F1f2x/validate.gif)

### 描画スタイルの設定

状況によっては、データの表示スタイルを変更することにより、特定の地物の視認性が改善する場合があります。

例えば住所データの作業を行っている場合には、"Address Tags Validator"を使うことができます。

![screenshot from 2014-11-25 15 10 03](https://cloud.githubusercontent.com/assets/1152236/5190603/3fcd89a4-74b5-11e4-8513-62c3747ddb2c.png)

また、現在のセッション中に編集を行ったオブジェクトをわかりやすく表示するには、"Modified objects"を有効化します。

![screenshot from 2014-11-25 15 13 59](https://cloud.githubusercontent.com/assets/1152236/5190658/d136243c-74b5-11e4-9218-092e402179ed.png)

他にもさまざまなスタイルがありますので、作業の内容に合わせて自身が見やすい表示スタイルを試してみてください。

#### データの新鮮さをハイライト表示

[このスタイル](https://raw.githubusercontent.com/Andygol/josm-styles/master/recent%20changes_2016.mapcss)を使うと、2016年に作成された地物がハイライト表示されます。設定方法は以下のとおりです。

![](https://cloud.githubusercontent.com/assets/369696/9634340/e596f890-5199-11e5-8335-55d63a9b11d2.gif)

### 背景画像のカスタマイズ

Tile Map Service (TMS)や、あるいはWeb Map Service (WMS)エンドポイントを追加することにより、背景画像のカスタマイズを行うことが可能です。追加方法は以下のとおりです。

- [Adding a TMS imagery endpoint](https://www.youtube.com/watch?v=JvM0aP3vVr0)
`http://{switch:a,b,c}.tile.thunderforest.com/cycle/{zoom}/{x}/{y}.png`
- [Adding a WMS imagery endpoint](https://www.youtube.com/watch?v=VJqVsV0MXpw) `http://www.geosur.info/arcgis/services/maps/GeoSUR_WMS_hidrografia/MapServer/WMSServer`
 
### 競合の解決

あなたがOpenStreetMapに変更をアップロードし、それと同時に誰かが1つ以上の地物を変更すると、競合が発生します。その場合、OpenStreetMapはあなたがアップロードした変更の適用を拒絶します。以下の手順で競合の解決を行ってください。

1. 競合が発生した区域に対して、OpenStreetMapから新しいデータをダウンロード
2. 妥当性検証を行い、競合の内容をレビュー
3. データの修正を実施
4. 再度アップロードを試行

最終手段として、実施した変更を1つずつアップロードすることも可能です。ただし、その方法は推奨しません。

![screenshot from 2014-11-25 16 43 40](https://cloud.githubusercontent.com/assets/1152236/5192070/3e43555c-74c2-11e4-9c7a-87bb52120ddc.png)

### JOSMのスクリプト化

JOSMにスクリプトを設定し、特定のワークフローを自動化する事もできます。例えば、

- 略称表記の正規化 (US): https://gist.github.com/Rub21/feb83f57a727ac0d8a34
- nameの一文字目を大文字化し、"name=S/N"を削除: https://gist.github.com/Rub21/47838797856566a8b6ba
- 略称表記の正規化 (ペルー): https://gist.github.com/Rub21/cc055320c925c855926e

**[Video](https://www.youtube.com/watch?v=Cpi_5dB1NLQ)**

## 参考文献と質問

より詳しい情報は[JOSM help](https://josm.openstreetmap.de/wiki/Help)を参照してください。

