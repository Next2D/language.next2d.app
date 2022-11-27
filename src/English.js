/**
 * @class
 * @extends Language
 */
class English extends Language
{
    /**
     * @return {Map}
     * @method
     * @public
     */
    createMapping ()
    {
        return new Map([
            ["{{最初のフレームに移動}}", "Go to First Frame"],
            ["{{最後のフレームに移動}}", "Go to Last Frame"],
            ["{{SWFを解析中}}", "SWF Being Parsed"],
            ["{{JSONを生成}}", "Generate JSON"],
            ["{{ファイルを生成}}", "Generate File"],
            ["{{N2Dファイルの読み込み}}", "Loading N2D File"],
            ["{{JSONの読み込み}}", "Loading JSON"],
            ["{{データを解凍中}}", "Decompressing Data"],
            ["{{データを圧縮中}}", "Compressing Data"],
            ["{{エンコード}}", "Encoding"],
            ["{{外部ファイルの読み込み}}", "Reading External Files"],
            ["{{バイナリデータを生成}}", "Generating Binary Data"],
            ["{{データベースを起動}}", "Starting the Database"],
            ["{{データを保存中}}", "Storing Data"],
            ["{{完了}}", "Completed"],
            ["{{ステージ左揃え}}", "Align Stage Left"],
            ["{{ステージ中央揃え(水平方向)}}", "Align Stage Center (Horizontal)"],
            ["{{ステージ右揃え}}", "Align Stage Right"],
            ["{{ステージ上揃え}}", "Align Stage Top"],
            ["{{ステージ中央揃え(垂直方向)}}", "Center Stage (Vertical)"],
            ["{{ステージ下揃え}}", "Align Bottom of Stage"],
            ["{{定規}}", "Ruler"],
            ["{{表示}}", "Display"],
            ["{{ショートカット}}", "Shortcut"],
            ["{{レイヤーを複製}}", "Duplicate Layer"],
            ["{{未使用のフォルダを削除}}", "Delete unused folders"],
            ["{{同名のアイテムが存在します}}", "An item of the same name exists"],
            ["{{追加ファイル}}", "Additional File"],
            ["{{既存のコンテンツ}}", "Existing Content"],
            ["{{上書きするか、ファイル名を変更して追加するか、スキップを選択する事ができます}}", "You can choose to overwrite, rename and add files, or skip"],
            ["{{全て上書き}}", "Overwrite All"],
            ["{{全てスキップ}}", "Skip All"],
            ["{{追加・上書き}}", "Add or Overwrite"],
            ["{{スキップ}}", "Skip"],
            ["{{表示確認したいフレームを指定}}", "Specify the frame you want to check the display"],
            ["{{ファイル名を指定}}", "Specify File Name"],
            ["{{ファイル名}}", "File Name"],
            ["{{終了フレームを指定}}", "Specify End Frame"],
            ["{{開始フレームを指定}}", "Specify Start Frame"],
            ["{{フレーム設定}}", "Frame Setting"],
            ["{{書き出し設定}}", "Export Settings"],
            ["{{ファイル形式の選択}}", "Select File Format"],
            ["{{ファイル形式}}", "File Formats"],
            ["{{サイズ設定}}", "Size Setting"],
            ["{{左上}}", "Top Left"],
            ["{{中央上}}", "Top Center"],
            ["{{右上}}", "Top Right"],
            ["{{中央左}}", "Center Left"],
            ["{{中央}}", "Center"],
            ["{{中央右}}", "Center Right"],
            ["{{左下}}", "Bottom Left"],
            ["{{中央下}}", "Bottom Center"],
            ["{{右下}}", "Bottom Right"],
            ["{{中心点のX座標}}", "X coordinate of the center point"],
            ["{{中心点のY座標}}", "Y coordinate of the center point"],
            ["{{MovieClipに変換}}", "Convert to MovieClip"],
            ["{{変換}}", "Conversion"],
            ["{{ループ回数}}", "Loop Count"],
            ["{{カーブポインターの削除}}", "Delete curve pointer"],
            ["{{ステージ基準}}", "Stage Criteria"],
            ["{{閉じる}}", "Close"],
            ["{{保存}}", "Save"],
            ["{{リセット}}", "Reset"],
            ["{{スクリーン}}", "Screen"],
            ["{{ショートカット設定}}", "Shortcut Settings"],
            ["{{レイヤーカラー}}", "Layer Color"],
            ["{{Next2Dを支援する}}", "Support Next2D"],
            ["{{サポート}}", "Support"],
            ["{{未使用のアイテムを削除}}", "Delete unused items"],
            ["{{レイヤーをペースト}}", "Paste Layer"],
            ["{{レイヤーをコピー}}", "Copy Layer"],
            ["{{フレームをペースト}}", "Paste Frame"],
            ["{{フレームをコピー}}", "Copy Frame"],
            ["{{キーフレームを削除}}", "Delete keyframe"],
            ["{{キーフレームに空のキーフレームを追加できません}}", "Cannot add an empty keyframe to a keyframe"],
            ["{{ズームツール}}", "Zoom Tool"],
            ["{{タイムライン幅の拡大・縮小}}", "Timeline Width Expand/Reduce"],
            ["{{ガイドレイヤー}}", "Guide Layer"],
            ["{{音量設定}}", "Volume Setting"],
            ["{{サウンドを削除}}", "Remove Sound"],
            ["{{カスタムループ}}", "Custom Loop"],
            ["{{読込のみ}}", "ReadOnly"],
            ["{{書込を許可}}", "Writeable"],
            ["{{単一行}}", "Single line"],
            ["{{複数行}}", "Multiline"],
            ["{{自動で折り返し}}", "Auto Wrap"],
            ["{{左寄せ}}", "Left"],
            ["{{中央揃え}}", "Center"],
            ["{{右寄せ}}", "Right"],
            ["{{放射状グラデーション}}", "Radial Gradient"],
            ["{{線形グラデーション}}", "Linear Gradient"],
            ["{{画像}}", "Image"],
            ["{{画像選択}}", "Image Selection"],
            ["{{種別}}", "Type"],
            ["{{Shapeの色設定}}", "Shape color settings"],
            ["{{変形}}", "Transform"],
            ["{{カラー効果}}", "Color Transform"],
            ["{{フィルター}}", "Filter"],
            ["{{Shapeを複製}}", "Duplicate Shape"],
            ["{{読み込み}}", "Read in"],
            ["{{新規フォルダー}}", "Added Folder"],
            ["{{新規MovieClip}}", "Added MovieClip"],
            ["{{枠に合わせてテキストをリサイズ}}", "Resize text to fit the frame"],
            ["{{テキストに合わせて枠をリサイズ}}", "Resize the frame to fit the text"],
            ["{{リサイズしない}}", "No Resize"],
            ["{{フォント}}", "Font"],
            ["{{テキスト}}", "Text"],
            ["{{ループ}}", "Loop"],
            ["{{音量}}", "Volume"],
            ["{{ビデオ}}", "Video"],
            ["{{イージング}}", "Easing"],
            ["{{サウンド}}", "Sound"],
            ["{{シンボル}}", "Symbol"],
            ["{{名前}}", "Name"],
            ["{{オブジェクト}}", "Object"],
            ["{{ステージ設定}}", "Stage Setting"],
            ["{{プレビュー}}", "Preview"],
            ["{{削除}}", "Delete"],
            ["{{ペースト}}", "Paste"],
            ["{{コピー}}", "Copy"],
            ["{{プラグインメニュー}}", "Plugin Menu"],
            ["{{トゥイーン}}", "Tween"],
            ["{{カーブポインターの追加}}", "Added Curve Pointer"],
            ["{{パスの結合}}", "Integrating paths"],
            ["{{シェイプ}}", "Shape"],
            ["{{キーフレームに配分}}", "Distribute to Keyframes"],
            ["{{レイヤーに配分}}", "Distribute to Layers"],
            ["{{タイムライン}}", "Timeline"],
            ["{{整列}}", "Align"],
            ["{{最背面}}", "Send to Back"],
            ["{{ひとつ背面へ}}", "Send to Backward"],
            ["{{ひとつ前面へ}}", "Bring to Forward"],
            ["{{最前面}}", "Bring to Front"],
            ["{{重ね順}}", "Arrange"],
            ["{{プラグイン}}", "Plugin"],
            ["{{ライブラリ}}", "Library"],
            ["{{プロパティ}}", "Property"],
            ["{{マスクレイヤー}}", "Mask Layer"],
            ["{{通常レイヤー}}", "Normal Layer"],
            ["{{モーショントゥイーンの削除}}", "Deleted Motion Tweening"],
            ["{{モーショントゥイーンの追加}}", "Added Motion Tweening"],
            ["{{モーダル表示}}", "Modal Indication"],
            ["{{言語}}", "Language"],
            ["{{フォーマット}}", "Format"],
            ["{{含める}}", "Include"],
            ["{{含めない}}", "Not Including"],
            ["{{使い方、リファレンス}}", "Usage, Reference"],
            ["{{非表示レイヤー}}", "Hidden Layers"],
            ["{{設定}}", "Setting"],
            ["{{デフォルトのループを利用する}}", "Use the default loop"],
            ["{{フレームピッカー}}", "Frame Picker"],
            ["{{左揃え}}", "Left"],
            ["{{中央揃え(水平方向)}}", "Center (Horizontal)"],
            ["{{右揃え}}", "Right"],
            ["{{上揃え}}", "Top"],
            ["{{中央揃え(垂直方向)}}", "Center (Vertical)"],
            ["{{下揃え}}", "Bottom"],
            ["{{開始フレーム}}", "Start Frame"],
            ["{{終了フレーム}}", "End Frame"],
            ["{{ループで再生}}", "Play in loop"],
            ["{{1回再生}}", "1 playback"],
            ["{{指定したフレームで固定}}", "Fixed at the specified frame"],
            ["{{1回逆再生}}", "1 reverse playback"],
            ["{{逆ループで再生}}", "Playback in reverse loop"],
            ["{{画面の拡大・縮小}}", "Zoom in/out of screen"],
            ["{{カスタムイージングデータを保存}}", "Save custom easing data"],
            ["{{カスタムイージングデータの読込}}", "Reading custom easing data"],
            ["{{プレビューのON/OFF}}", "Preview on/off"],
            ["{{フォント枠サイズ}}", "Font Frame Size"],
            ["{{フォント枠カラー}}", "Font Frame Color"],
            ["{{オニオンスキン}}", "Onion Skin"],
            ["{{バケツツール}}", "Bucket Tools"],
            ["{{ペンツール}}", "Pen Tool"],
            ["{{ダブルクリックでカーブポイントが追加されます}}", "Double-click to add a curve point"],
            ["{{選択ツール}}", "Selection Tool"],
            ["{{Shape変形ツール}}", "Shape Transform Tool"],
            ["{{テキストツール}}", "Text Tool"],
            ["{{矩形ツール}}", "Rectangle Tool"],
            ["{{楕円ツール}}", "Ellipse Tool"],
            ["{{角丸矩形ツール}}", "Rounded Rectangle Tool"],
            ["{{塗りのカラー}}", "Fill Color"],
            ["{{線のカラー}}", "Stroke Color"],
            ["{{線の太さ}}", "Stroke Width"],
            ["{{プロジェクトデータの読込}}", "Loading project data"],
            ["{{プロジェクトデータを保存}}", "Save project data"],
            ["{{書き出し}}", "Export"],
            ["{{Discordへ移動}}", "Go to discord"],
            ["{{バグ報告}}", "Bug reports"],
            ["{{設定}}", "Setting"],
            ["{{タブを追加}}", "Add a tab"],
            ["{{タブの一覧を表示・移動}}", "View and move through the list of tabs"],
            ["{{スクリプトを追加}}", "Add a script"],
            ["{{キーフレームを追加}}", "Add a keyframe"],
            ["{{空のキーフレームを追加}}", "Add an empty keyframe"],
            ["{{フレームを追加}}", "Add a frame"],
            ["{{フレームを削除}}", "Delete frame"],
            ["{{再生}}", "Play"],
            ["{{停止}}", "Stop"],
            ["{{ループ設定}}", "Loop Setting"],
            ["{{レイヤーを追加}}", "Add a layer"],
            ["{{レイヤーを削除}}", "Delete layer"],
            ["{{全てのレイヤーをハイライト}}", "Highlight all layers"],
            ["{{全てのレイヤーを非表示}}", "Hide all layers"],
            ["{{全てのレイヤーをロック}}", "Lock all layers"],
            ["{{比率を固定}}", "Fixed ratio"],
            ["{{ステージの幅}}", "Stage Width"],
            ["{{背景色}}", "Background Color"],
            ["{{ステージの高さ}}", "Stage Height"],
            ["{{フレームレート}}", "Frame Rate"],
            ["{{シンボル名}}", "Symbol Name"],
            ["{{イージング設定}}", "Easing Setting"],
            ["{{ビデオの音量設定}}", "Video Volume Setting"],
            ["{{自動再生}}", "Auto Play"],
            ["{{テキストエリアのボーダー設定}}", "Text Area Border Setting"],
            ["{{テキスト入力設定}}", "Text Input Setting"],
            ["{{フォント選択}}", "Font Select"],
            ["{{自動サイズ調整}}", "Automatic size adjustment"],
            ["{{フォントスタイルタイプ}}", "Font Style Type"],
            ["{{行揃え}}", "Align"],
            ["{{改行設定}}", "Newline Setting"],
            ["{{スクロール設定}}", "Scroll Setting"],
            ["{{フォントサイズ}}", "Font Size"],
            ["{{フォントカラー}}", "Font Color"],
            ["{{行間}}", "Line Space"],
            ["{{文字幅}}", "Character Width"],
            ["{{左マージン}}", "Left Margin"],
            ["{{右マージン}}", "Right Margin"],
            ["{{カラー種別の選択}}", "Select a color type"],
            ["{{背景画像の選択}}", "Selecting a background image"],
            ["{{カラーポインターを追加}}", "Add color pointers"],
            ["{{カラー値}}", "Color"],
            ["{{アルファ(0%-100%)}}", "Alpha(0%-100%)"],
            ["{{アルファ値}}", "Alpha"],
            ["{{選択対象の幅}}", "Width of the selection object"],
            ["{{選択対象のX座標}}", "X coordinate of the selection object"],
            ["{{選択対象の高さ}}", "Height  of the selection object"],
            ["{{選択対象のY座標}}", "Y coordinate of the selection object"],
            ["{{選択対象の幅の伸縮}}", "scaleX of the selected object"],
            ["{{選択対象を回転}}", "Rotate the object"],
            ["{{選択対象の高さの伸縮}}", "scaleY of the selected object"],
            ["{{アルファオフセット(-255〜255)}}", "Alpha Offset(-255〜255)"],
            ["{{赤(0%-100%)}}", "Red(0%-100%)"],
            ["{{赤オフセット(-255〜255)}}", "Red Offset(-255〜255)"],
            ["{{緑(0%-100%)}}", "Green(0%-100%)"],
            ["{{緑オフセット(-255〜255)}}", "Green Offset(-255〜255)"],
            ["{{青(0%-100%)}}", "Blue(0%-100%)"],
            ["{{青オフセット(-255〜255)}}", "Blue Offset(-255〜255)"],
            ["{{ブレンドモード}}", "Blend Mode"],
            ["{{フィルターを選択}}", "Select a filter"],
            ["{{フィルターを追加}}", "Add a filter"],
            ["{{サウンドを追加}}", "Add a sound"],
            ["{{フィルターを表示・非表示する}}", "Show and Hide filters"],
            ["{{フィルターを削除}}", "Delete Filter"],
            ["{{水平方向にぼかす}}", "Blur Horizontally"],
            ["{{垂直方向にぼかす}}", "Blur Vertically"],
            ["{{フィルター強度}}", "Filter Strength"],
            ["{{フィルター角度}}", "Filter Angle"],
            ["{{シャドウのアルファ}}", "Shadow Alpha"],
            ["{{シャドウのカラー}}", "Shadow Color"],
            ["{{フィルター距離}}", "Filter Distance"],
            ["{{ハイライトのカラー}}", "Highlight Color"],
            ["{{ハイライトのアルファ}}", "Highlight Alpha"],
            ["{{グラデーションカラー}}", "Gradient Color"],
            ["{{グラデーションのアルファ}}", "Gradient Alpha"],
            ["{{タブの移動・名前を変更}}", "Move/Rename tabs"],
            ["{{プロジェクトを閉じる}}", "Close the project"],
            ["{{上下に移動}}", "Move up and down"],
            ["{{レイヤー変更(ダブルクリック)}}", "Layer Change(double-click)"],
            ["{{レイヤーをハイライト}}", "Highlight Layer"],
            ["{{レイヤーを非表示}}", "Hide Layer"],
            ["{{レイヤーをロック}}", "Lock the Layer"],
            ["{{カーブポインター(ダブルクリックでON/OFF)}}", "Curve Pointer (double click to turn on/off)"],
            ["{{インスタンス名}}", "Instance Name"],
            ["{{ライブラリ内の検索}}", "Search in the library"],
            ["{{フレームラベル}}", "Frame Label"],
            ["{{プロジェクトが保存されていない場合、このタブのプロジェクトデータを復旧する事はできません。タブを削除しますか？}}", "If the project is not saved, the project data in this tab cannot be recovered. Do you want to delete the tab?"]
        ]);
    }
}
