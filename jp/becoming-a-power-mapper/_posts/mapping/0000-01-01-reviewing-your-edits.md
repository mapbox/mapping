---
title: Reviewing your edits
---

## JOSM妥当性検証

[よくあるマッピングの間違い修正]({{site.baseurl}}/becoming-a-power-mapper/fixing-common-mapping-issues/)を行う最も簡単な方法は、JOSMに実装されている妥当性検証機能を使うことです。作業中のセッションで行われたすべての編集内容が自動的にチェックされ、間違いと疑われるデータがもしあればアップロード前にそれらの間違いを警告してくれます。

![screenshot 2015-12-11 14 30 37](https://cloud.githubusercontent.com/assets/126868/11739757/c77832c0-a013-11e5-8568-c6dd6624e127.png)

### 使い方

* 検証したいデータを選択し、`Shift+V`キーを押すか、あるいは妥当性検証パネルから`妥当性検証`を押してください。特定のオブジェクトを選択していない場合、現在選択されているレイヤ内のすべての情報が検証対象になります。
* *妥当性エラー*レイヤが、*レイヤ*に追加され、エラーの可能性がある地物が強調表示されます。
* 検知されたすべてのエラーが*検証結果*パネルに表示されます。それぞれのエラーを選択し、修正を行ってください。エラー表示を右クリックすると、エラーが存在する場所にズームします。

![using validator]({{site.baseurl}}/images/validator_using.gif)

**検証結果**にはエラー修正に関係したいくつかのボタンが表示されます。
* **選択** - 選択したエラーが発生しているオブジェクトを選択
* **表示移動** - エラーリストの中から選択した内容へ表示移動
* **妥当性検証** - 選択中の地物、あるいは（選択していない場合）表示しているすべての地物を対象に妥当性検証を開始
* **修正** - エラーを修正 (自動的に修正が可能な場合)
* **無視** - 以降のテストで対象のエラー検知を無視

### エラー検知のカスタマイズ

デフォルトで行う検知では、[データ問題](https://josm.openstreetmap.de/wiki/Help/Preferences/Validator)であげられている非常に幅広い内容について、すべてチェックが行われます。ですが、そのなかのいくつかはさほど重要ではなかったり、問題のないデータを誤検知することがあります。*設定 > データの妥当性検証*から設定を変更することが可能です。

![validator settings]({{site.baseurl}}/images/validator_settings.gif)

より詳しい情報は[OSM Wiki](http://wiki.openstreetmap.org/wiki/JOSM/Validator) や [LearnOSM Guide](http://learnosm.org/en/coordination/review/#data-validation) も参照ください。

## Overpass Turbo

**[Overpass Turbo](http://overpass-turbo.eu/s/ddp)**を使うことで、現在のOSMデータを素早く検索し、状況を可視化することが可能です。

![screenshot 2015-12-11 16 14 31](https://cloud.githubusercontent.com/assets/126868/11741952/4795d602-a022-11e5-8043-0e7014baebbc.png)

### 使い方

- 対象のエリアまで[マップの表示位置を移動](http://overpass-turbo.eu)させるか、画面左側のツールから対象地域選択の矩形指定を行います
- クエリエディタに[Overpassクエリ](http://wiki.openstreetmap.org/wiki/Overpass_API/Overpass_QL)を書くか、あるいは簡単なタグ検索であれば*ウィザード*から`highway=motorway or highway=trunk`のように指定を行います
- オプションで[MapCSS](http://wiki.openstreetmap.org/wiki/Overpass_turbo/MapCSS)を使って、結果表示にスタイルを適用することも可能です
- `実行`をクリックするとクエリが実行され、OSMデータの検索と結果表示が行われます
*TIP: デフォルトでは、小さなウェイが円として表示されます。ウェイとして表示させたい場合は、`設定 > 地図`から `POIなどの小さな地物を表示しない`をチェックしてください*

より詳しい使い方については [OSM Wiki](http://wiki.openstreetmap.org/wiki/Overpass_turbo), [Learn Overpass](http://osmlab.github.io/learnoverpass//en/) あるいはよく使われる [クエリサンプル](https://gist.github.com/ramyaragupathy/ffb3f225ccba4545398f)も参照してください。

