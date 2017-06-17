---
title: Приступаючи до роботи
---

Для того, щоб [розпочати редагувати в OpenStreetMap за допомогою редактора JOSM](https://www.mapbox.com/blog/making-the-most-josm/), облаштуйте ваше робоче середовище потрібними інструментами.

## Створення облікового запису в OpenStreetMap

1.  Перейдіть на OpenStreetMap.org та створіть обліковий запис: [https://www.openstreetmap.org/user/new](https://www.openstreetmap.org/user/new).
2.  **ВАЖЛИВО.** Додайте вашу світлину до профілю.
3.  Додайте опис вашого профілю, наприклад:

### Опис профілю

Буде корисним додати наступне:

-   Території де ви покращюєте мапу;
-   Привітальне повідомлення, яке дозволить іншим вийти з вами на контакт;
-   Посилання на вашу домашню сторінку або обліковий запис в Твітері, будь-що, що допоможе іншим бути в курсі ваших дій.

*(використовуйте формат [Markdown]( http://en.wikipedia.org/wiki/Markdown) для цього)*

Ось приклад, як це може виглядати:

![osm-profile-description-example]({{site.baseurl}}/images/osm-profile-description-example.png)

## Встановлення JOSM

Ми використовуємо Java OpenStreetMap Editor (JOSM) для більшості задач. Ось коротка інструкція з його встановлення.

**1. Завантаження та встановлення JRE**

JOSM потребує для своєї роботиJava Runtime Environment - JRE. [Заватнтажте та встановіть JRE]( http://www.oracle.com/technetwork/java/javase/downloads/jre8-downloads-2133155.html).

**2. Завантаження JOSM**

Перейдіть на [сайт JOSM](https://josm.openstreetmap.de/wiki/Download), щоб завантажити `tested`-версію редактора. Розташуйте його там, де знаходяться інші застосунки для вашої операційної системи.

-   OSX: `/Applications/`
-   Windows: `C:\Program Files\`

**3. Запуск JOSM**

Запустіть застосунок JOSM, який ви завантажили раніше, подвійним клацанням.

Якщо ви бажаєте використовувати більше оперативної пам'яті для його роботи та якщо ви використовуєте [Linux](http://wiki.openstreetmap.org/wiki/JOSM/Linux), ви можете запустити його командою:

    ~$ java -Xmx1024M -DproxyHost=$PROXY -DproxyPort=8080 -jar josm-tested.jar

Після встановлення та запуску JOSM виглядатиме приблизно так. Відкрийте вікно **Налаштувань** (**Preferences**), воно вам знадобиться для виконаня наступних кроків. Просто клацніть на значок вимикача.

![josm-preferences]({{site.baseurl}}/uk/images/josm-preferences.png)

**4. Ввімкніть режим експерта**

Відкрийте **Налаштування** (**Preferences**) та ввімкніть **Режим експерта** (**Expert mode**).

![check-expert-mode]({{site.baseurl}}/uk/images/check-expert-mode.png)

**5. Додайте ім'я користувача та пароль**

Настав час встановити з'єднання з OpenStreetMap. Додайте ім'я користувача та пароль з вашого облікового запису, який ви створили в OpenStreetMap, в JOSM.

<!-- ![set-osm-username-and-password]({{site.baseurl}}/uk/images/set-osm-username-and-password.png) -->

<div class="video space-bottom4">
  <p>
    <video loop controls poster="{{site.baseurl}}/uk/images/set-osm-username-and-password.png">
      <source type="video/webm; codecs=vp8,vorbis" src="{{site.baseurl}}/uk/images/set-osm-username-and-password.webm"></source>
      <source type="video/mp4" src="{{site.baseurl}}/uk/images/set-osm-username-and-password.mov"></source>
      Your browser does not support the video element.
    </video>
  </p>
</div>

Тепер ви зможете завантажувати дані з OpenStreetMap натискаючи на кнопку з зеленою стрілкою вниз зверху ліворуч:

<div class="video space-bottom4">
  <p>
    <video autoplay loop>
      <source type="video/webm; codecs=vp8,vorbis" src="{{site.baseurl}}/uk/images/download-data.webm"></source>
      <source type="video/mp4" src="{{site.baseurl}}/uk/images/download-data.mov"></source>
      Your browser does not support the video element.
    </video>
  </p>
</div>

**6. Ввімкніть Дистанційне керування (Remote Control)**

Дистанційне керування дозволяє вам передавати дані мапи на OpenStreetMap.org безпосередньо в JOSM. Для ввімкнення Дистанційного керування (Remote Control), встановіть прапорець в параметрах:

![enable-remote-control]({{site.baseurl}}/uk/images/enable-remote-control.png)

Також позначте **Завантажувати об’єкти до нового шару** (**Download objects to a new layer**). Тепер ви зможете отримувати дані безпосередньо з  OpenStreetMap.org, наприклад:

<div class="video space-bottom4">
  <p>
    <video autoplay loop>
      <source type="video/webm; codecs=vp8,vorbis" src="{{site.baseurl}}/uk/images/retrieve-data.webm"></source>
      <source type="video/mp4" src="{{site.baseurl}}/uk/images/retrieve-data.mov"></source>
      Your browser does not support the video element.
    </video>
  </p>
</div>

**7. Виділення оперативної пам'яті для потреб JOSM**

Типово, JOSM вимагає 247-1024 Мб оператвиної пам'яті для роботи. Коли він досягає максимальної межі ви побачите вікно, що сповіщатиме вас про це.

![increasing memory]({{site.baseurl}}/uk/images/increasing-memory.png)

Щоб подолати таку ситуацію треба зібльшити обсяг пам'яті, що буде виділятись операційною системою для роботи JOSM, скориставшись [цією інструкцією](https://gist.github.com/jothirnadh/00352fff58ce2628cc4f#supply-parameters). Якщо ви вагаєтесь та невпевнені у власних силах, зверніться до одного з членів команди по роботи з даними за допомогою.

## Використання ігрової миші

Використання ігрової миші може підвищити вашу продуктивність за рахунок призначення загальних дій під, які виконуються під час мапінгу, на додаткові клавіши миші. Цей розділ лише окреслює основи налаштування ігрової миші в JOSM.

**Система:** Linux та MacOS

**Обладнання:** Razer Gaming mouse

**Загальні поради:** Підвищіть швидкість руху вказівника миші для MacOS `System Preferences> Mouse`

**Приклади використання**

**Будівлі**

**Налаштування ігрової миші та клавіатури**

1.  Встановіть програмне забезпечення для налаштування: <https://www.razerzone.com/synapse/>
2.  Створіть обліковий запис razer ID: <https://razer-id.razerzone.com/new>
3.  Створіть ваш профіль використовуючи вашу адресу електронної пошти
4.  Налаштуйте мишу:

**Найпоширеніші комбінації для налаштування вашої ігрової миші для креслення будівель**: Enter, Видавлювння (<kbd>X</kbd>), креслення будівель (<kbd>B</kbd>), надсилання та отримання даних з OSM (тут типові кобінаціїї клавіш, що використовуються в JOSM).

**Також добре мати**: Приєднання та злиття точок/ліній (<kbd>J</kbd> та <kbd>M</kbd>), Виділення ліній, що перетинаються (<kbd>I</kbd>), Об'єднання полігонів, що перетинаються (<kbd>Shift</kbd> + <kbd>J</kbd>), Розділення об'єктів (<kbd>Alt</kbd> + <kbd>X</kbd>)

**Примітка**: Поради щодо налаштування вашої миші:

**Ліва рука (клавіши на клавіатурі)**:

*   Отримати дані з сервера - <kbd>Shift</kbd>+<kbd>Ctrl</kbd>+<kbd>↓</kbd>
*   Виділити - <kbd>S</kbd>
*   Зробити кути прямими - <kbd>Q</kbd>
*   Обертати - <kbd>Shift</kbd>+<kbd>Ctrl</kbd>

**Права рука (комбінацію на кнопках миші)**:

*   <kbd>Enter</kbd>
*   Видавлювання - <kbd>X</kbd>
*   Креслення будинків - <kbd>B</kbd>
*   З'єднати точки - <kbd>M</kbd>
*   Приєднати точку до лінії - <kbd>N</kbd>
*   Виділити лінії, що перетинаються <kbd>I</kbd>
*   Об'єднати полігони, що перекриваються <kbd>Shift</kbd>+<kbd>J</kbd>

Замість типових комбінацій задайте такі, що будть зручні для вас (бажано з використанням однієї кнопки)

**Примітка**: Для роботи з такими об'єктами, як дороги або [завдання to-fix](https://osmlab.github.io/to-fix/), створітьт окремі налаштуванн з комбінаціями клавіш, які потрібні саме для них.
