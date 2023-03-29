/**
 * @class
 * @extends Language
 */
class French extends Language
{
    /**
     * @return {Map}
     * @method
     * @public
     */
    createMapping ()
    {
        return new Map([
            ["{{画質}}", "Qualité"],
            ["{{座標}}", "Coordonnées"],
            ["{{MovieClipを編集}}", "Modifier le MovieClip"],
            ["{{親の階層へ移動}}", "Passer à la hiérarchie parentale"],
            ["{{ロックされたレイヤーです}}", "Couche verrouillée"],
            ["{{トゥイーンには複数のオブジェクトを設置できません}}", "Il n'est pas possible de placer plusieurs objets sur un tween"],
            ["{{名前が重複しています}}", "Nom en double"],
            ["{{名前は必須です}}", "Le nom est obligatoire"],
            ["{{名前が重複しています}}", "Duplicate Name"],
            ["{{名前は必須です}}", "Name is required"],
            ["{{自由変形ツール}}", "Outil de transformation gratuit"],
            ["{{キーフレームに変換}}", "Convertir en image clé"],
            ["{{空のキーフレームに変換}}", "Convertir en images clés vides"],
            ["{{最初のフレームに移動}}", "Aller au premier cadre"],
            ["{{最後のフレームに移動}}", "Aller à la dernière image"],
            ["{{SWFを解析中}}", "SWF en cours d'analyse"],
            ["{{JSONを生成}}", "Générer JSON"],
            ["{{ファイルを生成}}", "Générer un fichier"],
            ["{{N2Dファイルの読み込み}}", "Chargement des fichiers N2D"],
            ["{{JSONの読み込み}}", "Chargement de JSON"],
            ["{{データを解凍中}}", "Décompression des données"],
            ["{{データを圧縮中}}", "Compression des données"],
            ["{{エンコード}}", "Encodage"],
            ["{{外部ファイルの読み込み}}", "Lecture de fichiers externes"],
            ["{{バイナリデータを生成}}", "Génération de données binaires"],
            ["{{データベースを起動}}", "Démarrage de la base de données"],
            ["{{データを保存中}}", "Stockage des données en cours"],
            ["{{完了}}", "Complété"],
            ["{{ステージ左揃え}}", "Aligner la scène à gauche"],
            ["{{ステージ中央揃え(水平方向)}}", "Aligner le centre de la scène (horizontal)"],
            ["{{ステージ右揃え}}", "Aligner la scène à droite"],
            ["{{ステージ上揃え}}", "Aligner la scène vers le haut"],
            ["{{ステージ中央揃え(垂直方向)}}", "Aligner le centre de la scène (vertical)"],
            ["{{ステージ下揃え}}", "Aligner le fond de la scène"],
            ["{{定規}}", "Règle"],
            ["{{表示}}", "Afficher"],
            ["{{ショートカット}}", "Raccourci"],
            ["{{レイヤーを複製}}", "Dupliquer la couche"],
            ["{{未使用のフォルダを削除}}", "Supprimez les dossiers inutilisés"],
            ["{{同名のアイテムが存在します}}", "Un ou plusieurs articles du même nom existent"],
            ["{{追加ファイル}}", "Fichier supplémentaire"],
            ["{{既存のコンテンツ}}", "Contenu existant"],
            ["{{上書きするか、ファイル名を変更して追加するか、スキップを選択する事ができます}}", "Vous pouvez choisir d'écraser, de renommer et d'ajouter des fichiers, ou de ne pas le faire"],
            ["{{全て上書き}}", "Ecraser tout"],
            ["{{全てスキップ}}", "Ignorer tout"],
            ["{{追加・上書き}}", "Ajouter ou Écraser"],
            ["{{スキップ}}", "Ignorer"],
            ["{{表示確認したいフレームを指定}}", "Specify the frame you want to check the display"],
            ["{{ファイル名を指定}}", "Spécifier le nom du fichier"],
            ["{{ファイル名}}", "nom du fichier"],
            ["{{終了フレームを指定}}", "Spécifier le cadre de fin"],
            ["{{開始フレームを指定}}", "Spécifier le cadre de départ"],
            ["{{フレーム設定}}", "Réglage du cadre"],
            ["{{書き出し設定}}", "Paramètres d'exportation"],
            ["{{ファイル形式の選択}}", "Sélectionner le format du fichier"],
            ["{{ファイル形式}}", "Formats de fichiers"],
            ["{{サイズ設定}}", "Réglage de la taille"],
            ["{{左上}}", "En haut à gauche"],
            ["{{中央上}}", "Centre supérieur"],
            ["{{右上}}", "Haut Droite"],
            ["{{中央左}}", "Centre gauche"],
            ["{{中央}}", "Centre"],
            ["{{中央右}}", "Centre droit"],
            ["{{左下}}", "Bas gauche"],
            ["{{中央下}}", "Bas Centre"],
            ["{{右下}}", "Bas droit"],
            ["{{中心点のX座標}}", "Coordonnée X du point central"],
            ["{{中心点のY座標}}", "Coordonnée Y du point central"],
            ["{{MovieClipに変換}}", "Convertir en MovieClip"],
            ["{{変換}}", "transformation"],
            ["{{ループ回数}}", "Nombre de boucles"],
            ["{{カーブポインターの削除}}", "Supprimer le pointeur de courbe"],
            ["{{ステージ基準}}", "Critères d'étape"],
            ["{{閉じる}}", "Fermer"],
            ["{{保存}}", "Sauvez"],
            ["{{リセット}}", "réinitialiser"],
            ["{{スクリーン}}", "Écran"],
            ["{{ショートカット設定}}", "Paramètres des raccourcis"],
            ["{{レイヤーカラー}}", "couleur superposée"],
            ["{{Next2Dを支援する}}", "Soutenez Next2D"],
            ["{{サポート}}", "soutien"],
            ["{{未使用のアイテムを削除}}", "Retirer les articles non utilisés"],
            ["{{レイヤーをペースト}}", "Couche de pâte"],
            ["{{レイヤーをコピー}}", "Copie de la couche"],
            ["{{フレームをペースト}}", "Coller le cadre"],
            ["{{フレームをコピー}}", "Cadre de copie"],
            ["{{キーフレームを削除}}", "Supprimez les images clés"],
            ["{{キーフレームに空のキーフレームを追加できません}}", "Impossible d'ajouter des images clés vides à des images clés"],
            ["{{ズームツール}}", "Outil de zoom"],
            ["{{タイムライン幅の拡大・縮小}}", "Largeur de la ligne de temps Développer/réduire"],
            ["{{ガイドレイヤー}}", "couche de guidage"],
            ["{{音量設定}}", "Réglage du volume"],
            ["{{サウンドを削除}}", "Supprimer le son"],
            ["{{カスタムループ}}", "boucle personnalisée"],
            ["{{読込のみ}}", "Lecture seulement"],
            ["{{書込を許可}}", "autorisation de poste"],
            ["{{単一行}}", "Ligne unique"],
            ["{{複数行}}", "Multiline"],
            ["{{自動で折り返し}}", "Enveloppe automatique"],
            ["{{左寄せ}}", "Gauche"],
            ["{{中央揃え}}", "Centre"],
            ["{{右寄せ}}", "Droite"],
            ["{{放射状グラデーション}}", "gradation radiale"],
            ["{{線形グラデーション}}", "gradient linéaire"],
            ["{{画像}}", "Image"],
            ["{{画像選択}}", "Sélection d'images"],
            ["{{種別}}", "Type"],
            ["{{Shapeの色設定}}", "Paramètres de couleur de la forme"],
            ["{{変形}}", "déformation"],
            ["{{カラー効果}}", "Transformation des couleurs"],
            ["{{フィルター}}", "filtre"],
            ["{{Shapeを複製}}", "Dupliquer la forme"],
            ["{{読み込み}}", "lire dans"],
            ["{{新規フォルダー}}", "Nouveau dossier"],
            ["{{新規MovieClip}}", "Nouveau MovieClip"],
            ["{{枠に合わせてテキストをリサイズ}}", "Redimensionnez le texte pour l'adapter au cadre"],
            ["{{テキストに合わせて枠をリサイズ}}", "Redimensionnez le cadre pour l'adapter au texte"],
            ["{{リサイズしない}}", "Pas de redimensionnement"],
            ["{{フォント}}", "police"],
            ["{{テキスト}}", "Texte"],
            ["{{ループ}}", "boucle"],
            ["{{音量}}", "volume"],
            ["{{ビデオ}}", "Vidéo"],
            ["{{イージング}}", "facilitant"],
            ["{{サウンド}}", "son"],
            ["{{シンボル}}", "Symbole"],
            ["{{名前}}", "Nom"],
            ["{{オブジェクト}}", "objet"],
            ["{{ステージ設定}}", "Mise en scène"],
            ["{{プレビュー}}", "Prévisualisation"],
            ["{{削除}}", "Supprimer"],
            ["{{ペースト}}", "Pâte"],
            ["{{コピー}}", "Copie"],
            ["{{プラグインメニュー}}", "Menu plug-in"],
            ["{{トゥイーン}}", "entre"],
            ["{{カーブポインターの追加}}", "Pointeur de courbe supplémentaire"],
            ["{{パスの結合}}", "Fusion de chemins"],
            ["{{シェイプ}}", "forme"],
            ["{{キーフレームに配分}}", "Attribution aux images clés"],
            ["{{レイヤーに配分}}", "Affectation aux couches"],
            ["{{タイムライン}}", "chronologie"],
            ["{{整列}}", "Aligner"],
            ["{{最背面}}", "La plupart des dos"],
            ["{{ひとつ背面へ}}", "Un à l'arrière"],
            ["{{ひとつ前面へ}}", "Un front"],
            ["{{最前面}}", "Frontmost"],
            ["{{重ね順}}", "Organiser"],
            ["{{プラグイン}}", "plug-in"],
            ["{{ライブラリ}}", "bibliothèque"],
            ["{{プロパティ}}", "propriété"],
            ["{{マスクレイヤー}}", "couche de masque"],
            ["{{通常レイヤー}}", "Couche normale"],
            ["{{モーショントゥイーンの削除}}", "Suppression des tweens de mouvement"],
            ["{{モーショントゥイーンの追加}}", "Des tweens de mouvement supplémentaires"],
            ["{{モーダル表示}}", "indication modale"],
            ["{{言語}}", "Langue"],
            ["{{フォーマット}}", "format"],
            ["{{含める}}", "inclure"],
            ["{{含めない}}", "à ne pas inclure"],
            ["{{使い方、リファレンス}}", "Utilisation, référence"],
            ["{{非表示レイヤー}}", "couche cachée"],
            ["{{設定}}", "configuration"],
            ["{{デフォルトのループを利用する}}", "Utilisez la boucle par défaut"],
            ["{{フレームピッカー}}", "ramasseur de cadres"],
            ["{{左揃え}}", "Gauche"],
            ["{{中央揃え(水平方向)}}", "Centre(sens horizontal)"],
            ["{{右揃え}}", "Droit"],
            ["{{上揃え}}", "Top"],
            ["{{中央揃え(垂直方向)}}", "Centre(Vertical)"],
            ["{{下揃え}}", "Fond"],
            ["{{開始フレーム}}", "cadre de départ"],
            ["{{終了フレーム}}", "cadre terminal"],
            ["{{ループで再生}}", "Lecture en boucle"],
            ["{{1回再生}}", "1 lecture"],
            ["{{指定したフレームで固定}}", "Fixé dans le cadre spécifié"],
            ["{{1回逆再生}}", "1 lecture en sens inverse"],
            ["{{逆ループで再生}}", "Lecture en boucle inversée"],
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
            ["{{矩形ツール}}", "Outil Rectangle"],
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
            ["{{行揃え}}", "Aligner"],
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
