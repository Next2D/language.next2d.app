/**
 * @class
 * @extends Language
 */
class English extends Language
{
    /**
     * @constructor
     * @public
     */
    constructor()
    {
        super();
    }

    /**
     * @return {Map}
     * @method
     * @public
     */
    createMapping ()
    {
        return new Map([
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
            ["{{短形ツール}}", "Rectangle Tool"],
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
            ["{{行揃え}}", "Align Setting"],
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
