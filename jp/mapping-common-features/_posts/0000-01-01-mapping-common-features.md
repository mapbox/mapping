---
title: Mapping common features
---

このチュートリアルでは、OpenStreetMapでよく作成・編集される地物の編集方法について解説します。これはあくまでもイントロダクションであり、包括的なマッピング方法の解説ではないことに注意してください。解説ではOpenStreetMap特有の用語を使います。もし"ノード"や"ウェイ"、"リレーション"といった用語の意味がわからない場合は、このガイドの前項を先にお読みください。

## Xをマッピングするには？

この項目では、最もよく編集される地物について解説します。すべての地物の解説については[OpenStreetMap Map Features](http://wiki.openstreetmap.org/wiki/Map_Features) ([日本語版](http://wiki.openstreetmap.org/wiki/JA:Map_Features)) のガイドや、[Feature categories](http://wiki.openstreetmap.org/wiki/Category:Features)を参照してください。特定の地物、例えばバス停のマッピング方法を知りたい場合は、"tag bus stop site:wiki.openstreetmap.org" や "タグ バス停 openstreetmap.org" などのような単語で Google検索してください。


![](https://s3.amazonaws.com/f.cl.ly/items/3C3A0S3k011k1P3b2J0N/google.gif)

[taginfo.openstreetmap.org](http://taginfo.openstreetmap.org/)は、資料的価値が高く、よく参照されるサイトです。Taginfoでは、特定のタグが何回使われているかを表示することが可能で、既存の確立したタグの使い方を教えてくれます。

## 道路と歩道

道路は私たちがマップする地物の中で非常に重要なものです。道路は航空写真から容易にトレース可能であり、その分類は非常に多岐にわたります。

### 道路のトレース

道路のトレース作業はたいへんシンプルです。JOSMでは **描画** (`Aキー`) 、iDでは **ライン** ツールを使って道路のコースに沿って線を描きます。道路を描く際には、適切な量のノードを配置するのがコツです。ノードの量が少なすぎると道路の線が雑になります。逆に、ノードの量が多すぎると後の編集で道路を修正することが困難になります。

以下の図を見てみてください。左の図はノードの数が少なすぎる状態で、線がギザギザになっています。中央の図はノードが多すぎて、冗長な情報が含まれています。右の図が最も望ましいトレース状態です。

![mapbox guide big](https://cloud.githubusercontent.com/assets/693781/10158378/f3a4b3fc-6691-11e5-9738-58ad86a5a525.png)

それぞれの道路は、交差する点で接続されています。左の図は単に2つの道路が交差している状態で、右の図では2つの道路が接続されている状態です。これは乗り物が道路から道路を伝って移動することになるナビゲーション（経路探索）を行う際に非常に重要な情報となります。

![](https://s3.amazonaws.com/f.cl.ly/items/180r0E2l0P2H0m0Z3m07/Screen%20Shot%202015-01-04%20at%208.55.14%20PM.png)

道路の流れはできるだけ再現してください。左の図では、道路が明確な理由なく"回り道"にされています。右の図では道路の論理的な流れに沿ってトレースが行われています。

![wrong: "map around corners", right: follow flow](https://s3.amazonaws.com/f.cl.ly/items/0k1F3Y0m0y081H3v0W07/Screen%20Shot%202015-01-04%20at%208.48.54%20PM.png)

*物理的に* 分離された車道は別々のウェイとしてトレースしてください。サンプルの二車線道路（オレンジ）のトレース方法を参考にしてください。

![dual carriage way](https://s3.amazonaws.com/f.cl.ly/items/0f0z0i391l0C0e0X3d0b/Screen%20Shot%202015-01-04%20at%209.01.42%20PM.png)

二車線道路に対して道路が接続されている状況をマッピングする場合、実際の道路の接続状況を確認して、それぞれの車線に適切に道路が接続されているかを確認してください。

![show 2 examples of connecting roads to a carriage way: one connecting to both lanes, one to only one lane](https://s3.amazonaws.com/f.cl.ly/items/07043M2U0H093c2q1r3m/Screen%20Shot%202015-01-04%20at%209.01.4222%20PM.png)

### 道路として描くもの色々

車道だけではなく、歩道や小道、自転車道にもタグとして `highway` キーが使われています。よく使われる例は以下のとおりです。

- `highway=residential` - 住宅地区内の道路
- `highway=motorway` - 高速走行専用道路
- `highway=footway` - 歩道
- `highway=cycleway` - 自転車道

道路にはしばしば補助的なタグが付与され、道路の種別の指定や属性の表現が行われます。

- `oneway=yes` は一方通行に付与されます
- `lanes=2` は、分離されていない二車線道路を意味します
- `name=Broadway` は道路の名前を指定しています
- `access=private|permissive` は道路の通行制限を表現しています
- `service=parking_aisle|driveway` は、`highway=service`の中の特定のタイプを指定しています

### 一方通行

一方通行を表現するには、単純に `oneway=yes` タグを道路のウェイに適用してください。適用する際には、ウェイの向きに注意してください。一方通行の方向は、ウェイの向きのとおりに設定されます。一方通行の方向を変更したい場合には2つの方法があります。

- ウェイの向きを変更 (JOSMでは`ツール > ウェイの方向転換`、iDでは操作アイコンの `<<`)
- タグとして`oneway=-1`を適用 - この方法は、例えばバスルートなど他の属性によってウェイの向きが指定されてしまっている場合に使います

![tagging a oneway](https://s3.amazonaws.com/f.cl.ly/items/1W0M081C2W3K0j0p1I2r/oneway.gif)

OpenStreetMap Wiki: [Key:oneway](http://wiki.openstreetmap.org/wiki/Key:oneway)

### 進行方向制限

進行方向制限は、特定の方向へ曲がることを不許可にするルールです。例えば、"右折禁止"の道路標識は以下のようになります。

![](https://farm3.staticflickr.com/2900/14360050862_ef35f7ffa8_b.jpg)

JOSMを使って進行方向制限をマップするには、 **turnrestrictions** プラグインを使用します。プラグインを有効化すると、 `ウィンドウ > 進行方向制限` メニューウィンドウに進行方向制限用のパネルが追加されます。

有効化を行い、進行方向制限の新規作成や既存設定の編集をパネルから行ってみましょう。以下はシンプルな "右折禁止" の作成例です。右折が禁止されている元の道路を "from" オブジェクトとして選択し、その道路から展開できない先の道路を "to" オブジェクトとして選択することによって、この制限設定が "右折禁止" を意味するようになります。turnrestrictionsダイアログを閉じようとすると "via" オブジェクトが指定されていないという警告が表示されます。その設定は必須というわけではありませんが、グッドプラクティスではありますので、念の為指定をしておきましょう。

![](https://s3.amazonaws.com/f.cl.ly/items/24173W1U033a193q2l1F/turn.gif)

進行方向制限はあっという間に指定が複雑化します。そのため、制限を作成したり編集したりする場合は、OpenStreetMap wikiのドキュメントはあらかじめすべて読み、理解するようにしてから実施するようにしてください。

*Video: [How to edit turn restrictions in JOSM](https://www.youtube.com/watch?v=0SdixDJAED0)*

*OpenStreetMap Wiki: [Relation:restriction](http://wiki.openstreetmap.org/wiki/Relation:restriction)*

### シンプルな道路階層設定ガイド

OpenStreetMapを学ぶにあたってもうひとつややこしいスキルは、道路の階層付けを適切に行う方法です。`highway`タグでは車道が8つ以上の階層に分類されており、乗り物以外の通行を表現するにも5つ以上、補助的なタグについても数多く指定がされています。さらに道路の階層構造は各国で異なり、それぞれの国ごとに異なる基準を使って作業が行われています。

OpenStreetMapで道路階層の作業を行う場合のクイックガイドは以下のとおりです。

1. 既存の階層構造に従う。階層構造を変更せず、新しいデータを作成する際にはその土地のローカルのやり方に従う
2. 道路ネットワークの中で最も小さい道路は特定が簡単で、普段の編集で一番よく入力するものでしょう。そうした道路に対しては、道路が居住区域内にある場合は `highway=residential` 、その他の場合は`highway=unclassified`を指定します
3. どうしても種別がわからない場合は `highway=road`を使用します

道路マッピングのより詳しい方法については、[highwayタグのwikiエントリー](http://wiki.openstreetmap.org/wiki/Key:highway)を参照してください。

### 道路と他の地物の交差

道路と他の地物が交差する場合、常になんらかの追加作業が行われるべきです。そうした交差が行われている場所には、交差点か、トンネルか、橋があるはずです。

#### 2つの道路の交差点

2つの道路の交差点を作成するには、その2つの交差点が1つのノードで結節させてください。

![show how 2 roads connect](https://s3.amazonaws.com/f.cl.ly/items/1b0K0E2b401E0U2U1H1A/intersect.gif)

#### トンネル

トンネルには、 `tunnel=yes` タグと `layer=` タグを付与します。`layer=`の値には、交差する地物のレイヤーの値（`layer`のデフォルト値は0）よりも1低い値を割り当ててください。道路は他の地物と接続 *しません*。トンネルの開始点と終了点でウェイを分割します。

![show how to map a tunnel](https://s3.amazonaws.com/f.cl.ly/items/0e3S3F3j1N000w1R1d2x/tunnel.gif)

建物内を道路が通過する場合にも、トンネルとして扱います。その場合、建物の外郭と道路をノードで接続させ、建物内を通過している部分の道路ウェイに `tunnel=building_passage` を付与してください。

![map a building passage](https://s3.amazonaws.com/f.cl.ly/items/1v1E0Z2P0C3X1K1h0Q1M/building-passage.gif)

*OpenStreetMap Wiki: [Key:tunnel](http://wiki.openstreetmap.org/wiki/Key:tunnel)*

#### 橋

道路を表す `highway=*`に加え、`bridge=yes` タグと `layer=` タグを付与します。`layer=`の値には、交差する地物のレイヤーの値（`layer`のデフォルト値は0）よりも1高い値を割り当ててください。

![show how to map a bridge](https://s3.amazonaws.com/f.cl.ly/items/1v1P2S3P35292a1m2a0m/bridge.gif)

*OpenStreetMap Wiki: [Key:bridge](http://wiki.openstreetmap.org/wiki/Key:bridge)*

#### 線路との交差

鉄道の線路との交差をマップするには、道路との交差を表現する方法と同様、道路と線路をノードで結節します。結節点のノードには `railway=level_crossing` タグを付与してください。類似のタグとして `railway=crossing` がありますが、こちらは歩行者用の踏切ですので間違えないよう注意してください。


![map a level crossing](https://s3.amazonaws.com/f.cl.ly/items/1q3o381b0K3r3x291J0E/level_crossing.gif)

*OpenStreetMap Wiki: [Tag:railway=level_crossing](http://wiki.openstreetmap.org/wiki/Tag:railway%3Dlevel_crossing)*

#### ラウンドアバウト

ラウンドアバウトをマップするには円形の道路を描き、そこに `junction=roundabout` を付与してください。道路の種別は、そのラウンドアバウトに接続されている全ての道路のうち最も高い階層を割り当てます。 `junction=roundabout`タグは一方通行であることも意味します。道路のウェイの向きにも注意してください。

![ezgif-1791703736](https://cloud.githubusercontent.com/assets/12744420/10310207/745ec272-6c5e-11e5-8d4c-5727e8b5d42e.gif))

#### 複雑な交差点

複数の車線が関係する複雑な形状の交差点を表現するには、まず道路のトレースを行い、メインとなる車線の交通フローが正しく反映できるようにした後で一方通行を適切に配置してください。

![](https://s3.amazonaws.com/f.cl.ly/items/0M3S232n2V342Y3T2n1Y/Screen%20Shot%202015-01-04%20at%2010.34.51%20PM.png)

## 建物

建物のトレースには品質の高い航空写真と忍耐が必要です。建物の角の位置や建物同士の角度に注意を払い、建物配置の規則性を反映しましょう。建物は、その外郭部分が *地面と接している場所* をトレースするようにします。この点は非常に重要です。航空写真をもとにすると建物の屋根の形状はわかりやすいことが多く、OpenStreetMapではその位置に建物がトレースされてしまうことが多いのですが、それは間違いであり、本来は建物が地面と接地している部分をトレースすることが正しいです。

![505kyfalbo](https://cloud.githubusercontent.com/assets/126868/6914386/8d115556-d7a7-11e4-9f04-7291331e7ef8.gif)

建物のトレースで最も困難なのは、航空写真の画像から形状の詳細が読み取れないことです。航空写真から建物の形状が充分に認識できない場合、無理にトレースはしないでください。

いくつか、JOSMで建物のトレースを行う際のTIPSを紹介します。

建物のトレースを行うには、 *buildings plugin* を使います。プラグインを有効化すると、画面左の編集ツールバーに building toolが追加されます。 building tool は `B` キーで利用でき、四角形を描画した上でそのオブジェクトに `building=yes`タグを追加してくれます。位置が並行に配置されている建物をトレースするには、1つめの建物を選択し、その状態で他の建物をトレースしてください。

![](https://s3.amazonaws.com/f.cl.ly/items/3A2T0l0Y3x0N030w090F/building.gif)

閉じたウェイをフリーハンドで描く場合には、 `ツール > 直交化` を選択するか `Q` キーを押して、以下のような感じで建物の角が直角になるようにしてください。

![](https://s3.amazonaws.com/f.cl.ly/items/3U3c1S1V2X1Q1h3s0845/Screen%20Shot%202014-12-15%20at%206.35.04%20PM.png)

建物の突き出た部分を描くには、補助線を活用します。

![](https://s3.amazonaws.com/f.cl.ly/items/0s3G3T200b1C3d3i0x2Y/buildingalignment.gif)

既にトレース済みの建物の向きを簡単に修正するには、対象の建物オブジェクトを選択し、さらにその状態で向きのもとになる参照点ノードを2つ選択した状態で `Q` キーを押すことによって、そのノードの角度に合わせてオブジェクトの向きが調整されます。

![3zpk8nxbdt](https://cloud.githubusercontent.com/assets/126868/6900081/d65cf23c-d721-11e4-82f9-7084b11bb41f.gif)

建物オブジェクトを一時的に分割するには `ツール > ウェイの分割` を選択するか、 `P` キーを押してください。該当部分を直交化した後に建物を再接続するには `ツール > ウェイの接続` を選択するか、 `C` キーを押します。

![](https://s3.amazonaws.com/f.cl.ly/items/151R161W3i2c043q1z0B/straightenc.gif)

簡単ですが、建物のトレース方法に関するチュートリアルはここまでです。

![](https://s3.amazonaws.com/f.cl.ly/items/3T0Y0h390L3l19000s2h/buildings.gif)

*OpenStreetMap Wiki: [Key:building](http://wiki.openstreetmap.org/wiki/Key:building)*

*Video: [Tracing buildings with JOSM](https://www.youtube.com/watch?v=9GRIHSAAkSs)*

## Points of interest / POI

"Point of interest （ポイント・オブ・インタレスト、POI）"とは、現実世界の中で地図に含められるべき価値のある地物とその地点を表現するための一般名詞です。例えばレストランや喫茶店、店舗、銀行、教会や寺院、公衆トイレや噴水などが挙げられます。OpenStreetMapでPOIを表現するためのタグは1つではなく、`amenity=`、 `shop=`、 `tourism=` など、さまざまな種類のPOIを表現するために多様なタグが用意されています。

*OpenStreetMap Wiki: [Key:amenity](http://wiki.openstreetmap.org/wiki/Key:amenity), [Key:tourism](http://wiki.openstreetmap.org/wiki/Key:tourism), [Key:shop](http://wiki.openstreetmap.org/wiki/Key:shop), [Key:leisure](http://wiki.openstreetmap.org/wiki/Key:leisure)*

### ノードとしてのPOI

POIをマップするための最も簡単な方法は、単一のノードを配置し、そこに適切なタグを付与する方法です。以下は、OpenStreetMapで噴水をマップする方法の例です。

![](https://s3.amazonaws.com/f.cl.ly/items/2a0E2w0u2U0D0t2b1Z3Y/fountain.gif)

レストランをマップするには以下のようにします。

![](https://s3.amazonaws.com/f.cl.ly/items/1R3K0A1p0C1G043n1o3d/komi.gif)

### エリアとしてのPOI

"ポイント" オブ・インタレストの中には、その境界線が明確に確定できる地物があります。そうしたPOIもマップしてみましょう。わかりやすい例として公園をあげます。以下はワシントンDCにあるFolger Parkの例です。この公園は閉じたウェイとして描かれ、そこに `leusure=park`タグが付与されています。

![](https://s3.amazonaws.com/f.cl.ly/items/0V2N0n290Z1L0H1h2b1e/Screen%20Shot%202015-01-10%20at%208.29.39%20AM.png)

### POIとしての建物

時折、建物そのものがPOIとして扱われる場合があります。例えば駅前の多用途施設の中にあるマクドナルドレストランの建物や、郊外のショッピングセンターに併設しているドライブスルー専用マクドナルドのことを考えてみてください。あるいは、衛星写真を使って判別可能な地物としては、教会や寺院のような礼拝施設を考えてみてください。このようなケースでは、建物そのものがPOIとしてタグづけされるべきです。以下は、既存のマッピングとして建物のなかのノードとして書かれていた教会の例です。この場合、ノードに付与されていた全てのタグを建物に転記し、その後ノードを削除しています。

![](https://s3.amazonaws.com/f.cl.ly/items/2m0k0v333M1H0i1t3p1V/church.gif)

### 学校、大学

学校はシンプルに、`amenity=school`タグ付きのノードとしてマップすることが可能です。ただし、学校は建物全体や一定の広さの土地を専有していることがしばしばあります。学校の校庭や校舎が建っている敷地などは `amenity=school`としてマップすることができます。学校を地図上に配置するだけであればノードを置くだけで十分です。しかしながら、もし適切であるならば、学校の工程や建物をウェイとしてマップしてみましょう。

以下は、学校が建物全体を *専有していない* 場合の例です。

![](https://s3.amazonaws.com/f.cl.ly/items/0H2W3b401X3H0r0O011s/Screen%20Shot%202015-01-09%20at%206.09.01%20PM.png)

学校が建物全体を *専有している* 場合は以下のようになります。

![](https://s3.amazonaws.com/f.cl.ly/items/0r3q0C0w2L0C3n3d2f11/Screen%20Shot%202015-01-09%20at%206.18.28%20PM.png)

学校が自身で校庭を所有している場合は以下のようにします。

![](https://s3.amazonaws.com/f.cl.ly/items/1W1A1p0U3z3D3E3g183M/highschool.gif)

大学も同様です。

![](https://s3.amazonaws.com/f.cl.ly/items/102S1D1Z472x213M2b0Y/university.gif)

*OpenStreetMap Wiki: [Tag:amenity=school](http://wiki.openstreetmap.org/wiki/Tag:amenity%3Dschool), [Tag:building=school](http://wiki.openstreetmap.org/wiki/Tag:building%3Dschool), [Tag:amenity=university](http://wiki.openstreetmap.org/wiki/Tag:amenity%3Duniversity), [Tag:building=university](http://wiki.openstreetmap.org/wiki/Tag:building%3Duniversity), [Tag:amenity=college](http://wiki.openstreetmap.org/wiki/Tag:amenity%3Dcollege)*

## 水路と河川

小さな河川をトレースする場合には、ウェイを描き `waterway=stream`でタグ付けしてください。ウェイの向きは水が流れる向きを表します。大きな河川を描く場合、河川の中心線をトレースして `waterway=river`としてタグ付けし、河川の流域を `natural=water` と `water=river`を使ってタグ付けしてください。河川の名前は waterwayタグを付与したウェイに対して与えます。以下が描画例です。


![](https://s3.amazonaws.com/f.cl.ly/items/460R352M0H301L2Y1Q3T/river.gif)

河川に中洲がある場合は、`type=multipolygon`のリレーションを使ってマップします。`natural=water` と `water=river`を付与したエリアを使ってマルチポリゴンを使うようにします。河川の中心線を表すウェイをマルチポリゴンに含めないでください。

![](https://s3.amazonaws.com/f.cl.ly/items/0t0A0q06130m0O1c3I19/multiriver.gif)

*ビデオ: [中洲のマッピング方法](http://cl.ly/0M0m2C2t2T3g)*

*OpenStreetMap Wiki: [Tag:waterway=river](http://wiki.openstreetmap.org/wiki/Tag:waterway%3Driver)*

## 以下続編

- Walking and cycling paths
- Places (city versus village versus suburb versus neighborhood)
- Lakes
- Tracing highway areas