/**
 * @class
 * @extends Language
 */
class Finland extends Language
{
    /**
     * @return {Map}
     * @method
     * @public
     */
    createMapping ()
    {
        return new Map([
            ["{{書き出し先の選択}}", "Vientikohteen valitseminen"],
            ["{{画質}}", "kuvanlaatu"],
            ["{{座標}}", "koordinaatti"],
            ["{{MovieClipを編集}}", "Muokkaa MovieClipiä."],
            ["{{親の階層へ移動}}", "Siirry vanhemman hierarkiaan"],
            ["{{ロックされたレイヤーです}}", "Lukittu kerros."],
            ["{{トゥイーンには複数のオブジェクトを設置できません}}", "Useita objekteja ei voi sijoittaa väliin."],
            ["{{名前が重複しています}}", "Kaksinkertaiset nimet."],
            ["{{名前は必須です}}", "Nimi vaaditaan."],
            ["{{基準点}}", "vertailukohta"],
            ["{{自由変形ツール}}", "Ilmainen Transform Tool -työkalu"],
            ["{{キーフレームに変換}}", "Muunnettu avainkehyksiksi"],
            ["{{空のキーフレームに変換}}", "Muunnetaan tyhjiksi avainkehyksiksi."],
            ["{{最初のフレームに移動}}", "Siirry ensimmäiseen ruutuun"],
            ["{{最後のフレームに移動}}", "Siirry viimeiseen ruutuun"],
            ["{{SWFを解析中}}", "Analysoitava SWF."],
            ["{{JSONを生成}}", "Luo JSON"],
            ["{{ファイルを生成}}", "Luo tiedosto"],
            ["{{N2Dファイルの読み込み}}", "N2D-tiedostojen lataaminen."],
            ["{{JSONの読み込み}}", "JSONin lukeminen."],
            ["{{データを解凍中}}", "Tietoja puretaan."],
            ["{{データを圧縮中}}", "Tietojen pakkaaminen."],
            ["{{エンコード}}", "koodaa"],
            ["{{外部ファイルの読み込み}}", "Ulkoisten tiedostojen lataaminen"],
            ["{{バイナリデータを生成}}", "Luo binääritietoja."],
            ["{{データベースを起動}}", "Käynnistä tietokanta"],
            ["{{データを保存中}}", "Tietojen tallentaminen."],
            ["{{完了}}", "valmistuminen"],
            ["{{ステージ左揃え}}", "vasemmanpuoleinen linjaus"],
            ["{{ステージ中央揃え(水平方向)}}", "Vaihe keskitetty (vaakasuora)"],
            ["{{ステージ右揃え}}", "Vaiheen oikea kohdistus"],
            ["{{ステージ上揃え}}", "esiintyminen lavalla"],
            ["{{ステージ中央揃え(垂直方向)}}", "Lava keskitetty (pystysuora)"],
            ["{{ステージ下揃え}}", "perustelut"],
            ["{{定規}}", "viivotin"],
            ["{{表示}}", "näyttö"],
            ["{{ショートカット}}", "pikakuvake"],
            ["{{レイヤーを複製}}", "Kaksoiskerros"],
            ["{{未使用のフォルダを削除}}", "Poista käyttämättömät kansiot."],
            ["{{同名のアイテムが存在します}}", "Samannimisiä kohteita on olemassa."],
            ["{{追加ファイル}}", "lisätiedosto"],
            ["{{既存のコンテンツ}}", "Olemassa oleva sisältö."],
            ["{{上書きするか、ファイル名を変更して追加するか、スキップを選択する事ができます}}", "Voit valita, haluatko korvata, nimetä uudelleen ja lisätä tiedostoja vai ohittaa tiedostot."],
            ["{{全て上書き}}", "Korvaa kaikki"],
            ["{{全てスキップ}}", "Ohita kaikki."],
            ["{{追加・上書き}}", "Lisäykset ja ylikirjoitukset"],
            ["{{スキップ}}", "ohita"],
            ["{{表示確認したいフレームを指定}}", "Määritä kehys, jonka näytön haluat tarkistaa."],
            ["{{ファイル名を指定}}", "Määritä tiedoston nimi"],
            ["{{ファイル名}}", "tiedostonimi"],
            ["{{終了フレームを指定}}", "Määritä päätykehys"],
            ["{{開始フレームを指定}}", "Määritä aloituskehys"],
            ["{{フレーム設定}}", "runkoasetus"],
            ["{{書き出し設定}}", "Vientiasetukset"],
            ["{{ファイル形式の選択}}", "Tiedostomuodon valitseminen"],
            ["{{ファイル形式}}", "tiedostomuoto"],
            ["{{サイズ設定}}", "Mitoitus"],
            ["{{左上}}", "vasen-ylös"],
            ["{{中央上}}", "keski-yläosassa"],
            ["{{右上}}", "oikeanpuoleinen yläosa"],
            ["{{中央左}}", "keskusta-vasemmistolainen"],
            ["{{中央}}", "keskus"],
            ["{{中央右}}", "keskustaoikeisto"],
            ["{{左下}}", "alhaalla vasemmalla"],
            ["{{中央下}}", "alempi keskitaso"],
            ["{{右下}}", "oikean alakulman"],
            ["{{中心点のX座標}}", "Keskipisteen X-koordinaatti"],
            ["{{中心点のY座標}}", "Keskipisteen Y-koordinaatti"],
            ["{{MovieClipに変換}}", "Muunna MovieClipiksi"],
            ["{{変換}}", "transformaatio"],
            ["{{ループ回数}}", "Silmukoiden määrä"],
            ["{{カーブポインターの削除}}", "Poista käyrän osoitin."],
            ["{{ステージ基準}}", "Vaiheen kriteerit"],
            ["{{閉じる}}", "lähellä"],
            ["{{保存}}", "varastointi"],
            ["{{リセット}}", "nollaa"],
            ["{{スクリーン}}", "näyttö"],
            ["{{ショートカット設定}}", "Pikavalinta-asetukset"],
            ["{{レイヤーカラー}}", "kerroksellinen väri"],
            ["{{Next2Dを支援する}}", "Tuki Next2D."],
            ["{{サポート}}", "tuki"],
            ["{{未使用のアイテムを削除}}", "Poista käyttämättömät tuotteet"],
            ["{{レイヤーをペースト}}", "Liisterikerros."],
            ["{{レイヤーをコピー}}", "Kopioi kerros"],
            ["{{フレームをペースト}}", "Liitä kehys."],
            ["{{フレームをコピー}}", "Kopioi kehys."],
            ["{{キーフレームを削除}}", "Poista avainkehykset."],
            ["{{キーフレームに空のキーフレームを追加できません}}", "Tyhjiä avainkehyksiä ei voi lisätä avainkehyksiin"],
            ["{{ズームツール}}", "Zoom-työkalu"],
            ["{{タイムライン幅の拡大・縮小}}", "Aikajanan leveyden laajentaminen ja pienentäminen"],
            ["{{ガイドレイヤー}}", "ohjaava kerros"],
            ["{{音量設定}}", "Äänenvoimakkuuden asetus"],
            ["{{サウンドを削除}}", "Poista ääni."],
            ["{{カスタムループ}}", "räätälöity silmukka"],
            ["{{読込のみ}}", "Vain luku"],
            ["{{書込を許可}}", "postituslupa"],
            ["{{単一行}}", "yksinkertainen linja"],
            ["{{複数行}}", "monirivinen"],
            ["{{自動で折り返し}}", "Automaattinen kääntyminen"],
            ["{{左寄せ}}", "vasemmalle tasattu"],
            ["{{中央揃え}}", "keskitys"],
            ["{{右寄せ}}", "oikealle tasattu"],
            ["{{放射状グラデーション}}", "säteittäinen porrastus"],
            ["{{線形グラデーション}}", "lineaarinen gradientti"],
            ["{{画像}}", "Kuva."],
            ["{{画像選択}}", "Kuvan valinta"],
            ["{{種別}}", "luokitus"],
            ["{{Shapeの色設定}}", "Muodon väriasetukset"],
            ["{{変形}}", "muodonmuutos"],
            ["{{カラー効果}}", "värivaikutus"],
            ["{{フィルター}}", "suodatin"],
            ["{{Shapeを複製}}", "Duplicate Shape."],
            ["{{読み込み}}", "Lue sisään"],
            ["{{新規フォルダー}}", "Uusi kansio"],
            ["{{新規MovieClip}}", "Uusi MovieClip."],
            ["{{枠に合わせてテキストをリサイズ}}", "Muuta tekstin kokoa kehykseen sopivaksi."],
            ["{{テキストに合わせて枠をリサイズ}}", "Muuta kehyksen kokoa tekstin mukaan."],
            ["{{リサイズしない}}", "Ei koon muuttamista"],
            ["{{フォント}}", "fontti"],
            ["{{テキスト}}", "Teksti."],
            ["{{ループ}}", "silmukka"],
            ["{{音量}}", "äänenvoimakkuus"],
            ["{{ビデオ}}", "Video."],
            ["{{イージング}}", "helpottaminen"],
            ["{{サウンド}}", "ääni"],
            ["{{シンボル}}", "symboli"],
            ["{{名前}}", "Nimi."],
            ["{{オブジェクト}}", "kohde"],
            ["{{ステージ設定}}", "Lavastus"],
            ["{{プレビュー}}", "esikatselu"],
            ["{{削除}}", "poisto"],
            ["{{ペースト}}", "liitä"],
            ["{{コピー}}", "kopioi"],
            ["{{プラグインメニュー}}", "Plug-in-valikko"],
            ["{{トゥイーン}}", "tween"],
            ["{{カーブポインターの追加}}", "Lisäkäyrän osoitin."],
            ["{{パスの結合}}", "Polkujen yhdistäminen"],
            ["{{シェイプ}}", "muoto"],
            ["{{キーフレームに配分}}", "Allokointi avainkehyksille"],
            ["{{レイヤーに配分}}", "Jakaminen kerroksille"],
            ["{{タイムライン}}", "Aikajana"],
            ["{{整列}}", "linjaus"],
            ["{{最背面}}", "viimeisin"],
            ["{{ひとつ背面へ}}", "Yksi takana."],
            ["{{ひとつ前面へ}}", "Yksi eteen."],
            ["{{最前面}}", "tärkein"],
            ["{{重ね順}}", "superpositio"],
            ["{{プラグイン}}", "plug-in"],
            ["{{ライブラリ}}", "kirjasto"],
            ["{{プロパティ}}", "omaisuus"],
            ["{{マスクレイヤー}}", "naamiokerros"],
            ["{{通常レイヤー}}", "Normaali kerros"],
            ["{{モーショントゥイーンの削除}}", "Liikkeeseen liittyvien tweens-elementtien poistaminen."],
            ["{{モーショントゥイーンの追加}}", "Lisäliike tweens."],
            ["{{モーダル表示}}", "modaalinen merkintä"],
            ["{{言語}}", "Kieli."],
            ["{{フォーマット}}", "muoto"],
            ["{{含める}}", "sisältää"],
            ["{{含めない}}", "ei sisällä"],
            ["{{使い方、リファレンス}}", "Käyttö, viite."],
            ["{{非表示レイヤー}}", "piilokerros"],
            ["{{設定}}", "asetus"],
            ["{{デフォルトのループを利用する}}", "Käytä oletussilmukkaa."],
            ["{{フレームピッカー}}", "kehyksen poiminta"],
            ["{{左揃え}}", "vasen oikeutus"],
            ["{{中央揃え(水平方向)}}", "Keskitetty (vaakasuora)"],
            ["{{右揃え}}", "oikea perustelu"],
            ["{{上揃え}}", "perustelut"],
            ["{{中央揃え(垂直方向)}}", "Keskitetty (pystysuora)"],
            ["{{下揃え}}", "perustelut"],
            ["{{開始フレーム}}", "aloituskehys"],
            ["{{終了フレーム}}", "päätykehys"],
            ["{{ループで再生}}", "Toista silmukassa"],
            ["{{1回再生}}", "1 toisto"],
            ["{{指定したフレームで固定}}", "Kiinnitetty määritettyyn kehykseen."],
            ["{{1回逆再生}}", "1 käänteinen toisto"],
            ["{{逆ループで再生}}", "Toisto käänteisessä silmukassa."],
            ["{{画面の拡大・縮小}}", "Näytön zoomaaminen sisään ja ulos"],
            ["{{カスタムイージングデータを保存}}", "Tallenna mukautetut easing-tiedot."],
            ["{{カスタムイージングデータの読込}}", "Mukautettujen helpotustietojen lukeminen."],
            ["{{プレビューのON/OFF}}", "Esikatselu päälle/pois."],
            ["{{フォント枠サイズ}}", "fontin runkokoko"],
            ["{{フォント枠カラー}}", "Fontin kehyksen väri"],
            ["{{オニオンスキン}}", "sipulikuori"],
            ["{{バケツツール}}", "Kauhatyökalut"],
            ["{{ペンツール}}", "kynätyökalu"],
            ["{{ダブルクリックでカーブポイントが追加されます}}", "Lisää käyrän piste kaksoisnapsauttamalla"],
            ["{{選択ツール}}", "valintatyökalu"],
            ["{{Shape変形ツール}}", "Muodonmuodostustyökalut"],
            ["{{テキストツール}}", "tekstityökalu"],
            ["{{矩形ツール}}", "Suorakulmio-työkalu"],
            ["{{楕円ツール}}", "Elliptiset työkalut"],
            ["{{角丸矩形ツール}}", "Pyöristetty kulma suorakulmio työkalu"],
            ["{{塗りのカラー}}", "Maalin väri"],
            ["{{線のカラー}}", "Viivan väri"],
            ["{{線の太さ}}", "viivan paksuus"],
            ["{{プロジェクトデータの読込}}", "Projektin tietojen lukeminen"],
            ["{{プロジェクトデータを保存}}", "Tallenna projektin tiedot."],
            ["{{書き出し}}", "avauslause tai -kappale"],
            ["{{Discordへ移動}}", "Siirry Discordiin"],
            ["{{バグ報告}}", "vikailmoitus"],
            ["{{設定}}", "asetus (tietokoneen tai tiedoston jne.)"],
            ["{{タブを追加}}", "Lisää välilehti."],
            ["{{タブの一覧を表示・移動}}", "Välilehtien luettelon näyttäminen ja siirtäminen"],
            ["{{スクリプトを追加}}", "Lisää käsikirjoitus."],
            ["{{キーフレームを追加}}", "Lisää avainkehyksiä."],
            ["{{空のキーフレームを追加}}", "Lisää tyhjiä avainkehyksiä."],
            ["{{フレームを追加}}", "Lisää kehys."],
            ["{{フレームを削除}}", "Irrota kehys."],
            ["{{再生}}", "uudistuminen"],
            ["{{停止}}", "musiikin, tanssin jne. keskeyttäminen surun merkkinä."],
            ["{{ループ設定}}", "Silmukka-asetukset"],
            ["{{レイヤーを追加}}", "Lisää kerros."],
            ["{{レイヤーを削除}}", "Poista kerros."],
            ["{{全てのレイヤーをハイライト}}", "Korosta kaikki kerrokset"],
            ["{{全てのレイヤーを非表示}}", "Piilota kaikki kerrokset"],
            ["{{全てのレイヤーをロック}}", "Lukitse kaikki kerrokset."],
            ["{{比率を固定}}", "Kiinteä suhde"],
            ["{{ステージの幅}}", "Lavan leveys"],
            ["{{背景色}}", "taustaväri"],
            ["{{ステージの高さ}}", "Lavan korkeus."],
            ["{{フレームレート}}", "kuvataajuus"],
            ["{{シンボル名}}", "symbolin nimi"],
            ["{{イージング設定}}", "Rauhoittamisasetus"],
            ["{{ビデオの音量設定}}", "Videon äänenvoimakkuuden asetukset"],
            ["{{自動再生}}", "automaattinen toisto"],
            ["{{テキストエリアのボーダー設定}}", "Tekstialueiden reunusasetukset."],
            ["{{テキスト入力設定}}", "tekstinsyöttöasetus"],
            ["{{フォント選択}}", "Fontin valinta"],
            ["{{自動サイズ調整}}", "Automaattinen koon muuttaminen"],
            ["{{フォントスタイルタイプ}}", "fontin tyyli tyyppi"],
            ["{{行揃え}}", "perustella"],
            ["{{改行設定}}", "rivinvaihdon asetus"],
            ["{{スクロール設定}}", "Vieritysasetukset"],
            ["{{フォントサイズ}}", "fonttikoko"],
            ["{{フォントカラー}}", "fontin väri"],
            ["{{行間}}", "rivien välissä"],
            ["{{文字幅}}", "merkin leveys"],
            ["{{左マージン}}", "vasen marginaali"],
            ["{{右マージン}}", "oikea marginaali"],
            ["{{カラー種別の選択}}", "Valitse värityyppi"],
            ["{{背景画像の選択}}", "Taustakuvan valitseminen"],
            ["{{カラーポインターを追加}}", "Lisäväriosoitin."],
            ["{{カラー値}}", "väriarvo"],
            ["{{アルファ(0%-100%)}}", "Alpha (0%-100%)"],
            ["{{アルファ値}}", "alfa-arvo"],
            ["{{選択対象の幅}}", "Valintakohteen leveys"],
            ["{{選択対象のX座標}}", "Valintakohteen X-koordinaatti"],
            ["{{選択対象の高さ}}", "Valintakohteen korkeus"],
            ["{{選択対象のY座標}}", "Valintakohteen Y-koordinaatti"],
            ["{{選択対象の幅の伸縮}}", "Valintakohteen leveyden venyttäminen ja kutistaminen"],
            ["{{選択対象を回転}}", "Kierrä valinta"],
            ["{{選択対象の高さの伸縮}}", "Valintakohteen korkeuden laajentaminen ja supistaminen."],
            ["{{アルファオフセット(-255〜255)}}", "Alpha offset (-255-255)"],
            ["{{赤(0%-100%)}}", "Punainen (0%-100%)"],
            ["{{赤オフセット(-255〜255)}}", "Punainen offset (-255-255)"],
            ["{{緑(0%-100%)}}", "Vihreä (0%-100%)"],
            ["{{緑オフセット(-255〜255)}}", "Vihreä offset (-255-255)"],
            ["{{青(0%-100%)}}", "Sininen (0%-100%)"],
            ["{{青オフセット(-255〜255)}}", "Sininen offset (-255-255)"],
            ["{{ブレンドモード}}", "sekoitustila"],
            ["{{フィルターを選択}}", "Valitse suodatin"],
            ["{{フィルターを追加}}", "Lisää suodatin."],
            ["{{サウンドを追加}}", "Lisää ääntä."],
            ["{{フィルターを表示・非表示する}}", "Näytä/piilota suodattimet"],
            ["{{フィルターを削除}}", "Poista suodattimet."],
            ["{{水平方向にぼかす}}", "Sameus vaakasuunnassa."],
            ["{{垂直方向にぼかす}}", "Pystysuora sumeus."],
            ["{{フィルター強度}}", "Suodattimen vahvuus"],
            ["{{フィルター角度}}", "Suodatinkulma"],
            ["{{シャドウのアルファ}}", "Shadow's Alpha."],
            ["{{シャドウのカラー}}", "Varjojen värit."],
            ["{{フィルター距離}}", "Suodattimen etäisyys"],
            ["{{ハイライトのカラー}}", "Värilliset korostukset"],
            ["{{ハイライトのアルファ}}", "Korosta Alpha."],
            ["{{グラデーションカラー}}", "Gradation väri"],
            ["{{グラデーションのアルファ}}", "Gradientin alfa"],
            ["{{タブの移動・名前を変更}}", "Välilehtien siirtäminen ja uudelleennimeäminen"],
            ["{{プロジェクトを閉じる}}", "Sulje projekti"],
            ["{{上下に移動}}", "Siirry ylös ja alas"],
            ["{{レイヤー変更(ダブルクリック)}}", "Kerroksen vaihto (kaksoisnapsautus)"],
            ["{{レイヤーをハイライト}}", "Korosta kerrokset."],
            ["{{レイヤーを非表示}}", "Piilota kerrokset."],
            ["{{レイヤーをロック}}", "Lukitse kerrokset."],
            ["{{カーブポインター(ダブルクリックでON/OFF)}}", "Käyräosoitin (kaksoisnapsauttamalla voit kytkeä sen päälle/pois)."],
            ["{{インスタンス名}}", "instanssin nimi"],
            ["{{ライブラリ内の検索}}", "Haku kirjastossa"],
            ["{{フレームラベル}}", "kehyksen etiketti"],
            ["{{プロジェクトが保存されていない場合、このタブのプロジェクトデータを復旧する事はできません。タブを削除しますか？}}}}", "Jos projektia ei tallenneta, tämän välilehden projektitietoja ei voida palauttaa. Haluatko poistaa välilehden?}}"]
        ]);
    }
}
