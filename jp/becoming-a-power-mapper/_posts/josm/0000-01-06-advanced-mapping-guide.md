---
title: Advanced mapping guide
---

## 道路

**住宅区域、造成地**

住宅地に建築されている建物は通常、 `住居区域内道路/residential`か`生活道路/living_street`に沿って建てられており、時折、家の後ろ側には`路地用の私道/service alleyway`が配置されていることがありますが、基本的に道路には1つの面しか接していない状態になります。2つ以上の住居区域内道路に面している場合は、建物の影を道路と間違えている可能性のサインです。その地域内の道路グリッドは一定であり、樹木で見えなくなっていたとしても道路が存在しているかどうか推測することは非常に容易です。

![untitled](https://cloud.githubusercontent.com/assets/126868/9808707/434854d4-587f-11e5-9132-c9e0824bd9e5.gif)

**Fast drawプラグインの活用**

* **Fast draw**プラグインをインストールします (`shift + F`).
* ウェイの単純化は矢印ボタンで行います。上向きの矢印を押すと複雑な形状になりますので、`Enter`キーを押してください。
* 道路のセグメントを単純化し、直線にするには `Q`を押します。
* 各階層の道路のタグをショートカットに登録するには、**設定 > ツールバーのアイコンカスタマイズ > プリセット > 道路 > 道路/ショートカットを設定する地物 > 道路/街路 > ショートカットに登録したい道路を選択 > 右クリックしてショートカットに追加** を行います。
*Video* [Faster draw in JOSM](https://youtu.be/xqDd-Crk3o4)

## 建物

* **building plugin** (`B`)を使うことで、**並行した建物**のトレースができます。建物を1つ選択した状態でツールを使うことで、その建物と並行に他の建物を描くことが可能です。

![untitled](https://cloud.githubusercontent.com/assets/126868/9729213/73f5971e-562b-11e5-8c86-a1fa91eb969e.gif)

* **Area extrude** ツール (`x`)を使うことで、詳細情報を建物の外郭に対して素早く付与することが可能です。ダブルクリックしてノードを作成し、ドラッグしてください。

![untitled](https://cloud.githubusercontent.com/assets/126868/9730603/419f04bc-5635-11e5-8ab8-bda7b1223892.gif)

* **建物の合成** 一部重複する建物を結合させるには、対象の建物オブジェクトをどちらも選択し、*重複するエリアの結合* (`Shift + J`)をクリックします。建物の交差が入り組んでいる場合は、`I > Shift + J`の順で押します。あるいは、 *Auto Tools > Combine LA buildings*を使ってみましょう。

![untitled](https://cloud.githubusercontent.com/assets/126868/9731646/c5816cd8-563b-11e5-84c4-497d9ac7536f.gif)

* *Extrusion mode* (`X`)を実行している際に`Ctrl + Cmd`を押すことで、イレギュラーな形状の建物の再描画/形状修正することができます。

![x-ctrl cmd](https://cloud.githubusercontent.com/assets/13744156/25951924/cf3403da-367c-11e7-84d7-fa43187b38f4.gif)

* *Extrusion mode* (`X`)を実行している際に`Ctrl + Cmd`を押し、その状態で区域の中心部分をドラッグすると、ピラミッド状に形状を押し出すことが可能です。

![pyramidal buildings](https://cloud.githubusercontent.com/assets/13744156/25951031/190971be-367a-11e7-9de1-12bae8b9a056.gif)

* `A`をダブルタップすると、イレギュラーな大きさの建物を押し出すことが可能です。同様に、同じ形を小さくすることもできます。

![double tap a](https://cloud.githubusercontent.com/assets/13744156/25951540/aab0855c-367b-11e7-814d-e874320fc4ab.gif)

* 1つの外壁を共有している建物を描くには、建物を描き(`B`)、そして交差するノードを選択して*ウェイにノードを結合*(`J`)か、*ノードをウェイの一部に移動* (`N`)をクリックします。

![join j](https://cloud.githubusercontent.com/assets/13744156/25953311/90f74560-3680-11e7-8936-254744c3aeb3.gif)

* 1つの建物を2つに分割するには、ノードを2つ選択し、*オブジェクトを分割* (`Alt + X`)を選択します。

![alt x_split_buildings1](https://cloud.githubusercontent.com/assets/13744156/25953093/03458b0a-3680-11e7-91dc-b5e1bfc81e12.gif)

* *Terracer*プラグインを使うことで、1つの外壁を共有する同じ形の建物を作成できます (`Shift + T`)

![terrace](https://cloud.githubusercontent.com/assets/353700/25843868/63539886-34c6-11e7-9ac1-84419da6e512.gif)

* 円形の地物を描くには、まず円の直径を直線で描き、ウェイを選択し、*ツール > 円形を作成* (`Shift + O`)を選択します。

* Use *Resize* tool (`Ctrl + Alt`) to re-size shape.

*ビデオ*

* [異なるタイプの建物を描く方法](https://www.youtube.com/watch?v=VNPfKh_ZI58&feature=youtu.be)
* [JOSMで接触している建物を描く](https://www.youtube.com/watch?v=7GQtNnjIO0Q&feature=youtu.be)

## その他

**個別のパーキングスペース**

パーキングスペース全てに対する外周を描き、[terracer plugin](http://wiki.openstreetmap.org/wiki/JOSM/Plugins/Terracer)を使ってグリッドを作成。自動的に設定されてしまう `building=yes`タグを取り除き、`amenity=parking_space`を追加。隣接するグリッドを作成した場合は、妥当性検証を行うことで自動的に重複したノードをマージ可能。

![untitled](https://cloud.githubusercontent.com/assets/126868/9601159/7ae06fd6-50bd-11e5-85ac-4fc3d00d7fbb.gif)

**建物内を通過するドライブウェイ**

![screen shot 2015-05-28 at 12 40 31 pm](https://cloud.githubusercontent.com/assets/10308123/7854419/f19e7898-0536-11e5-8e57-ffa455325588.png)

この建物について関連するタグは、多くの場合、

 `building=roof` and `layer=1`  

屋根の下を走る道路のタグオプション

    covered=yes
    highway=footway
    highway=residential
    highway=service

**スタジアムのトラックへのタグ**

![image](https://cloud.githubusercontent.com/assets/369696/7835918/184508f2-0485-11e5-8378-b7b405c7c843.png)

スタジアムに対する関連タグのオプション

- trace centerline of track  as line (`leisure=track;area=no`)
- connect centerlines with surrounding foot paths or streets where possible
