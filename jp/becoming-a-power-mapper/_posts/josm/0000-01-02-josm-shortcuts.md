---
title: JOSM shortcuts
---

JOSMエディタを使って編集を行う場合、あるいはto-fixを使って地図データのエラーを修正する場合、もしキーボードショートカットを正しく使うことができれば、時間の短縮とマッピングの品質向上を見込むことができます。ここではJOSMのショートカット - 特にそのデフォルト設定とあなたの環境に合わせたカスタマイズ方法、データチームでよく使われるキー操作について説明します。

![](https://scontent-frt3-1.xx.fbcdn.net/hphotos-xfl1/t31.0-8/920735_554891274669057_2113729309314231818_o.jpg)
*[JOSM cheatsheet](http://www.openstreetmap.org/user/baditaflorin/diary/37606) by user:baditaflorin も参照してください*


## 基本のショートカット [デフォルト]

JOSMエディタにはデフォルトで、OpenStreetMapデータのダウンロード/アップロードやタグの追加/編集/削除、編集結果の妥当性検証を含め、ノードやウェイ、ポリゴンを対象として100以上のショートカットが設定されています。詳細はJOSM wikiの[一般的なキーボードショートカット](https://josm.openstreetmap.de/wiki/Presets/CommonKeyboardShortcuts)ページを参照ください。


![image](https://cloud.githubusercontent.com/assets/8562256/7113237/5beb62a8-e1ef-11e4-832d-0fa5e827503e.png)

_メニューバーの **ツール** を選択すると、JOSMの基本的なデフォルトショートカットを表示する事が可能です_

まずこれらJOSMの基本的なデフォルトショートカットを覚えるとよいのですが、JOSMでの高速編集に慣れてくるにつれ、より自身のマッピング環境に合わせたカスタマイズが便利になってきます。例えばカスタマイズを行うことで、マウスから右手を離すことなくショートカットを押してマッピングを行うような設定も可能です。


アクション | キーボードショートカット
---- | ----
編集アップロード | <kbd>`</kbd><!--`-->
データダウンロード | <kbd>Q</kbd>
データ削除 | <kbd>D</kbd>

ショートカットメニューを表示するにはJOSMの **設定** メニューを表示してください。 **設定**の中の左側にある **オプション** (上から7つめのボタン)をクリックしてください。

![configure_image_shortcuts](https://cloud.githubusercontent.com/assets/353700/11626533/8cbfdb90-9d09-11e5-8641-8a1260e232a8.png)

以下、慣れ親しんでいるマッパーの多いであろうショートカットです。

### JOSMショートカット

#### データ

アクション | 解説 | Mac | Win/Linux
---- | ---- | ---- | ----
開く | ファイルを開く | `Cmd+O` |
保存 | 現在のデータを保存 | `Cmd+S` |
データダウンロード | OSMサーバからの地図データダウンロード | `Cmd+Shift+Down` |
データアップロード | 現在選択しているデータレイヤの変更箇所をOSMサーバへアップロード | `Cmd+Shift+Up` |

-----

### 基本的な地図編集

ACTION | DESCRIPTION | Mac | Win/Linux
---- | ---- | ---- | ----
SELECTION | select, move, scale, and rotate objects | `S`| `S`
NODES | draw nodes | `A`| `A`
BUILDINGS | draw building | `B`| `B`
DRAW | fast drawing mode | `Shift + F` |
ZOOM | zoom and move map | `Z`| `Z` 
DELETE | delete nodes or ways | `Cmd + D`
SPLIT WAY | split a way at a selected node | `P`| `P`
COMBINE WAY | combine several ways into one | `C`| `C`
REVERSE WAY | reverse the direction of all selected ways | `R`| `R`
SIMPLIFY WAY | delete unnecessary nodes from a way | `Shift+Y`
ALIGN NODES IN CIRCLE | move the selected nodes into a circle | `O`| `O`
ALIGN NODES IN LINE | move the selected nodes into a line | `L`| `L`
MIRROR | mirror selected nodes and ways | `Shift+M` |
FOLLOW LINE | continues drawing a line that shares nodes with another line | `F`| `F`
ADD NODE | add a node by adding latitude/longitude or easting/northing | `Shift+D` |
CREATE CIRCLE | create a circle from three selected nodes | `Shift+O` |
MERGE NODES | merge nodes into the oldest one | `M`| `M`
JOIN NODE TO WAY | include a node into the nearest way segment | `J`| `J`
MOVE NODE INTO WAY | move node into the nearest way segments and include it | `N`| `N`
DISCONNECT NODE FROM WAY | disconnect nodes from a way they currently belong to | `Alt+J` |
UNGLUE WAYS | duplicate nodes that are used by multiple ways | `G`| `G`
JOIN OVERLAPPING AREAS | join areas that overlap each other | `Shift+J` |
CREATE MULTIPOLYGON | create a multipolygon | `Cmd + B` |
UPDATE MULTIPOLYGON | update a multipolygon | `Cmd+Shift+B` |

----

## 位置精度、正確さ

ACTION | DESCRIPTION | SHORTCUT
---- | ---- | ----
PARALLEL WAYS | make parallel copies of ways | `Shift+P`
WAY ACCURACY | improve the accuracy of ways | `W`
ORTHOGONALIZE SHAPE | move nodes so all angles are 90 or 180 degrees | `Q`
DISTRIBUTE NODES | distribute the selected nodes to equal distances along a line | `Shift+B`
EXTRUSION | create areas | `X`
BUILDING SIZE | set building size | `Cmd+Alt+B`

----

## Presets

ACTION | DESCRIPTION | SHORTCUT
---- | ---- | ----
SEARCH PRESETS | show preset search dialogue | `F3`


## User interface

ACTION | DESCRIPTION | SHORTCUT
---- | ---- | ----
PREFERENCES | open a preferences dialogue for global settings | `Cmd + ,`
LAYERS WINDOW | open a list of all loaded layers | `Alt+Shift+L`
TAGS/MEMBERSHP WINDOW | open tags window for selected objects | `Alt+Shift+P`
SELECTION WINDOW | open a selection list window | `Alt+Shift+T`
RELATIONS WINDOW | open a list of all relations | `Alt+Shift+R`
WIREFRAME VIEW | enable/disable rendering the map as wireframe only | `Cmd+W`

----

## Imagery

ACTION | DESCRIPTION | SHORTCUT
---- | ---- | ----
IMAGERY OFFSET | download offset for current imagery from a server | `Cmd+Alt+I` 

----

## Conflicts resolution

ACTION | DESCRIPTION | SHORTCUT
---- | ---- | ----
CHECK AUTHOR | open list of people working on a selected object | `Alt+Shift+A`
RESOLVE CONFLICT | resolve a conflict | `Alt+Shift+C`

----

## Review/validation

ACTION | DESCRIPTION | SHORTCUT
---- | ---- | ----
CHANGESET MANAGER | toggle visibility of changeset manager window | `Cmd+Alt+C`
VALIDATION WINDOW | open validation window | `Alt+Shift+V`
VALIDATE | performs data validation | `Shift+V`
FILTERS | filter objects and hide/disable them | `Alt+Shift+F`
HISTORY JOSM | check history of an object | `Ctrl+H`
HISTORY WEB | check the history of object on web | `Cmd+Shift+H`
