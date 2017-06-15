---
title: Validating OpenStreetMap Data
---

Mapboxでは地図データを作成するだけではなく、OpenStreetMapへのデータ入力品質のデータチェックも実施しています。以下は私たちが行っている作業ガイドです - 害のある可能性が高い変更の検知から、最終的に地図データの修正までを対象としています。

## 問題のある編集とは何か

OpenStreetMapに加えられる変更は全て、[変更セット](http://wiki.openstreetmap.org/wiki/Changeset)にまとめられています。変更セットには、マッパーによって行われるデータの追加（新規地物）や、変更（タグの修正、地物の位置変更、参照される地物の位置など）、あるいはデータ削除などが含まれます。

OpenStreetMapのデータを利用していると、誰か他のマッパーが間違った地物やタグを追加したり、大量のデータ削除を行ったり、特定のタグを含んだデータのインポートが行われていたりする場面に遭遇することがありあｍす。OpenStreetMapデータの品質を損なうこれらのデータ変更は、問題のある編集として扱われます。

問題のある可能性が高い変更にはいくつかの種類があります。例えば、

* プロプライエタリなデータ（例えばGoogle Maps）のデータを使って、OpenStreetMapへのデータ追加が行われている
* `place`や`boundary`、`highway`といった主要なタグの変更
* ドキュメント化されていないインポート
* 非常に古い衛星写真を利用した変更
* ウェイを構成するノードを意図せず引っ張ってしまい、結果として位置情報を変更

地物の作成や削除、タグの変更、ノードの位置の変更などは、`バージョン`が増えることにつながります。あらゆるユーザのすべての変更は、OpenStreetMapデータベースのオブジェクトの個別バージョンとして保持されます。ウェイに所属するノードの変更、あるいはリレーションのメンバー変更は、ウェイやリレーションの変更として表示されますが、`バージョン`の増加は*行われません*。

## 問題のある修正の発見

 * **OSMCha**: 変更セットレベルの通知と、その変更セット内で影響が発生したオブジェクトの一覧。コメント内の疑わしい単語は自動的に疑わしい対象としてフラグ付けを実施。変更セットコメントや、利用している情報源、その他の内容などを使って疑わしい変更を発見できるよう、カスタマイズ可能なフィルタを設定可能。より詳しい情報については[using OSMCha to identify and inspect OpenStreetMap data.](#finding-suspicious-map-edits-using-osmcha)を参照のこと。
 * **Linting**
 * **Mapbox利用者からの地図フィードバック**: Mapboxユーザが地図上の変更点をレポートした場所に、[Map feedback](https://www.mapbox.com/map-feedback/)経由で私たちに通知が行われる。
 * **OSMのコミュニケーションチャンネル経由**

## 調査

地図上に発生した疑わしい可能性が高いデータを発見した後、いくつかの処理を行います

* *ユーザ*が返答するかどうか
* 彼らが編集作業を行った*時間*
* *変更セットID*の特定
* *編集された地物*

これらの情報は変更内容の調査に役に立つとともに、変更のタイプや原因の特定に有用です。ニューヨーク市で道路が間違って編集された例をみてみましょう。

![screenshot 2016-04-14 12 56 09](https://cloud.githubusercontent.com/assets/3423533/14520241/0c277554-0241-11e6-8695-7a76c9cd0683.png)

### 編集内容の分析

1. `JOSM`で対象のエリアを開く
2. 問題のある地物を選択し、`Ctrl+H`を押して編集されたオブジェクトの履歴を確認
3. 選択した地に対して行われた変更と実施したユーザが履歴ウィンドウに表示される。選択したオブジェクトの種別（ノード、ウェイ、リレーション）によって表示内容は異なる。左側のパネルにはオブジェクトのバージョンや変更日時、変更を行ったユーザが表示される。
  - 履歴ウィンドウの`タグ`タブには、バージョンごとに行われたタグの変更履歴が表示される
  - 履歴ウィンドウの`ノード`タブには、バージョンごとに行われた、ウェイを構成するノードの増減や変更履歴が表示される
  - 履歴ウィンドウの`緯度経度`タブには、オブジェクトが大幅に移動されていた場合に、その移動距離が表示される

![history](https://cloud.githubusercontent.com/assets/3423533/15171329/52dca16a-176b-11e6-8b78-ce3220c62d40.png)

*JOSM履歴ウィンドウ*

この例では、あるノードが大幅に移動させられています。JOSM履歴ウィンドウを参照すると、実施したユーザは`osm_user_name`、変更セットは`38544431`、日付は`04/14/2016`であることがわかります。

### マッパーを理解する

The mapper's OSM user profile and [HDYC](http://hdyc.neis-one.org) profile gives an overview of the user's activity and reputation. New mappers are more likely to make unintentional changes; though sometimes a new user account is used for intentional edits that break the map. Experienced mappers might have more detailed, trustworthy knowledge of an area, or sometimes a history of bad edits.

マッパーのOSMユーザプロフィール、および[HDYC](http://hdyc.neis-one.org)のプロフィールを参照することで、ユーザの活動内容と評価を知ることができます。新規マッパーは意図しない間違い編集を行ってしまいがちで、その結果、そのユーザが気が付かないうちに地図データを壊してしまうことがあります。経験豊かなマッパーは、より詳しい記述や、地域に対して信頼できる知識を持っていることがありますが、間違い編集の履歴もあることでしょう。

JOSM履歴ウィンドウのOSMユーザ名をクリックすると、OSMユーザページが表示され、そのユーザの`編集`履歴や、`主な活動範囲`、ユーザのその他活動、そして`日記`エントリを確認する事が可能です。

また、そのマッパーの経験量は、[HDYC](http://hdyc.neis-one.org/)から、プロジェクト参加日や、マッパーのタイプなどを元に推測することもできます。

![hdyc](https://cloud.githubusercontent.com/assets/3423533/15170921/ee9fbe6a-1767-11e6-8601-e74f7891a88f.png)

### 変更セットの精査

JOSM履歴ウィンドウの変更セットIDをクリックすると、OpenStreetMapの変更セットページが表示され、追加や変更、削除となったオブジェクトの総数など、詳細情報が表示されます。その際、変更セットコメントも表示され、利用したエディタや情報源など、ユーザ自身が申告した内容詳細を表示させることも可能です。

OpenStreetMapの変更セットページでは、当該の変更セットの中でユーザによって修正が行われたオブジェクトが一覧化されています。しかし、変更されたオブジェクトの詳細について、詳しい情報までは記載されません。

![screenshot 2016-04-14 17 35 26](https://cloud.githubusercontent.com/assets/3423533/14527442/b721eacc-0267-11e6-9fe4-807e6271ccf4.png)

[Changeset Map](http://osmlab.github.io/changeset-map/)では変更セットの内容を簡単に確認することができます。Changeset Mapは、特定の変更セットによってOpenStreetMapに対して行われたすべての地物を可視化して表示することができます。

- 変更セットのIDをChangeset Mapに入力することで、その変更セットで行われた変更を表示することができます。

  `Example`: <http://osmlab.github.io/changeset-map/#38544431>

- Changeset Mapで、当該の変更セットで行われた地物の追加/変更/削除や修正箇所が表示されます。編集箇所を探して、問題のある変更が行われたオブジェクトを特定します。

![vali](https://cloud.githubusercontent.com/assets/3423533/14984377/f28d4942-115f-11e6-9c28-956faab784a3.gif)

## 対応

この時点で、あなたは問題のある変更がどの変更セットに含まれ、誰によって、いつ行われたのかを知ることができます。

最もよくない編集は偶発的であり、そうした変更に対する一般的な対応方法はユーザへの教育です。失敗してしまったマッパーに対して知っていることを共有し、将来において同じ失敗を繰り返さない方法を教えましょう。全員に対して公開されている変更セットコメントへフィードバックを送るか、あるいは直接的なコンタクトのほうがより好ましい場合は、直接メッセージを送ってみましょう。こうすることで、コミュニティが構成され、地図に対する将来の貢献の品質を改善することにつながります。

もし万が一、マッパーの編集意図が地図に対してダメージを与えるものである場合、変更の巻き戻しや、OSM管理者あるいはデータワーキンググループへの問題報告といった緊急の対応が必要な場合もあります。


### コミュニケーション

* 変更セットに対し、その編集で間違っている点や修正方法についてコメントを残してください。必要に応じて、OpenStreetMap Wikiへのリンクや、編集の参考になる文章へのリンクを貼ります。
* もし一週間程度ユーザからの反応が無かったり、緊急ではない問題である場合は、その近隣を編集しているアクティブなマッパーに対して注意喚起を行います。
* 加えて、その地域のメーリングリストや地域フォーラム、IRCなどに対して協力を打診します。


### 修復

* 特定の種類の悪意ある編集に対しては、問題の修正を検討（および即座の報告）します
* その変更セット全体が完全に不正確である場合、巻き戻し（リバート）を行います。対象のマッパーに対してメッセージを送付し、何が起きたのかについて説明を求めてください。
* 単純な問題の場合、対象のマッパーと連絡を取り、どのように修正を行うかについて議論を行います。

#### JOSMプラグインを使った巻き戻し

JOSMの[Reverter Plugin](http://wiki.openstreetmap.org/wiki/JOSM/Plugins/Reverter)を使うことで、OpenStreetMapの変更を簡単に巻き戻すことが可能です。リバートを行った後は、その変更セットを何故巻き戻したのか、変更セットに対して理由を説明するコメントを残すようにします。

Reverting changesets can be tricky, and you can unintentionally break things yourself. Attempt to revert a changeset if you are 100% sure that the changeset is bad and if something goes wrong -- you should be able to fix it.

変更セットの巻き戻しは複雑な作業であり、気が付かないうちに自分自身でデータを破壊してしまうことがあります。巻き戻し対象の変更セットが100％完全に間違いであったり、なにかよくないことが進行中でその修正をあなたが修正しなくてはならない場合にのみ、巻き戻し作業を行うようにしてください

![revert](https://cloud.githubusercontent.com/assets/3423533/14527229/25b55a52-0266-11e6-847d-b9601f8fae8d.gif)

*revert pluginの利用*

### 報告

* 緊急の課題で、なおかつ熟練者による作業が必要な場合は、[データワーキンググループ/Data Working Group](http://wiki.openstreetmap.org/wiki/Data_working_group)にコンタクトを取ります。

### 対応の緊急度基準

OpenStreetMapに対して行われた変更の深刻度によって、対応のレベルは変動します。緊急であるかどうかはある意味主観的なものですが、ある程度のガイドラインはあります。

1. 以下のような主要な地物に対する変更は、即座に修復が必要なケース
  - 主要な境界線
  - 道路の接続
  - 道路の種別
  - 道路に対する間違った位置修正（NYCの例を参照）
  - 破壊されたマルチポリゴン（水域など）であり、行政界データに影響をあたえる場合
  - ランドマーク

2. 重要ではあるが致命的とはいえず、即座にコミュニケーションをとり、ユーザからの反応がない場合にのみ修復作業を実施するケース
  - 森林など、土地利用に関する地物
  - 建物
  - 河川流域

3. もしマッパーがGoogle MapsやBing Maps（訳注：Bing航空写真ではなくBing Mapsそのもの）、Here Mapsやその他、オープンなライセンスではないプロプライエタリのデータを参照して作業を行っている場合、ユーザの変更セットに対してコメントを行い、[OpenStreetMapの著作権ガイド](http://www.openstreetmap.org/copyright)についての言及を行ってください。また、対象のデータについての巻き戻しを喚起し、地域調査による編集あるいはBingやMapbox Satelliteなど利用が許可された画像を活用することを勧めます。

## よくあるシナリオ

以下、OpenStreetMapで間違った編集を見つけた際のよくあるシナリオをいくつか例示します。

#### 初心者マッパーによる間違い編集

OpenStreetMapの新規ユーザによる編集はいつでも大歓迎です！ 初心者が編集方法を学ぶ過程の中で、境界線や重要な地名タグ、道路、リレーションといった主要な地物を間違って変更/削除してしまい、結果としてデータを破壊してしまうことがあります。そのようなケースでは、ユーザへの教育を行って正しく彼らを導き、マッピングを行う際のインストラクションを提供して、彼ら自身で間違った編集を修正できるようになるようにすることが重要です。もし間違いが申告な場合、即座に巻き戻しを行います。

#### Humanitarian OpenStreetMap Team (HOT, OpenStreetMap人道支援チーム)のプロジェクト

HOT活動には多くのOpenStreetMap初心者マッパーが参加します。HOTでは独自の画像が使われることがあり、それらが使われているかどうか、変更セットのレビューが必須です。もしデータが航空写真やそれらのプロジェクト独自画像とかけ離れた内容であったり、品質に問題がある場合には、ユーザの変更セットに対してコメントを行い、彼らの編集作業の質とマッピングスキルの向上に協力してください。

#### 意図的な間違い編集

数は少ないのですが、OpenStreetMapに対して意図的に間違ったデータが追加されることがあり、そうしたデータは即座に巻き戻しが必要となります。
一例を以下に挙げます。この例では、町や建物、歩道に対して、マッパーの名字が意図的に追加されています。

![screenshot 2016-05-03 18 47 00](https://cloud.githubusercontent.com/assets/3423533/14984342/d96fe7ee-115f-11e6-9af5-28ac515d9b28.png)

#### ドキュメント化されていないインポート

OpenStreetMapには、オープンなデータセットをインポートすることが可能です。インポートを行う際には[インポートガイドライン](http://wiki.openstreetmap.org/wiki/Import_guidelines)に沿って実施する必要があり、[インポートカタログ](http://wiki.openstreetmap.org/wiki/Import/Catalogue)に対する適切なドキュメンテーションや、インポート専用のアカウント作成などが必要です。もしあなたがドキュメンテーションされていないインポートを発見した場合、詳細なドキュメンテーションを行うよう、変更セットのコメントを通じてリクエストしてください。

#### 自動編集

OpenStreetMapへの自動的な編集作業は、botやアルゴリズムによるインポートなど、人間による関与が少ない編集作業のことを指します。

## OSMChaを利用した疑わしい地図編集の発見

**[OSM Changeset Analyzer](http://osmcha.mapbox.com/)**あるいはOSMChaは、[changeset metadata](https://www.openstreetmap.org/api/0.6/changeset/41775489/download)を利用して、OpenStreetMapの変更セットをフィルタし、分析するためのツールです。このツールは地図に行われた変更セットをすべて即時にリストアップし、疑わしい可能性が高い編集へのフラグ付けや、さまざまな観点から成るフィルタを活用して特定の評価基準にマッチする変更セットの抽出を行うことが可能です。

![screenshot 2016-09-06 16 00 06](https://cloud.githubusercontent.com/assets/8921295/18270541/0de8330c-744b-11e6-8582-7e49d6acec9d.png)
_Latest changesets listed in OSMCha_

変更セットは、そのIDや編集日時、OSMユーザを表示し、さらに、オブジェクトの作成を緑色、変更を黄色、削除を赤色として一覧化、さらにもし変更セットが特定の動き方をしており、なおかつレビューが行われていない場合、その内容が☓印と一緒に表示されます。

### 変更セットのフィルタリング

OSMChaではフィルタを利用することができ、問題のある編集を発見するためにさまざまな観点から検索する機能をもっています。

![screenshot 2016-08-30 16 37 31](https://cloud.githubusercontent.com/assets/8921295/18086930/1a28da0c-6ed0-11e6-8eed-5a0b7ee6cf72.png)
_OSMCha filter dialog_

OSMChaは、その変更セットで実施された内容によって、`Mass creations（大量削除）` や `Possible import（インポートの可能性）`などのように、変更セットに対して自動的にタグを付与します。

![screenshot 2016-08-30 16 48 17](https://cloud.githubusercontent.com/assets/8921295/18087208/932c74c6-6ed1-11e6-8176-d6a1a6bb9f93.png)<br>
_Filter based on automatic flagging_

### 変更セットの品質査定

OSMChaでは、タグの変更や地物の追加、変更、削除などを[Changeset map](https://github.com/osmlab/changeset-map/)を使って可視化しています。これにより、明らかな編集ミスなどの品質チェックを簡単に行うことができます。

<img width="408" alt="screenshot 2016-08-22 15 16 17" src="https://cloud.githubusercontent.com/assets/126868/17850564/66919236-687b-11e6-8fe7-85a5605ec04f.png"><br>
_A [changeset](http://osmlab.github.io/changeset-map/#41576998/way/24464264) showing an object that incorrectly made into a circle_

### 疑わしい変更の発見作業フロー

#### 疑わしい編集の傾向

作業に不慣れなユーザ、削除、インポート：

- [Maps.meエディタを使った編集](http://osmcha.mapbox.com/?editor__icontains=Maps.Me&is_suspect=False&is_whitelisted=True&harmful=False&checked=False)
- [オブジェクト大量削除](http://osmcha.mapbox.com/?is_suspect=False&is_whitelisted=True&harmful=False&checked=False&reasons=3)
- [iDエディタによる大量削除](http://osmcha.mapbox.com/?editor__icontains=iD&is_suspect=False&is_whitelisted=True&harmful=False&checked=False&reasons=3)
- [iDエディタによる大量編集](http://osmcha.mapbox.com/?editor__icontains=iD&is_suspect=False&is_whitelisted=True&harmful=False&checked=False&reasons=4)
- [iDエディタによる大量作成](http://osmcha.mapbox.com/?editor__icontains=iD&is_suspect=False&is_whitelisted=True&harmful=False&checked=False&reasons=2)
- [インポートの可能性](http://osmcha.mapbox.com/?is_suspect=False&is_whitelisted=True&harmful=False&checked=False&reasons=2)

フィルタの考え方：

1. iDエディタは、新規ユーザによるシンプルな編集作業を主な対象として設計されており、より高度な編集はJOSMを使って行われます。そのため、iDエディタを使って大量のデータ削除が行われた場合は、そのユーザが意図せずに削除を行ったか、特に理由なく削除を行った可能性があります。[害のある変更セットの例](http://osmcha.mapbox.com/41628531/)
2. Maps.meユーザはOSM初心者の可能性が高いです。特定のエリア内で、特段の理由もなく多数のPOIを追加している例を探すことを勧めます。これはユーザの経験が浅いことに加え、アプリのプリセットから利用できる施設の例が限られていることが原因としてあげられます。[害のある変更セットの例](http://osmcha.mapbox.com/40927770/)
  - Maps.meエディタによる編集はアプリによって自動的にアップロードされます。変更セットコメントは、編集を行った内容に応じてアプリによって自動生成が行われます。Maps.meによる編集をフィルタするには、まずデータ作成のチェックを最初に行うことで、Maps.meユーザによる間違った編集をより見つけやすくすることができます。
4. iDエディタを使った大量のデータ登録についてもフィルタすることができます。この場合、変更セットの中で作成されたデータのレビューを行い、それらがすべて[OSM編集の規範と慣習](http://wiki.openstreetmap.org/wiki/Editing_Standards_and_Conventions)に沿って編集されているかどうかを確認してください。[害のある変更セットの例](http://osmcha.mapbox.com/38282141/)
5. これまでの経験からゆくと、`主要なplaceタグのオブジェクト編集/edited an object with a significant place tag`や`主要なタグのオブジェクト編集/edited an object with a significant tag`、`wikipediaランドマークの編集/edited a wikipedia landmark`などのフィルタを使って疑わしい変更セットの検知が可能なったこともありました。[害のある変更セットの例](http://osmcha.mapbox.com/38534916/)
6. 巧妙に行われた破壊行為は、変更セットの規模も小さく、検知が困難です。ただし、[iDエディタによる小規模な変更セット](http://osmcha.mapbox.com/?modify__lte=50&editor__icontains=iD&is_suspect=False&is_whitelisted=True&harmful=False&checked=False)で検索したり、[OSMChaでのランダム検索](http://osmcha.mapbox.com/)を使って、タグの削除や`name`タグの内容変更などを確認することで検知を行うことが可能です。Examples harmful changesets: [1](http://www.openstreetmap.org/node/4331919989), [2](http://www.openstreetmap.org/node/4353068192/history).

#### 疑わしい変更セットのキーワード設定

[私達がこれまでに収集した特定のキーワード](https://docs.google.com/spreadsheets/d/1dqIKycRCwzrEnp-mFv6wnfPc0-V3XjOcm07BrI6kqkw/edit#gid=626639085)を使うことで、これらの単語を含む変更セットを素早く確認することが可能です。例えば"Google"などの厄介な単語などです。

#### コミュニティからのデータ破壊行為発見申請と、データワーキンググループによる巻き戻し作業

疑わしい変更セットの発見やコメントはコミュニティによっても積極的に行われています。変更セットで行われた編集内容により地図が破壊されてしまった場合、コミュニティはデータワーキンググループに対して情報提供を行い、データワーキンググループによって変更セットの巻き戻しと変更セットへのコメントが行われます。

- **キーワード**の活用
  - 変更セットのコメントとして`revert`や`cleanup`、`fix`といった単語を使うことで、コミュニティによって対応が行われている変更セットの大部分を発見する事が可能です。このリストには、データワーキンググループによる巻き戻しや修正作業も含まれます。

- [**OSM - comments**](https://www.mapbox.com/osm-comments/)の活用
  - OSM-comments APIを使うことで、特定のパラメータを含む変更セットをクエリすることができます
  - OSMで行われたすべてのユーザの変更セットコメントのリンク - [URL for web view](https://www.mapbox.com/osm-comments/#/changesets/?q=users%3A%2A)

現在のところ、データワーキンググループによってコメントが行われた変更セットを、OSM-Comments-APIだけを使ってすべて一覧表示することはできません。[Issue #44](https://github.com/mapbox/osm-comments-api/issues/44)を参照してください。

**データワーキンググループによる巻き戻し作業**

![documentations1](https://cloud.githubusercontent.com/assets/8921295/18270714/0cc820da-744c-11e6-8db8-71421c956e07.gif)
_Finding Data Working Group reverts using OSMCha_

- 特定ユーザによって実施された変更セットをOSMChaでクエリする方法
- `Woodpeck_repair`, `pnorman_mechanical`など、データワーキンググループのメンバーが巻き戻し作業を行う際に利用するアカウントによる変更セットの一覧家は可能です