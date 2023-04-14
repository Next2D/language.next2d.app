/**
 * @class
 * @extends Language
 */
class Romania extends Language
{
    /**
     * @return {Map}
     * @method
     * @public
     */
    createMapping ()
    {
        return new Map([
            ["{{書き出し先の選択}}", "Selectarea destinației de export"],
            ["{{画質}}", "calitatea imaginii"],
            ["{{座標}}", "coordonate"],
            ["{{MovieClipを編集}}", "Editați MovieClip."],
            ["{{親の階層へ移動}}", "Mutarea în ierarhia părintească"],
            ["{{ロックされたレイヤーです}}", "Strat blocat."],
            ["{{トゥイーンには複数のオブジェクトを設置できません}}", "Nu pot fi plasate mai multe obiecte pe un tween."],
            ["{{名前が重複しています}}", "Nume duplicate."],
            ["{{名前は必須です}}", "Numele este obligatoriu."],
            ["{{基準点}}", "punct de referință"],
            ["{{自由変形ツール}}", "Instrument gratuit de transformare"],
            ["{{キーフレームに変換}}", "Convertit în cadre cheie"],
            ["{{空のキーフレームに変換}}", "Convertit în cadre cheie goale."],
            ["{{最初のフレームに移動}}", "Mergeți la primul cadru"],
            ["{{最後のフレームに移動}}", "Mergeți la ultimul cadru"],
            ["{{SWFを解析中}}", "SWF analizat."],
            ["{{JSONを生成}}", "Generați JSON"],
            ["{{ファイルを生成}}", "Generarea fișierului"],
            ["{{N2Dファイルの読み込み}}", "Încărcarea fișierelor N2D."],
            ["{{JSONの読み込み}}", "Citirea JSON."],
            ["{{データを解凍中}}", "Datele sunt despachetate."],
            ["{{データを圧縮中}}", "Comprimarea datelor."],
            ["{{エンコード}}", "codificați"],
            ["{{外部ファイルの読み込み}}", "Încărcarea fișierelor externe"],
            ["{{バイナリデータを生成}}", "Generarea de date binare."],
            ["{{データベースを起動}}", "Începeți baza de date"],
            ["{{データを保存中}}", "Stocarea datelor."],
            ["{{完了}}", "finalizare"],
            ["{{ステージ左揃え}}", "alinierea la stânga scenei"],
            ["{{ステージ中央揃え(水平方向)}}", "Scenă centrată (orizontală)"],
            ["{{ステージ右揃え}}", "Alinierea la dreapta scenei"],
            ["{{ステージ上揃え}}", "performanță pe scenă"],
            ["{{ステージ中央揃え(垂直方向)}}", "Scenă centrată (verticală)"],
            ["{{ステージ下揃え}}", "justificare"],
            ["{{定規}}", "riglă"],
            ["{{表示}}", "afișare"],
            ["{{ショートカット}}", "comandă rapidă"],
            ["{{レイヤーを複製}}", "Duplicarea stratului"],
            ["{{未使用のフォルダを削除}}", "Ștergeți folderele nefolosite."],
            ["{{同名のアイテムが存在します}}", "Există un element cu același nume."],
            ["{{追加ファイル}}", "fișier suplimentar"],
            ["{{既存のコンテンツ}}", "Conținutul existent."],
            ["{{上書きするか、ファイル名を変更して追加するか、スキップを選択する事ができます}}", "Puteți alege să suprascrieți, să redenumiți și să adăugați fișiere sau să săriți"],
            ["{{全て上書き}}", "Suprascrie toate"],
            ["{{全てスキップ}}", "Treci peste toate."],
            ["{{追加・上書き}}", "Adăugiri și suprascrieri"],
            ["{{スキップ}}", "skip"],
            ["{{表示確認したいフレームを指定}}", "Specificați cadrul pentru care doriți să verificați afișajul."],
            ["{{ファイル名を指定}}", "Specificați numele fișierului"],
            ["{{ファイル名}}", "nume de fișier"],
            ["{{終了フレームを指定}}", "Specificați cadrul final"],
            ["{{開始フレームを指定}}", "Specificați cadrul de pornire"],
            ["{{フレーム設定}}", "configurația cadrului"],
            ["{{書き出し設定}}", "Setări de export"],
            ["{{ファイル形式の選択}}", "Selectarea formatului de fișier"],
            ["{{ファイル形式}}", "format de fișier"],
            ["{{サイズ設定}}", "Dimensionarea"],
            ["{{左上}}", "stânga-sus"],
            ["{{中央上}}", "centru-superioară"],
            ["{{右上}}", "dreapta-sus"],
            ["{{中央左}}", "centru-stânga"],
            ["{{中央}}", "central"],
            ["{{中央右}}", "centru-dreapta"],
            ["{{左下}}", "stânga jos"],
            ["{{中央下}}", "mediu-jos"],
            ["{{右下}}", "dreapta-jos"],
            ["{{中心点のX座標}}", "Coordonata X a punctului central"],
            ["{{中心点のY座標}}", "Coordonata Y a punctului central"],
            ["{{MovieClipに変換}}", "Conversia în MovieClip"],
            ["{{変換}}", "transformare"],
            ["{{ループ回数}}", "Număr de bucle"],
            ["{{カーブポインターの削除}}", "Ștergeți indicatorul de curbă."],
            ["{{ステージ基準}}", "Criterii de etapă"],
            ["{{閉じる}}", "aproape"],
            ["{{保存}}", "depozitare"],
            ["{{リセット}}", "resetare"],
            ["{{スクリーン}}", "ecran"],
            ["{{ショートカット設定}}", "Setări de comenzi rapide"],
            ["{{レイヤーカラー}}", "culoare stratificată"],
            ["{{Next2Dを支援する}}", "Sprijină Next2D."],
            ["{{サポート}}", "suport"],
            ["{{未使用のアイテムを削除}}", "Îndepărtați articolele neutilizate"],
            ["{{レイヤーをペースト}}", "Strat de pastă."],
            ["{{レイヤーをコピー}}", "Copiere strat"],
            ["{{フレームをペースト}}", "Lipiți cadrul."],
            ["{{フレームをコピー}}", "Cadru de copiere."],
            ["{{キーフレームを削除}}", "Ștergeți cadrele cheie."],
            ["{{キーフレームに空のキーフレームを追加できません}}", "Nu se pot adăuga cadre cheie goale la cadrele cheie"],
            ["{{ズームツール}}", "Instrumentul Zoom"],
            ["{{タイムライン幅の拡大・縮小}}", "Extinderea și reducerea lățimii liniei de timp"],
            ["{{ガイドレイヤー}}", "strat de ghidare"],
            ["{{音量設定}}", "Setarea volumului"],
            ["{{サウンドを削除}}", "Îndepărtați sunetul."],
            ["{{カスタムループ}}", "buclă personalizată"],
            ["{{読込のみ}}", "Doar citire"],
            ["{{書込を許可}}", "permisiunea de postare"],
            ["{{単一行}}", "linie simplă"],
            ["{{複数行}}", "multiline"],
            ["{{自動で折り返し}}", "Întoarcere automată"],
            ["{{左寄せ}}", "aliniate la stânga"],
            ["{{中央揃え}}", "centrare"],
            ["{{右寄せ}}", "aliniate la dreapta"],
            ["{{放射状グラデーション}}", "gradație radială"],
            ["{{線形グラデーション}}", "gradient liniar"],
            ["{{画像}}", "Imagine."],
            ["{{画像選択}}", "Selecția imaginii"],
            ["{{種別}}", "clasificare"],
            ["{{Shapeの色設定}}", "Setări pentru culoarea formei"],
            ["{{変形}}", "deformare"],
            ["{{カラー効果}}", "efect de culoare"],
            ["{{フィルター}}", "filtru"],
            ["{{Shapeを複製}}", "Forma duplicată."],
            ["{{読み込み}}", "citiți în"],
            ["{{新規フォルダー}}", "Dosar nou"],
            ["{{新規MovieClip}}", "Noul MovieClip."],
            ["{{枠に合わせてテキストをリサイズ}}", "Redimensionați textul pentru a se potrivi cadrului."],
            ["{{テキストに合わせて枠をリサイズ}}", "Redimensionați cadrul pentru a se potrivi cu textul."],
            ["{{リサイズしない}}", "Fără redimensionare"],
            ["{{フォント}}", "font"],
            ["{{テキスト}}", "Text."],
            ["{{ループ}}", "bucla"],
            ["{{音量}}", "volum"],
            ["{{ビデオ}}", "Video."],
            ["{{イージング}}", "relaxare"],
            ["{{サウンド}}", "sunet"],
            ["{{シンボル}}", "simbol"],
            ["{{名前}}", "Numele."],
            ["{{オブジェクト}}", "obiect"],
            ["{{ステージ設定}}", "Reglare scenică"],
            ["{{プレビュー}}", "previzualizare"],
            ["{{削除}}", "ștergere"],
            ["{{ペースト}}", "pasta"],
            ["{{コピー}}", "copie"],
            ["{{プラグインメニュー}}", "Meniul Plug-in"],
            ["{{トゥイーン}}", "între"],
            ["{{カーブポインターの追加}}", "Indicator de curbă suplimentar."],
            ["{{パスの結合}}", "Îmbinarea căilor de acces"],
            ["{{シェイプ}}", "formă"],
            ["{{キーフレームに配分}}", "Alocarea la cadrele cheie"],
            ["{{レイヤーに配分}}", "Alocarea pe straturi"],
            ["{{タイムライン}}", "cronologie"],
            ["{{整列}}", "aliniere"],
            ["{{最背面}}", "cel mai recent"],
            ["{{ひとつ背面へ}}", "Una în spate."],
            ["{{ひとつ前面へ}}", "Unul în față."],
            ["{{最前面}}", "cel mai important"],
            ["{{重ね順}}", "suprapunere"],
            ["{{プラグイン}}", "plug-in"],
            ["{{ライブラリ}}", "bibliotecă"],
            ["{{プロパティ}}", "proprietate"],
            ["{{マスクレイヤー}}", "strat de mască"],
            ["{{通常レイヤー}}", "Strat normal"],
            ["{{モーショントゥイーンの削除}}", "Ștergerea tween-urilor de mișcare."],
            ["{{モーショントゥイーンの追加}}", "Prelungirea mișcării suplimentare."],
            ["{{モーダル表示}}", "indicație modală"],
            ["{{言語}}", "Limba"],
            ["{{フォーマット}}", "Format"],
            ["{{含める}}", "include"],
            ["{{含めない}}", "să nu includă"],
            ["{{使い方、リファレンス}}", "Utilizare, referință."],
            ["{{非表示レイヤー}}", "strat ascuns"],
            ["{{設定}}", "setare"],
            ["{{デフォルトのループを利用する}}", "Utilizați bucla implicită."],
            ["{{フレームピッカー}}", "selector de cadre"],
            ["{{左揃え}}", "justificare stânga"],
            ["{{中央揃え(水平方向)}}", "Centrat (orizontal)"],
            ["{{右揃え}}", "justificarea corectă"],
            ["{{上揃え}}", "justificare"],
            ["{{中央揃え(垂直方向)}}", "Centrat (vertical)"],
            ["{{下揃え}}", "justificare"],
            ["{{開始フレーム}}", "cadru de pornire"],
            ["{{終了フレーム}}", "cadru final"],
            ["{{ループで再生}}", "Redare în buclă"],
            ["{{1回再生}}", "1 redare"],
            ["{{指定したフレームで固定}}", "Fixat în cadrul specificat."],
            ["{{1回逆再生}}", "1 redare inversă"],
            ["{{逆ループで再生}}", "Redare în buclă inversă."],
            ["{{画面の拡大・縮小}}", "Apropierea și îndepărtarea ecranului"],
            ["{{カスタムイージングデータを保存}}", "Salvare date personalizate de relaxare."],
            ["{{カスタムイージングデータの読込}}", "Citirea datelor de relaxare personalizate."],
            ["{{プレビューのON/OFF}}", "Preview on/off."],
            ["{{フォント枠サイズ}}", "dimensiunea cadrului fontului"],
            ["{{フォント枠カラー}}", "Culoarea cadrului fontului"],
            ["{{オニオンスキン}}", "ceapă de ceapă"],
            ["{{バケツツール}}", "Unelte cu găleată"],
            ["{{ペンツール}}", "instrument stilou"],
            ["{{ダブルクリックでカーブポイントが追加されます}}", "Faceți dublu clic pentru a adăuga un punct de curbă"],
            ["{{選択ツール}}", "instrument de selecție"],
            ["{{Shape変形ツール}}", "Instrumente de deformare a formei"],
            ["{{テキストツール}}", "instrument de text"],
            ["{{矩形ツール}}", "Instrumentul Dreptunghi"],
            ["{{楕円ツール}}", "Instrumente eliptice"],
            ["{{角丸矩形ツール}}", "Instrument dreptunghiular cu colț rotunjit"],
            ["{{塗りのカラー}}", "Culoarea vopselei"],
            ["{{線のカラー}}", "Culoarea liniei"],
            ["{{線の太さ}}", "grosimea liniei"],
            ["{{プロジェクトデータの読込}}", "Citirea datelor proiectului"],
            ["{{プロジェクトデータを保存}}", "Salvați datele proiectului."],
            ["{{書き出し}}", "propoziție sau paragraf de deschidere"],
            ["{{Discordへ移動}}", "Mergeți la Discord"],
            ["{{バグ報告}}", "raport de eroare"],
            ["{{設定}}", "setare"],
            ["{{タブを追加}}", "Adăugați fila."],
            ["{{タブの一覧を表示・移動}}", "Afișarea și deplasarea listei de file"],
            ["{{スクリプトを追加}}", "Adăugați un script."],
            ["{{キーフレームを追加}}", "Adăugați cadre cheie."],
            ["{{空のキーフレームを追加}}", "Adăugați cadre cheie goale."],
            ["{{フレームを追加}}", "Adăugați rama."],
            ["{{フレームを削除}}", "Îndepărtați rama."],
            ["{{再生}}", "regenerare"],
            ["{{停止}}", "suspendarea muzicii, a dansului etc. în semn de doliu"],
            ["{{ループ設定}}", "Setări de buclă"],
            ["{{レイヤーを追加}}", "Se adaugă un strat."],
            ["{{レイヤーを削除}}", "Ștergeți stratul."],
            ["{{全てのレイヤーをハイライト}}", "Evidențiați toate straturile"],
            ["{{全てのレイヤーを非表示}}", "Ascundeți toate straturile"],
            ["{{全てのレイヤーをロック}}", "Blocați toate straturile."],
            ["{{比率を固定}}", "Raport fix"],
            ["{{ステージの幅}}", "Lățimea scenei"],
            ["{{背景色}}", "culoarea de fundal"],
            ["{{ステージの高さ}}", "Înălțimea scenei."],
            ["{{フレームレート}}", "rata de cadre"],
            ["{{シンボル名}}", "numele simbolului"],
            ["{{イージング設定}}", "Setare de relaxare"],
            ["{{ビデオの音量設定}}", "Setări de volum video"],
            ["{{自動再生}}", "autoplay"],
            ["{{テキストエリアのボーダー設定}}", "Setări de margini pentru zonele de text."],
            ["{{テキスト入力設定}}", "setarea introducerii textului"],
            ["{{フォント選択}}", "Selectarea fontului"],
            ["{{自動サイズ調整}}", "Redimensionare automată"],
            ["{{フォントスタイルタイプ}}", "tip de stil de font"],
            ["{{行揃え}}", "justifică"],
            ["{{改行設定}}", "configurare pauză de linie"],
            ["{{スクロール設定}}", "Setări de defilare"],
            ["{{フォントサイズ}}", "dimensiunea fontului"],
            ["{{フォントカラー}}", "culoarea fontului"],
            ["{{行間}}", "între linii"],
            ["{{文字幅}}", "lățimea caracterelor"],
            ["{{左マージン}}", "marja stângă"],
            ["{{右マージン}}", "marja dreaptă"],
            ["{{カラー種別の選択}}", "Selectați tipul de culoare"],
            ["{{背景画像の選択}}", "Selectarea unei imagini de fundal"],
            ["{{カラーポインターを追加}}", "Indicator de culoare suplimentar."],
            ["{{カラー値}}", "valoarea culorii"],
            ["{{アルファ(0%-100%)}}", "Alfa (0%-100%)"],
            ["{{アルファ値}}", "valoarea alfa"],
            ["{{選択対象の幅}}", "Lățimea țintei de selecție"],
            ["{{選択対象のX座標}}", "Coordonata X a țintei de selecție"],
            ["{{選択対象の高さ}}", "Înălțimea țintei de selecție"],
            ["{{選択対象のY座標}}", "Coordonata Y a țintei de selecție"],
            ["{{選択対象の幅の伸縮}}", "Extinderea și micșorarea lățimii țintei de selecție"],
            ["{{選択対象を回転}}", "Rotiți selecția"],
            ["{{選択対象の高さの伸縮}}", "Extinderea și contracția înălțimii obiectivului de selecție."],
            ["{{アルファオフセット(-255〜255)}}", "Decalaj alfa (de la -255 la 255)"],
            ["{{赤(0%-100%)}}", "Roșu (0%-100%)"],
            ["{{赤オフセット(-255〜255)}}", "Decalaj roșu (-255 la 255)"],
            ["{{緑(0%-100%)}}", "Verde (0%-100%)"],
            ["{{緑オフセット(-255〜255)}}", "Offset verde (-255 la 255)"],
            ["{{青(0%-100%)}}", "Albastru (0%-100%)"],
            ["{{青オフセット(-255〜255)}}", "Decalaj albastru (-255 la 255)"],
            ["{{ブレンドモード}}", "modul de amestecare"],
            ["{{フィルターを選択}}", "Selectați filtrul"],
            ["{{フィルターを追加}}", "Adăugați un filtru."],
            ["{{サウンドを追加}}", "Adăugați sunet."],
            ["{{フィルターを表示・非表示する}}", "Afișați / ascundeți filtrele"],
            ["{{フィルターを削除}}", "Eliminați filtrele."],
            ["{{水平方向にぼかす}}", "Estomparea pe orizontală."],
            ["{{垂直方向にぼかす}}", "Neclaritate verticală."],
            ["{{フィルター強度}}", "Puterea filtrului"],
            ["{{フィルター角度}}", "Unghiul de filtrare"],
            ["{{シャドウのアルファ}}", "Shadow's Alpha."],
            ["{{シャドウのカラー}}", "Culori de umbre."],
            ["{{フィルター距離}}", "Distanța de filtrare"],
            ["{{ハイライトのカラー}}", "Evidențe de culoare"],
            ["{{ハイライトのアルファ}}", "Evidențiați Alpha."],
            ["{{グラデーションカラー}}", "culoare de gradație"],
            ["{{グラデーションのアルファ}}", "Alpha a gradientului"],
            ["{{タブの移動・名前を変更}}", "Mutarea și redenumirea filelor"],
            ["{{プロジェクトを閉じる}}", "Închideți proiectul"],
            ["{{上下に移動}}", "Mutarea în sus și în jos"],
            ["{{レイヤー変更(ダブルクリック)}}", "Schimbarea stratului (dublu clic)"],
            ["{{レイヤーをハイライト}}", "Straturi de evidențiere."],
            ["{{レイヤーを非表示}}", "Ascundeți straturile."],
            ["{{レイヤーをロック}}", "Blocați straturile de blocare."],
            ["{{カーブポインター(ダブルクリックでON/OFF)}}", "Indicatorul de curbă (faceți dublu clic pentru a activa/dezactiva)"],
            ["{{インスタンス名}}", "numele instanței"],
            ["{{ライブラリ内の検索}}", "Căutare în bibliotecă"],
            ["{{フレームラベル}}", "eticheta cadrului"],
            ["{{プロジェクトが保存されていない場合、このタブのプロジェクトデータを復旧する事はできません。タブを削除しますか？}}}}", "Dacă proiectul nu este salvat, datele proiectului pentru această filă nu pot fi recuperate. Doriți să ștergeți fila?}}}."]
        ]);
    }
}