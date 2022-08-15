/**
 * @class
 * @extends Language
 */
class Russia extends Language
{
    /**
     * @return {Map}
     * @method
     * @public
     */
    createMapping ()
    {
        return new Map([
            ["{{終了フレームを指定}}", "Укажите конечную рамку"],
            ["{{開始フレームを指定}}", "Укажите начальный кадр"],
            ["{{フレーム設定}}", "Установка рамы"],
            ["{{書き出し設定}}", "Настройки экспорта"],
            ["{{ファイル形式の選択}}", "Выберите формат файла"],
            ["{{ファイル形式}}", "Форматы файлов"],
            ["{{サイズ設定}}", "Установка размера"],
            ["{{左上}}", "Вверху слева"],
            ["{{中央上}}", "Вверху по центру"],
            ["{{右上}}", "Верхний правый"],
            ["{{中央左}}", "Центр Левый"],
            ["{{中央}}", "Центр"],
            ["{{中央右}}", "Центр Правый"],
            ["{{左下}}", "Низ Левый"],
            ["{{中央下}}", "Нижняя часть Центр"],
            ["{{右下}}", "Дно справа"],
            ["{{中心点のX座標}}", "X-координата центральной точки"],
            ["{{中心点のY座標}}", "Y-координата центральной точки"],
            ["{{MovieClipに変換}}", "Конвертировать в MovieClip"],
            ["{{変換}}", "трансформация"],
            ["{{ループ回数}}", "Количество циклов"],
            ["{{カーブポインターの削除}}", "Удалить указатель кривой"],
            ["{{ステージ基準}}", "Критерии этапа"],
            ["{{閉じる}}", "Закрыть"],
            ["{{保存}}", "Сохранить"],
            ["{{リセット}}", "сброс"],
            ["{{スクリーン}}", "Экран"],
            ["{{ショートカット設定}}", "Настройки ярлыков"],
            ["{{レイヤーカラー}}", "слоистый цвет"],
            ["{{Next2Dを支援する}}", "Поддержите Next2D"],
            ["{{サポート}}", "поддержка"],
            ["{{未使用のアイテムを削除}}", "Удалите неиспользуемые предметы"],
            ["{{レイヤーをペースト}}", "Слой пасты"],
            ["{{レイヤーをコピー}}", "Копирование слоя"],
            ["{{フレームをペースト}}", "Вставить рамку"],
            ["{{フレームをコピー}}", "Копировальная рама"],
            ["{{キーフレームを削除}}", "Удалить ключевые кадры"],
            ["{{キーフレームに空のキーフレームを追加できません}}", "Невозможно добавить пустые ключевые кадры в ключевые кадры"],
            ["{{ズームツール}}", "Инструмент масштабирования"],
            ["{{タイムライン幅の拡大・縮小}}", "Ширина временной шкалы Расширение/сокращение"],
            ["{{ガイドレイヤー}}", "направляющий слой"],
            ["{{音量設定}}", "Настройка громкости"],
            ["{{サウンドを削除}}", "Удалить звук"],
            ["{{カスタムループ}}", "индивидуальная петля"],
            ["{{読込のみ}}", "Только чтение"],
            ["{{書込を許可}}", "разрешение на публикацию"],
            ["{{単一行}}", "Одиночная линия"],
            ["{{複数行}}", "Многолинейный"],
            ["{{自動で折り返し}}", "Автоматический обхват"],
            ["{{左寄せ}}", "Слева"],
            ["{{中央揃え}}", "Центр"],
            ["{{右寄せ}}", "Правый"],
            ["{{放射状グラデーション}}", "радиальная градация"],
            ["{{線形グラデーション}}", "линейный градиент"],
            ["{{画像}}", "Изображение"],
            ["{{画像選択}}", "Выбор изображения"],
            ["{{種別}}", "Тип"],
            ["{{Shapeの色設定}}", "Настройки цвета формы"],
            ["{{変形}}", "деформация"],
            ["{{カラー効果}}", "Трансформация цвета"],
            ["{{フィルター}}", "фильтр"],
            ["{{Shapeを複製}}", "Дублировать форму"],
            ["{{読み込み}}", "читать в"],
            ["{{新規フォルダー}}", "Новая папка"],
            ["{{新規MovieClip}}", "Новый MovieClip"],
            ["{{枠に合わせてテキストをリサイズ}}", "Измените размер текста, чтобы он поместился в рамку"],
            ["{{テキストに合わせて枠をリサイズ}}", "Измените размер рамки, чтобы вместить текст"],
            ["{{リサイズしない}}", "Отсутствие изменения размера"],
            ["{{フォント}}", "шрифт"],
            ["{{テキスト}}", "Текст"],
            ["{{ループ}}", "петля"],
            ["{{音量}}", "громкость"],
            ["{{ビデオ}}", "Видео"],
            ["{{イージング}}", "облегчение"],
            ["{{サウンド}}", "звук"],
            ["{{シンボル}}", "Символ"],
            ["{{名前}}", "Имя"],
            ["{{オブジェクト}}", "объект"],
            ["{{ステージ設定}}", "Постановка сцены"],
            ["{{プレビュー}}", "Предварительный просмотр"],
            ["{{削除}}", "Удалить"],
            ["{{ペースト}}", "Паста"],
            ["{{コピー}}", "Копировать"],
            ["{{プラグインメニュー}}", "Меню подключаемых модулей"],
            ["{{トゥイーン}}", "между"],
            ["{{カーブポインターの追加}}", "Дополнительный указатель кривой"],
            ["{{パスの結合}}", "Объединение путей"],
            ["{{シェイプ}}", "форма"],
            ["{{キーフレームに配分}}", "Распределение по ключевым кадрам"],
            ["{{レイヤーに配分}}", "Распределение по слоям"],
            ["{{タイムライン}}", "временная шкала"],
            ["{{整列}}", "Выровнять"],
            ["{{最背面}}", "Большая часть спины"],
            ["{{ひとつ背面へ}}", "Один в задней части"],
            ["{{ひとつ前面へ}}", "Один фронт"],
            ["{{最前面}}", "На переднем крае"],
            ["{{重ね順}}", "Организуйте"],
            ["{{プラグイン}}", "плагин"],
            ["{{ライブラリ}}", "библиотека"],
            ["{{プロパティ}}", "собственность"],
            ["{{マスクレイヤー}}", "слой маски"],
            ["{{通常レイヤー}}", "Нормальный слой"],
            ["{{モーショントゥイーンの削除}}", "Удаление твинов движения"],
            ["{{モーショントゥイーンの追加}}", "Дополнительные твины движения"],
            ["{{モーダル表示}}", "модальная индикация"],
            ["{{言語}}", "Язык"],
            ["{{フォーマット}}", "формат"],
            ["{{含める}}", "включать"],
            ["{{含めない}}", "не включать"],
            ["{{使い方、リファレンス}}", "Использование, ссылка"],
            ["{{非表示レイヤー}}", "скрытый слой"],
            ["{{設定}}", "настройка"],
            ["{{デフォルトのループを利用する}}", "Используйте цикл по умолчанию"],
            ["{{フレームピッカー}}", "подборщик рам"],
            ["{{ステージ左揃え}}", "Выровнять сцену слева"],
            ["{{ステージ中央揃え(水平方向)}}", "Выровняйте центр сцены (горизонтально)"],
            ["{{ステージ右揃え}}", "Выровнять сцену вправо"],
            ["{{ステージ上揃え}}", "Выровнять сцену вверх"],
            ["{{ステージ中央揃え(垂直方向)}}", "Выровняйте центр сцены (вертикально)"],
            ["{{ステージ下揃え}}", "Выровнять дно сцены"],
            ["{{左揃え}}", "Слева"],
            ["{{中央揃え(水平方向)}}", "Центр (горизонтальность)"],
            ["{{右揃え}}", "Справа"],
            ["{{上揃え}}", "Топ"],
            ["{{中央揃え(垂直方向)}}", "Центр (вертикальный)"],
            ["{{下揃え}}", "Дно"],
            ["{{開始フレーム}}", "начальная рамка"],
            ["{{終了フレーム}}", "торцевая рама"],
            ["{{ループで再生}}", "Воспроизведение по кругу"],
            ["{{1回再生}}", "1 воспроизведение"],
            ["{{指定したフレームで固定}}", "Фиксируется в указанном кадре"],
            ["{{1回逆再生}}", "1 воспроизведение в обратном направлении"],
            ["{{逆ループで再生}}", "Воспроизведение в обратном цикле"],
            ["{{画面の拡大・縮小}}", "Увеличение и уменьшение масштаба экрана"],
            ["{{カスタムイージングデータを保存}}", "Сохраните данные пользовательского смягчения"],
            ["{{カスタムイージングデータの読込}}", "Чтение пользовательских данных о смягчении"],
            ["{{プレビューのON/OFF}}", "Включение/выключение предварительного просмотра"],
            ["{{フォント枠サイズ}}", "Размер рамки шрифта"],
            ["{{フォント枠カラー}}", "Цвет шрифтовой рамки"],
            ["{{オニオンスキン}}", "Луковая шкурка"],
            ["{{バケツツール}}", "Ведерные инструменты"],
            ["{{ペンツール}}", "Инструмент \"Перо"],
            ["{{ダブルクリックでカーブポイントが追加されます}}", "Дважды щелкните, чтобы добавить точку кривой"],
            ["{{選択ツール}}", "Инструменты выбора"],
            ["{{Shape変形ツール}}", "Инструмент преобразования формы"],
            ["{{テキストツール}}", "Текстовый инструмент"],
            ["{{矩形ツール}}", "Инструмент \"Прямоугольник"],
            ["{{楕円ツール}}", "Инструмент \"Эллипс"],
            ["{{角丸矩形ツール}}", "Инструмент \"Скругленный прямоугольник"],
            ["{{塗りのカラー}}", "Цвет заливки"],
            ["{{線のカラー}}", "Цвет штриха"],
            ["{{線の太さ}}", "Ширина штриха"],
            ["{{プロジェクトデータの読込}}", "Загрузка данных проекта"],
            ["{{プロジェクトデータを保存}}", "Сохранить данные проекта"],
            ["{{書き出し}}", "Экспорт"],
            ["{{Discordへ移動}}", "Зайдите в дискорд"],
            ["{{バグ報告}}", "Сообщения об ошибках"],
            ["{{設定}}", "Настройка"],
            ["{{タブを追加}}", "Добавить вкладку"],
            ["{{タブの一覧を表示・移動}}", "Просмотр и перемещение по списку вкладок"],
            ["{{スクリプトを追加}}", "Добавить сценарий"],
            ["{{キーフレームを追加}}", "Добавить ключевой кадр"],
            ["{{空のキーフレームを追加}}", "Добавьте пустой ключевой кадр"],
            ["{{フレームを追加}}", "Добавить рамку"],
            ["{{フレームを削除}}", "Удалить рамку"],
            ["{{再生}}", "Играть"],
            ["{{停止}}", "Остановить"],
            ["{{ループ設定}}", "Настройка контура"],
            ["{{レイヤーを追加}}", "Добавить слой"],
            ["{{レイヤーを削除}}", "Удалить слой"],
            ["{{全てのレイヤーをハイライト}}", "Выделите все слои"],
            ["{{全てのレイヤーを非表示}}", "Скрыть все слои"],
            ["{{全てのレイヤーをロック}}", "Заблокируйте все слои"],
            ["{{比率を固定}}", "Фиксированный коэффициент"],
            ["{{ステージの幅}}", "Ширина сцены"],
            ["{{背景色}}", "Цвет фона"],
            ["{{ステージの高さ}}", "Высота сцены"],
            ["{{フレームレート}}", "Частота кадров"],
            ["{{シンボル名}}", "Название символа"],
            ["{{イージング設定}}", "Установка облегчения"],
            ["{{ビデオの音量設定}}", "Настройка громкости видео"],
            ["{{自動再生}}", "Автоматическое воспроизведение"],
            ["{{テキストエリアのボーダー設定}}", "Настройка границ текстовой области"],
            ["{{テキスト入力設定}}", "Настройка ввода текста"],
            ["{{フォント選択}}", "Выбор шрифта"],
            ["{{自動サイズ調整}}", "Автоматическая регулировка размера"],
            ["{{フォントスタイルタイプ}}", "Тип стиля шрифта"],
            ["{{行揃え}}", "Выровнять"],
            ["{{改行設定}}", "Установка новой строки"],
            ["{{スクロール設定}}", "Настройка прокрутки"],
            ["{{フォントサイズ}}", "Размер шрифта"],
            ["{{フォントカラー}}", "Цвет шрифта"],
            ["{{行間}}", "Пространство линии"],
            ["{{文字幅}}", "Ширина символа"],
            ["{{左マージン}}", "Левое поле"],
            ["{{右マージン}}", "Правая граница"],
            ["{{カラー種別の選択}}", "Выберите тип цвета"],
            ["{{背景画像の選択}}", "Выбор фонового изображения"],
            ["{{カラーポインターを追加}}", "Добавьте указатели цвета"],
            ["{{カラー値}}", "Цвет"],
            ["{{アルファ(0%-100%)}}", "Альфа(0%-100%)"],
            ["{{アルファ値}}", "Альфа"],
            ["{{選択対象の幅}}", "Ширина объекта выделения"],
            ["{{選択対象のX座標}}", "X координата объекта выделения"],
            ["{{選択対象の高さ}}", "Высота объекта выделения"],
            ["{{選択対象のY座標}}", "Y координата объекта выделения"],
            ["{{選択対象の幅の伸縮}}", "масштабX выбранного объекта"],
            ["{{選択対象を回転}}", "Повернуть объект"],
            ["{{選択対象の高さの伸縮}}", "scaleY выбранного объекта"],
            ["{{アルファオフセット(-255〜255)}}", "Альфа-смещение(-255〜255)"],
            ["{{赤(0%-100%)}}", "Красный(0%-100%)"],
            ["{{赤オフセット(-255〜255)}}", "Красное смещение(-255〜255)"],
            ["{{緑(0%-100%)}}", "Зеленый(0%-100%)"],
            ["{{緑オフセット(-255〜255)}}", "Зеленый зачет(-255〜255)"],
            ["{{青(0%-100%)}}", "Голубой(0%-100%)"],
            ["{{青オフセット(-255〜255)}}", "Синее смещение(-255〜255)"],
            ["{{ブレンドモード}}", "Режим наложения"],
            ["{{フィルターを選択}}", "Выберите фильтр"],
            ["{{フィルターを追加}}", "Добавить фильтр"],
            ["{{サウンドを追加}}", "Добавить звук"],
            ["{{フィルターを表示・非表示する}}", "Показать и скрыть фильтры"],
            ["{{フィルターを削除}}", "Удалить фильтр"],
            ["{{水平方向にぼかす}}", "Размытие по горизонтали"],
            ["{{垂直方向にぼかす}}", "Размытие по вертикали"],
            ["{{フィルター強度}}", "Прочность фильтра"],
            ["{{フィルター角度}}", "Угол фильтрации"],
            ["{{シャドウのアルファ}}", "Тень Альфа"],
            ["{{シャドウのカラー}}", "Цвет теней"],
            ["{{フィルター距離}}", "Расстояние между фильтрами"],
            ["{{ハイライトのカラー}}", "Цвет подсветки"],
            ["{{ハイライトのアルファ}}", "Выделение Альфа"],
            ["{{グラデーションカラー}}", "Цвет градиента"],
            ["{{グラデーションのアルファ}}", "Градиент Альфа"],
            ["{{タブの移動・名前を変更}}", "Переместить/именовать вкладки"],
            ["{{プロジェクトを閉じる}}", "Закрыть проект"],
            ["{{上下に移動}}", "Двигайтесь вверх и вниз"],
            ["{{レイヤー変更(ダブルクリック)}}", "Смена слоя (двойной щелчок)"],
            ["{{レイヤーをハイライト}}", "Выделительный слой"],
            ["{{レイヤーを非表示}}", "Скрыть слой"],
            ["{{レイヤーをロック}}", "Заблокировать слой"],
            ["{{カーブポインター(ダブルクリックでON/OFF)}}", "Указатель кривой (двойной щелчок для включения/выключения)"],
            ["{{インスタンス名}}", "Имя экземпляра"],
            ["{{ライブラリ内の検索}}", "Поиск в библиотеке"],
            ["{{フレームラベル}}", "Рамочная этикетка"],
            ["{{プロジェクトが保存されていない場合、このタブのプロジェクトデータを復旧する事はできません。タブを削除しますか？}}", "Если проект не сохранен, данные проекта на этой вкладке не могут быть восстановлены. Вы хотите удалить вкладку?"]
        ]);
    }
}
