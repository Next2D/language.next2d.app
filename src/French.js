/**
 * @class
 * @extends Language
 */
class French extends Language
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
            ["{{画面の拡大・縮小}}", "Zoom avant et arrière sur l'écran"],
            ["{{カスタムイージングデータを保存}}", "Enregistrez les données d'assouplissement personnalisées"],
            ["{{カスタムイージングデータの読込}}", "Lecture des données de l'assouplissement personnalisé"],
            ["{{プレビューのON/OFF}}", "Activation/désactivation de la prévisualisation"],
            ["{{フォント枠サイズ}}", "Taille du cadre de la police"],
            ["{{フォント枠カラー}}", "Couleur du cadre de la police"],
            ["{{オニオンスキン}}", "Peau d'oignon"],
            ["{{バケツツール}}", "Outils à godets"],
            ["{{ペンツール}}", "Outil stylo"],
            ["{{ダブルクリックでカーブポイントが追加されます}}", "Double-cliquez pour ajouter un point de courbe"],
            ["{{選択ツール}}", "Outils de sélection"],
            ["{{Shape変形ツール}}", "Outil de transformation des formes"],
            ["{{テキストツール}}", "Outil texte"],
            ["{{短形ツール}}", "Outil Rectangle"],
            ["{{楕円ツール}}", "Outil Ellipse"],
            ["{{角丸矩形ツール}}", "Outil Rectangle arrondi"],
            ["{{塗りのカラー}}", "Couleur de remplissage"],
            ["{{線のカラー}}", "Couleur du trait"],
            ["{{線の太さ}}", "Largeur de course"],
            ["{{プロジェクトデータの読込}}", "Chargement des données du projet"],
            ["{{プロジェクトデータを保存}}", "Sauvegarder les données du projet"],
            ["{{書き出し}}", "Exportation"],
            ["{{Discordへ移動}}", "Aller sur le discord"],
            ["{{バグ報告}}", "Rapports de bogue"],
            ["{{設定}}", "Réglage de"],
            ["{{タブを追加}}", "Ajouter un onglet"],
            ["{{タブの一覧を表示・移動}}", "Visualiser et se déplacer dans la liste des onglets"],
            ["{{スクリプトを追加}}", "Ajouter un script"],
            ["{{キーフレームを追加}}", "Ajouter une image clé"],
            ["{{空のキーフレームを追加}}", "Ajouter une image clé vide"],
            ["{{フレームを追加}}", "Ajouter un cadre"],
            ["{{フレームを削除}}", "Supprimer le cadre"],
            ["{{再生}}", "Jouer"],
            ["{{停止}}", "Stop"],
            ["{{ループ設定}}", "Réglage de la boucle"],
            ["{{レイヤーを追加}}", "Ajouter une couche"],
            ["{{レイヤーを削除}}", "Supprimer la couche"],
            ["{{全てのレイヤーをハイライト}}", "Mettez en évidence toutes les couches"],
            ["{{全てのレイヤーを非表示}}", "Cacher toutes les couches"],
            ["{{全てのレイヤーをロック}}", "Verrouiller toutes les couches"],
            ["{{比率を固定}}", "Ratio fixe"],
            ["{{ステージの幅}}", "Largeur de la scène"],
            ["{{背景色}}", "Couleur de fond"],
            ["{{ステージの高さ}}", "Hauteur de la scène"],
            ["{{フレームレート}}", "Fréquence d'images"],
            ["{{シンボル名}}", "Nom du symbole"],
            ["{{イージング設定}}", "Réglage de l'assouplissement"],
            ["{{ビデオの音量設定}}", "Réglage du volume vidéo"],
            ["{{自動再生}}", "Lecture automatique"],
            ["{{テキストエリアのボーダー設定}}", "Réglage de la bordure de la zone de texte"],
            ["{{テキスト入力設定}}", "Réglage de la saisie du texte"],
            ["{{フォント選択}}", "Sélection de la police"],
            ["{{自動サイズ調整}}", "Ajustement automatique de la taille"],
            ["{{フォントスタイルタイプ}}", "Type de police"],
            ["{{行揃え}}", "Réglage de l'alignement"],
            ["{{改行設定}}", "Réglage des nouvelles lignes"],
            ["{{スクロール設定}}", "Réglage du défilement"],
            ["{{フォントサイズ}}", "Taille de la police"],
            ["{{フォントカラー}}", "Couleur de la police"],
            ["{{行間}}", "Espace linéaire"],
            ["{{文字幅}}", "Largeur des caractères"],
            ["{{左マージン}}", "Marge gauche"],
            ["{{右マージン}}", "Marge droite"],
            ["{{カラー種別の選択}}", "Sélectionnez un type de couleur"],
            ["{{背景画像の選択}}", "Sélection d'une image de fond"],
            ["{{カラーポインターを追加}}", "Ajouter des pointeurs de couleur"],
            ["{{カラー値}}", "Couleur"],
            ["{{アルファ(0%-100%)}}", "Alpha(0%-100%)"],
            ["{{アルファ値}}", "Alpha"],
            ["{{選択対象の幅}}", "Largeur de l'objet de sélection"],
            ["{{選択対象のX座標}}", "Coordonnée X de l'objet de sélection"],
            ["{{選択対象の高さ}}", "Hauteur de l'objet de sélection"],
            ["{{選択対象のY座標}}", "Coordonnée Y de l'objet de sélection"],
            ["{{選択対象の幅の伸縮}}", "scaleX de l'objet sélectionné"],
            ["{{選択対象を回転}}", "Faire pivoter l'objet"],
            ["{{選択対象の高さの伸縮}}", "scaleY de l'objet sélectionné"],
            ["{{アルファオフセット(-255〜255)}}", "Décalage alpha(-255〜255)"],
            ["{{赤(0%-100%)}}", "Rouge(0%-100%)"],
            ["{{赤オフセット(-255〜255)}}", "Décalage rouge(-255〜255)"],
            ["{{緑(0%-100%)}}", "Vert(0%-100%)"],
            ["{{緑オフセット(-255〜255)}}", "Compensation verte(-255〜255)"],
            ["{{青(0%-100%)}}", "Bleu(0%-100%)"],
            ["{{青オフセット(-255〜255)}}", "Décalage bleu(-255〜255)"],
            ["{{ブレンドモード}}", "Mode de mélange"],
            ["{{フィルターを選択}}", "Sélectionnez un filtre"],
            ["{{フィルターを追加}}", "Ajouter un filtre"],
            ["{{サウンドを追加}}", "Ajouter un son"],
            ["{{フィルターを表示・非表示する}}", "Afficher et masquer les filtres"],
            ["{{フィルターを削除}}", "Supprimer le filtre"],
            ["{{水平方向にぼかす}}", "Flou horizontal"],
            ["{{垂直方向にぼかす}}", "Flou vertical"],
            ["{{フィルター強度}}", "Résistance du filtre"],
            ["{{フィルター角度}}", "Angle du filtre"],
            ["{{シャドウのアルファ}}", "Shadow Alpha"],
            ["{{シャドウのカラー}}", "Couleur de l'ombre"],
            ["{{フィルター距離}}", "Distance du filtre"],
            ["{{ハイライトのカラー}}", "Couleur de mise en évidence"],
            ["{{ハイライトのアルファ}}", "Highlight Alpha"],
            ["{{グラデーションカラー}}", "Couleur dégradée"],
            ["{{グラデーションのアルファ}}", "Gradient Alpha"],
            ["{{タブの移動・名前を変更}}", "Déplacer/Renommer les onglets"],
            ["{{プロジェクトを閉じる}}", "Fermer le projet"],
            ["{{上下に移動}}", "Déplacement vers le haut et le bas"],
            ["{{レイヤー変更(ダブルクリック)}}", "Changement de couche (double-clic)"],
            ["{{レイヤーをハイライト}}", "Couche de mise en évidence"],
            ["{{レイヤーを非表示}}", "Masquer la couche"],
            ["{{レイヤーをロック}}", "Verrouiller le calque"],
            ["{{カーブポインター(ダブルクリックでON/OFF)}}", "Pointeur de courbe (double-cliquez pour l'activer ou le désactiver)"],
            ["{{インスタンス名}}", "Nom de l'instance"],
            ["{{ライブラリ内の検索}}", "Recherche dans la bibliothèque"],
            ["{{フレームラベル}}", "Étiquette du cadre"],
            ["{{プロジェクトが保存されていない場合、このタブのプロジェクトデータを復旧する事はできません。タブを削除しますか？}}", "Si le projet n'est pas sauvegardé, les données du projet dans cet onglet ne peuvent pas être récupérées. Voulez-vous supprimer l'onglet ?"]
        ]);
    }
}
