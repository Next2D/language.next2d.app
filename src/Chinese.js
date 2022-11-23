/**
 * @class
 * @extends Language
 */
class Chinese extends Language
{
    /**
     * @return {Map}
     * @method
     * @public
     */
    createMapping ()
    {
        return new Map([
            ["{{ステージ左揃え}}", "舞台左侧对齐"],
            ["{{ステージ中央揃え(水平方向)}}", "对准舞台中心（水平）"],
            ["{{ステージ右揃え}}", "舞台右侧的对齐"],
            ["{{ステージ上揃え}}", "对齐舞台"],
            ["{{ステージ中央揃え(垂直方向)}}", "对准舞台中心（垂直）"],
            ["{{ステージ下揃え}}", "对准舞台底部"],
            ["{{定規}}", "尺子"],
            ["{{表示}}", "展示"],
            ["{{ショートカット}}", "快捷方式"],
            ["{{レイヤーを複製}}", "复制图层"],
            ["{{未使用のフォルダを削除}}", "删除未使用的文件夹"],
            ["{{同名のアイテムが存在します}}", "存在相同名称的项目"],
            ["{{追加ファイル}}", "附加文件"],
            ["{{既存のコンテンツ}}", "现有的内容"],
            ["{{上書きするか、ファイル名を変更して追加するか、スキップを選択する事ができます}}", "你可以选择覆盖、重命名和添加文件或跳过"],
            ["{{全て上書き}}", "覆盖所有"],
            ["{{全てスキップ}}", "跳过所有"],
            ["{{追加・上書き}}", "添加和覆盖"],
            ["{{スキップ}}", "跳过"],
            ["{{表示確認したいフレームを指定}}", "指定你要检查显示的框架"],
            ["{{ファイル名を指定}}", "指定文件名"],
            ["{{ファイル名}}", "文件名"],
            ["{{終了フレームを指定}}", "指定终端框架"],
            ["{{開始フレームを指定}}", "指定起始框架"],
            ["{{フレーム設定}}", "框架设置"],
            ["{{書き出し設定}}", "出口设置"],
            ["{{ファイル形式の選択}}", "选择文件格式"],
            ["{{ファイル形式}}", "文件格式"],
            ["{{サイズ設定}}", "尺寸"],
            ["{{左上}}", "左上"],
            ["{{中央上}}", "中-上"],
            ["{{右上}}", "右上"],
            ["{{中央左}}", "中间偏左"],
            ["{{中央}}", "中央"],
            ["{{中央右}}", "中右翼"],
            ["{{左下}}", "左下角"],
            ["{{中央下}}", "中下级"],
            ["{{右下}}", "右下"],
            ["{{中心点のX座標}}", "中心点的X坐标"],
            ["{{中心点のY座標}}", "中心点的Y坐标"],
            ["{{MovieClipに変換}}", "转换为MovieClip"],
            ["{{変換}}", "蜕变"],
            ["{{ループ回数}}", "循环次数"],
            ["{{カーブポインターの削除}}", "删除曲线指针"],
            ["{{ステージ基準}}", "阶段性标准"],
            ["{{閉じる}}", "贴近"],
            ["{{保存}}", "储存"],
            ["{{リセット}}", "重置"],
            ["{{スクリーン}}", "筛选"],
            ["{{ショートカット設定}}", "捷径设置"],
            ["{{レイヤーカラー}}", "分层色"],
            ["{{Next2Dを支援する}}", "支持Next2D"],
            ["{{サポート}}", "支持"],
            ["{{未使用のアイテムを削除}}", "删除未使用的项目"],
            ["{{レイヤーをペースト}}", "粘贴层"],
            ["{{レイヤーをコピー}}", "复制层"],
            ["{{フレームをペースト}}", "粘贴框架"],
            ["{{フレームをコピー}}", "复制框架"],
            ["{{キーフレームを削除}}", "删除关键帧"],
            ["{{キーフレームに空のキーフレームを追加できません}}", "不能向关键帧添加空关键帧"],
            ["{{ズームツール}}", "缩放工具"],
            ["{{タイムライン幅の拡大・縮小}}", "时间线宽度 扩大/缩小"],
            ["{{ガイドレイヤー}}", "指导层"],
            ["{{音量設定}}", "音量设置"],
            ["{{サウンドを削除}}", "移除声音"],
            ["{{カスタムループ}}", "定制的循环"],
            ["{{読込のみ}}", "只读"],
            ["{{書込を許可}}", "职位许可"],
            ["{{単一行}}", "单线"],
            ["{{複数行}}", "多线"],
            ["{{自動で折り返し}}", "自动绕行"],
            ["{{左寄せ}}", "左对齐"],
            ["{{中央揃え}}", "定心"],
            ["{{右寄せ}}", "右对齐"],
            ["{{放射状グラデーション}}", "径向梯度"],
            ["{{線形グラデーション}}", "线性梯度"],
            ["{{画像}}", "图片"],
            ["{{画像選択}}", "图像选择"],
            ["{{種別}}", "分类"],
            ["{{Shapeの色設定}}", "形状颜色设置"],
            ["{{変形}}", "变形"],
            ["{{カラー効果}}", "颜色转换"],
            ["{{フィルター}}", "滤镜"],
            ["{{Shapeを複製}}", "复制的形状"],
            ["{{読み込み}}", "读在"],
            ["{{新規フォルダー}}", "新文件夹"],
            ["{{新規MovieClip}}", "新的电影剪辑"],
            ["{{枠に合わせてテキストをリサイズ}}", "调整文字大小以适应框架"],
            ["{{テキストに合わせて枠をリサイズ}}", "调整框架的大小以适应文本"],
            ["{{リサイズしない}}", "不调整大小"],
            ["{{フォント}}", "字体"],
            ["{{テキスト}}", "文本"],
            ["{{ループ}}", "循环"],
            ["{{音量}}", "音量"],
            ["{{ビデオ}}", "视频"],
            ["{{イージング}}", "缓和"],
            ["{{サウンド}}", "声音"],
            ["{{シンボル}}", "符号"],
            ["{{名前}}", "命名"],
            ["{{オブジェクト}}", "对象"],
            ["{{ステージ設定}}", "舞台设置"],
            ["{{プレビュー}}", "预览"],
            ["{{削除}}", "删除"],
            ["{{ペースト}}", "粘贴"],
            ["{{コピー}}", "拷贝"],
            ["{{プラグインメニュー}}", "插件菜单"],
            ["{{トゥイーン}}", "嫩枝"],
            ["{{カーブポインターの追加}}", "额外的曲线指示器"],
            ["{{パスの結合}}", "路径合并"],
            ["{{シェイプ}}", "形状"],
            ["{{キーフレームに配分}}", "分配给关键帧"],
            ["{{レイヤーに配分}}", "分配到各层"],
            ["{{タイムライン}}", "时间线"],
            ["{{整列}}", "对齐"],
            ["{{最背面}}", "最 后"],
            ["{{ひとつ背面へ}}", "一个背影"],
            ["{{ひとつ前面へ}}", "一个正面"],
            ["{{最前面}}", "最前线"],
            ["{{重ね順}}", "继承顺序"],
            ["{{プラグイン}}", "插件"],
            ["{{ライブラリ}}", "图书馆"],
            ["{{プロパティ}}", "财产"],
            ["{{マスクレイヤー}}", "掩膜层"],
            ["{{通常レイヤー}}", "普通层"],
            ["{{モーショントゥイーンの削除}}", "删去了运动推理的内容"],
            ["{{モーショントゥイーンの追加}}", "额外的议案推理"],
            ["{{モーダル表示}}", "模态指示"],
            ["{{言語}}", "语言"],
            ["{{フォーマット}}", "格式"],
            ["{{含める}}", "包括"],
            ["{{含めない}}", "不包括"],
            ["{{使い方、リファレンス}}", "用法，参考"],
            ["{{非表示レイヤー}}", "隐藏层"],
            ["{{設定}}", "设置"],
            ["{{デフォルトのループを利用する}}", "使用默认的循环"],
            ["{{フレームピッカー}}", "选框机"],
            ["{{左揃え}}", "左对齐"],
            ["{{中央揃え(水平方向)}}", "居中（水平方向）"],
            ["{{右揃え}}", "右对齐"],
            ["{{上揃え}}", "上对齐"],
            ["{{中央揃え(垂直方向)}}", "居中（垂直方向）"],
            ["{{下揃え}}", "下对齐"],
            ["{{開始フレーム}}", "起始框架"],
            ["{{終了フレーム}}", "终端框架"],
            ["{{ループで再生}}", "循环播放"],
            ["{{1回再生}}", "1次播放"],
            ["{{指定したフレームで固定}}", "固定在指定的框架内"],
            ["{{1回逆再生}}", "1 反向播放"],
            ["{{逆ループで再生}}", "反向循环播放"],
            ["{{画面の拡大・縮小}}", "画面的放大和缩小"],
            ["{{カスタムイージングデータを保存}}", "保存自定义缓和数据"],
            ["{{カスタムイージングデータの読込}}", "读取自定义宽松数据"],
            ["{{プレビューのON/OFF}}", "预览开/关"],
            ["{{フォント枠サイズ}}", "字体帧大小"],
            ["{{フォント枠カラー}}", "字体帧颜色"],
            ["{{オニオンスキン}}", "洋葱皮"],
            ["{{バケツツール}}", "整体填充工具"],
            ["{{ペンツール}}", "钢笔工具"],
            ["{{ダブルクリックでカーブポイントが追加されます}}", "双击来添加一个曲线点"],
            ["{{選択ツール}}", "选择工具"],
            ["{{Shape変形ツール}}", "形状变换工具"],
            ["{{テキストツール}}", "文本工具"],
            ["{{矩形ツール}}", "矩形工具"],
            ["{{楕円ツール}}", "椭圆工具"],
            ["{{角丸矩形ツール}}", "圆角矩形工具"],
            ["{{塗りのカラー}}", "填充颜色"],
            ["{{線のカラー}}", "画笔颜色"],
            ["{{線の太さ}}", "画笔宽度"],
            ["{{プロジェクトデータの読込}}", "载入工程文件"],
            ["{{プロジェクトデータを保存}}", "保存工程文件"],
            ["{{書き出し}}", "导出"],
            ["{{Discordへ移動}}", "前往discord"],
            ["{{バグ報告}}", "错误报告"],
            ["{{設定}}", "设置"],
            ["{{タブを追加}}", "添加标签页"],
            ["{{タブの一覧を表示・移動}}", "标签页列表"],
            ["{{スクリプトを追加}}", "添加一个脚本"],
            ["{{キーフレームを追加}}", "添加一个关键帧"],
            ["{{空のキーフレームを追加}}", "添加一个空的关键帧"],
            ["{{フレームを追加}}", "添加帧"],
            ["{{フレームを削除}}", "删除帧"],
            ["{{再生}}", "播放"],
            ["{{停止}}", "停止"],
            ["{{ループ設定}}", "循环设置"],
            ["{{レイヤーを追加}}", "添加图层"],
            ["{{レイヤーを削除}}", "删除图层"],
            ["{{全てのレイヤーをハイライト}}", "高亮所有图层"],
            ["{{全てのレイヤーを非表示}}", "隐藏所有图层"],
            ["{{全てのレイヤーをロック}}", "锁定所有图层"],
            ["{{比率を固定}}", "锁定比例"],
            ["{{ステージの幅}}", "画面宽度"],
            ["{{背景色}}", "背景颜色"],
            ["{{ステージの高さ}}", "画面高度"],
            ["{{フレームレート}}", "帧速率"],
            ["{{シンボル名}}", "符号名称"],
            ["{{イージング設定}}", "过渡设置"],
            ["{{ビデオの音量設定}}", "视频音量设置"],
            ["{{自動再生}}", "自动播放"],
            ["{{テキストエリアのボーダー設定}}", "文本框边框设置"],
            ["{{テキスト入力設定}}", "文本输入设置"],
            ["{{フォント選択}}", "字体选择"],
            ["{{自動サイズ調整}}", "自动调整尺寸"],
            ["{{フォントスタイルタイプ}}", "字体风格类型"],
            ["{{行揃え}}", "对齐"],
            ["{{改行設定}}", "换行设置"],
            ["{{スクロール設定}}", "滚动设置"],
            ["{{フォントサイズ}}", "字体大小"],
            ["{{フォントカラー}}", "字体颜色"],
            ["{{行間}}", "行间距"],
            ["{{文字幅}}", "字符宽度"],
            ["{{左マージン}}", "左边距"],
            ["{{右マージン}}", "右边距"],
            ["{{カラー種別の選択}}", "选择颜色类型"],
            ["{{背景画像の選択}}", "选择背景图片"],
            ["{{カラーポインターを追加}}", "添加颜色指针"],
            ["{{カラー値}}", "颜色"],
            ["{{アルファ(0%-100%)}}", "透明度（0%-100%）"],
            ["{{アルファ値}}", "透明度"],
            ["{{選択対象の幅}}", "选择对象的宽度"],
            ["{{選択対象のX座標}}", "选择对象的X轴坐标"],
            ["{{選択対象の高さ}}", "选择对象的高度"],
            ["{{選択対象のY座標}}", "选择对象的Y轴坐标"],
            ["{{選択対象の幅の伸縮}}", "选定对象的X轴缩放"],
            ["{{選択対象を回転}}", "旋转物体"],
            ["{{選択対象の高さの伸縮}}", "所选对象的比例Y"],
            ["{{アルファオフセット(-255〜255)}}", "透明度偏移（-255~255）"],
            ["{{赤(0%-100%)}}", "红色（0%-100%）"],
            ["{{赤オフセット(-255〜255)}}", "红色偏移（-255~255）"],
            ["{{緑(0%-100%)}}", "绿色（0%-100%）"],
            ["{{緑オフセット(-255〜255)}}", "绿色偏移（-255~255）"],
            ["{{青(0%-100%)}}", "蓝色（0%-100%）"],
            ["{{青オフセット(-255〜255)}}", "蓝色偏移（-255~255）"],
            ["{{ブレンドモード}}", "混合模式"],
            ["{{フィルターを選択}}", "选择滤镜"],
            ["{{フィルターを追加}}", "添加滤镜"],
            ["{{サウンドを追加}}", "添加声音"],
            ["{{フィルターを表示・非表示する}}", "显示和隐藏滤镜"],
            ["{{フィルターを削除}}", "删除滤镜"],
            ["{{水平方向にぼかす}}", "横向模糊"],
            ["{{垂直方向にぼかす}}", "纵向模糊"],
            ["{{フィルター強度}}", "滤镜强度"],
            ["{{フィルター角度}}", "滤镜角度"],
            ["{{シャドウのアルファ}}", "阴影透明度"],
            ["{{シャドウのカラー}}", "阴影颜色"],
            ["{{フィルター距離}}", "滤镜距离"],
            ["{{ハイライトのカラー}}", "高光色"],
            ["{{ハイライトのアルファ}}", "高光透明度"],
            ["{{グラデーションカラー}}", "渐变色"],
            ["{{グラデーションのアルファ}}", "渐变透明度"],
            ["{{タブの移動・名前を変更}}", "移动/重命名标签"],
            ["{{プロジェクトを閉じる}}", "关闭工程"],
            ["{{上下に移動}}", "上下移动"],
            ["{{レイヤー変更(ダブルクリック)}}", "改变图层（双击）"],
            ["{{レイヤーをハイライト}}", "高亮图层"],
            ["{{レイヤーを非表示}}", "隐藏图层"],
            ["{{レイヤーをロック}}", "锁定图层"],
            ["{{カーブポインター(ダブルクリックでON/OFF)}}", "曲线指针（双击打开/关闭）"],
            ["{{インスタンス名}}", "实例名称"],
            ["{{ライブラリ内の検索}}", "在库中搜索"],
            ["{{フレームラベル}}", "帧标签"],
            ["{{プロジェクトが保存されていない場合、このタブのプロジェクトデータを復旧する事はできません。タブを削除しますか？}}", "如果工程没有保存，将无法恢复此标签页数据。 你想删除这个标签页吗？"]
        ]);
    }
}
