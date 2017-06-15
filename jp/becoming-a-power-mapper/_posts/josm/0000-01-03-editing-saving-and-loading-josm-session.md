---
title: Saving and loading a JOSM session
---

他の多くのGISソフトウェアと同様、JOSMでもセッションを保存することが可能です（QGISでいうところのプロジェクトファイルと同等です）。JOSMのセッションでは、現在の地図表示位置とOSMデータ、読み込み中の地図画像レイヤなどが保存されます。

JOSMセッションは**ファイル**メニューから利用可能です。この機能にアクセスするには**上級者モード**を有効化している必要があります。
上級者モードを有効化するには、JOSMの設定を表示させ、**上級者モード**のチェックボックスにチェックを入れてください。

## JOSMセッションの保存

JOSMで任意のレイヤを表示させます。
**ファイル > セッション > 別名でセッションを保存**をクリックし、JOSMのセッションをファイルとして保存します。
新しくJOSMのセッションを開始する際に、読み込みを行うレイヤを選択してください。

![josm_session_save2]({{site.baseurl}}/images/saving-a-josm-session.gif)

## JOSMセッションの読み込み

以前に保存したJOSMセッションを読み込むには、 **ファイル > セッション > セッションの読み込み**をクリックします。保存した`.jos`ファイルを選択してください。

![josm_session_load2]({{site.baseurl}}/images/loading-a-josm-session.gif)

注意: `.jos`ファイルとしてOSMデータは保存しないでください。データの競合を避けるため、データは常に新しいものを読み込むようにします。

現在チームで利用しているセッションファイルの例は [/mapping repo](https://github.com/mapbox/mapping/tree/master/JOSM/sessions)から利用可能です。
