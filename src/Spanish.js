/**
 * @class
 * @extends Language
 */
class Spanish extends Language
{
    /**
     * @return {Map}
     * @method
     * @public
     */
    createMapping ()
    {
        return new Map([
            ["{{タイムライン幅の拡大・縮小}}", "Anchura de la línea de tiempo Ampliar/reducir"],
            ["{{ガイドレイヤー}}", "capa de guía"],
            ["{{音量設定}}", "Ajuste del volumen"],
            ["{{サウンドを削除}}", "Eliminar el sonido"],
            ["{{カスタムループ}}", "bucle personalizado"],
            ["{{読込のみ}}", "Sólo para leer"],
            ["{{書込を許可}}", "permiso de correos"],
            ["{{単一行}}", "Línea única"],
            ["{{複数行}}", "Multilínea"],
            ["{{自動で折り返し}}", "Envoltura automática"],
            ["{{左寄せ}}", "Izquierda"],
            ["{{中央揃え}}", "Centro"],
            ["{{右寄せ}}", "Derecha"],
            ["{{放射状グラデーション}}", "gradación radial"],
            ["{{線形グラデーション}}", "gradiente lineal"],
            ["{{画像}}", "Imagen"],
            ["{{画像選択}}", "Selección de imágenes"],
            ["{{種別}}", "Tipo"],
            ["{{Shapeの色設定}}", "Configuración del color de la forma"],
            ["{{変形}}", "deformación"],
            ["{{カラー効果}}", "Transformación del color"],
            ["{{フィルター}}", "filtro"],
            ["{{Shapeを複製}}", "Duplicar la forma"],
            ["{{読込(画像, MP3, MP4, SWF)}}", "Leer (imágenes, MP3, MP4, SWF)"],
            ["{{新規フォルダー}}", "Carpeta nueva"],
            ["{{新規MovieClip}}", "Nuevo MovieClip"],
            ["{{枠に合わせてテキストをリサイズ}}", "Cambia el tamaño del texto para que se ajuste al marco"],
            ["{{テキストに合わせて枠をリサイズ}}", "Cambia el tamaño del marco para que se ajuste al texto"],
            ["{{リサイズしない}}", "No hay cambio de tamaño"],
            ["{{フォント}}", "fuente"],
            ["{{テキスト}}", "Texto"],
            ["{{ループ}}", "bucle"],
            ["{{音量}}", "volumen"],
            ["{{ビデオ}}", "Vídeo"],
            ["{{イージング}}", "facilitando"],
            ["{{サウンド}}", "sonido"],
            ["{{シンボル}}", "Símbolo"],
            ["{{名前}}", "Nombre"],
            ["{{オブジェクト}}", "objeto"],
            ["{{ステージ設定}}", "Puesta en escena"],
            ["{{プレビュー}}", "Previsualización"],
            ["{{削除}}", "Borrar"],
            ["{{ペースト}}", "Pegar"],
            ["{{コピー}}", "Copiar"],
            ["{{プラグインメニュー}}", "Menú de complementos"],
            ["{{トゥイーン}}", "tween"],
            ["{{カーブポインターの追加}}", "Puntero de curva adicional"],
            ["{{パスの結合}}", "Fusión de caminos"],
            ["{{シェイプ}}", "forma"],
            ["{{キーフレームに配分}}", "Asignación a los fotogramas clave"],
            ["{{レイヤーに配分}}", "Asignación a las capas"],
            ["{{タイムライン}}", "línea de tiempo"],
            ["{{整列}}", "Alinear"],
            ["{{最背面}}", "La mayor parte de la espalda"],
            ["{{ひとつ背面へ}}", "Uno en la parte trasera"],
            ["{{ひとつ前面へ}}", "Un frente"],
            ["{{最前面}}", "Frontmost"],
            ["{{重ね順}}", "Organice"],
            ["{{プラグイン}}", "plug-in"],
            ["{{ライブラリ}}", "biblioteca"],
            ["{{プロパティ}}", "propiedad"],
            ["{{マスクレイヤー}}", "capa de máscara"],
            ["{{通常レイヤー}}", "Capa normal"],
            ["{{モーショントゥイーンの削除}}", "Supresión de los tweens de movimiento"],
            ["{{モーショントゥイーンの追加}}", "Tweens de movimiento adicionales"],
            ["{{モーダル表示}}", "indicación modal"],
            ["{{言語}}", "El idioma"],
            ["{{フォーマット}}", "formato"],
            ["{{含める}}", "incluir"],
            ["{{含めない}}", "no incluir"],
            ["{{使い方、リファレンス}}", "Uso, referencia"],
            ["{{非表示レイヤー}}", "capa oculta"],
            ["{{設定}}", "configuración"],
            ["{{デフォルトのループを利用する}}", "Utiliza el bucle por defecto"],
            ["{{フレームピッカー}}", "Recogedor de marcos"],
            ["{{左揃え}}", "Izquierda"],
            ["{{中央揃え(水平方向)}}", "Centro (Horizontal)"],
            ["{{右揃え}}", "Derecho"],
            ["{{上揃え}}", "Arriba"],
            ["{{中央揃え(垂直方向)}}", "Centro (Vertical)"],
            ["{{下揃え}}", "Fondo"],
            ["{{開始フレーム}}", "marco de inicio"],
            ["{{終了フレーム}}", "marco final"],
            ["{{ループで再生}}", "Reproducir en bucle"],
            ["{{1回再生}}", "1 reproducción"],
            ["{{指定したフレームで固定}}", "Fijado en el marco especificado"],
            ["{{1回逆再生}}", "1 reproducción inversa"],
            ["{{逆ループで再生}}", "Reproducción en bucle invertido"],
            ["{{画面の拡大・縮小}}", "Acercar y alejar la pantalla"],
            ["{{カスタムイージングデータを保存}}", "Guarda los datos de la flexión personalizada"],
            ["{{カスタムイージングデータの読込}}", "Lectura de datos de flexibilización personalizados"],
            ["{{プレビューのON/OFF}}", "Activación/desactivación de la vista previa"],
            ["{{フォント枠サイズ}}", "Tamaño del marco de la fuente"],
            ["{{フォント枠カラー}}", "Color del marco de la fuente"],
            ["{{オニオンスキン}}", "Piel de cebolla"],
            ["{{バケツツール}}", "Herramientas para cubos"],
            ["{{ペンツール}}", "Herramienta de la pluma"],
            ["{{ダブルクリックでカーブポイントが追加されます}}", "Haga doble clic para añadir un punto de curva"],
            ["{{選択ツール}}", "Herramientas de selección"],
            ["{{Shape変形ツール}}", "Herramienta de transformación de formas"],
            ["{{テキストツール}}", "Herramienta de texto"],
            ["{{短形ツール}}", "Herramienta Rectángulo"],
            ["{{楕円ツール}}", "Herramienta Elipse"],
            ["{{角丸矩形ツール}}", "Herramienta Rectángulo Redondeado"],
            ["{{塗りのカラー}}", "Color de relleno"],
            ["{{線のカラー}}", "Color del trazo"],
            ["{{線の太さ}}", "Anchura de la carrera"],
            ["{{プロジェクトデータの読込}}", "Carga de los datos del proyecto"],
            ["{{プロジェクトデータを保存}}", "Guardar los datos del proyecto"],
            ["{{書き出し}}", "Exportar"],
            ["{{Discordへ移動}}", "Ir a la discordia"],
            ["{{バグ報告}}", "Informes de errores"],
            ["{{設定}}", "Configuración"],
            ["{{タブを追加}}", "Añadir una pestaña"],
            ["{{タブの一覧を表示・移動}}", "Ver y desplazarse por la lista de pestañas"],
            ["{{スクリプトを追加}}", "Añadir una secuencia de comandos"],
            ["{{キーフレームを追加}}", "Añadir un fotograma clave"],
            ["{{空のキーフレームを追加}}", "Añadir un fotograma clave vacío"],
            ["{{フレームを追加}}", "Añadir un marco"],
            ["{{フレームを削除}}", "Borrar el marco"],
            ["{{再生}}", "Juega a"],
            ["{{停止}}", "Detener"],
            ["{{ループ設定}}", "Ajuste del bucle"],
            ["{{レイヤーを追加}}", "Añadir una capa"],
            ["{{レイヤーを削除}}", "Eliminar la capa"],
            ["{{全てのレイヤーをハイライト}}", "Resaltar todas las capas"],
            ["{{全てのレイヤーを非表示}}", "Ocultar todas las capas"],
            ["{{全てのレイヤーをロック}}", "Bloquear todas las capas"],
            ["{{比率を固定}}", "Relación fija"],
            ["{{ステージの幅}}", "Anchura del escenario"],
            ["{{背景色}}", "Color de fondo"],
            ["{{ステージの高さ}}", "Altura del escenario"],
            ["{{フレームレート}}", "Velocidad de fotogramas"],
            ["{{シンボル名}}", "Nombre del símbolo"],
            ["{{イージング設定}}", "Ajuste de la flexibilización"],
            ["{{ビデオの音量設定}}", "Ajuste del volumen de vídeo"],
            ["{{自動再生}}", "Reproducción automática"],
            ["{{テキストエリアのボーダー設定}}", "Configuración del borde del área de texto"],
            ["{{テキスト入力設定}}", "Ajuste de la entrada de texto"],
            ["{{フォント選択}}", "Selección de fuentes"],
            ["{{自動サイズ調整}}", "Ajuste automático del tamaño"],
            ["{{フォントスタイルタイプ}}", "Tipo de letra"],
            ["{{行揃え}}", "Alinear"],
            ["{{改行設定}}", "Ajuste de la nueva línea"],
            ["{{スクロール設定}}", "Ajuste de desplazamiento"],
            ["{{フォントサイズ}}", "Tamaño de la fuente"],
            ["{{フォントカラー}}", "Color de la fuente"],
            ["{{行間}}", "Espacio de la línea"],
            ["{{文字幅}}", "Anchura de los caracteres"],
            ["{{左マージン}}", "Margen izquierdo"],
            ["{{右マージン}}", "Margen derecho"],
            ["{{カラー種別の選択}}", "Seleccione un tipo de color"],
            ["{{背景画像の選択}}", "Seleccionar una imagen de fondo"],
            ["{{カラーポインターを追加}}", "Añadir punteros de color"],
            ["{{カラー値}}", "Color"],
            ["{{アルファ(0%-100%)}}", "Alpha(0%-100%)"],
            ["{{アルファ値}}", "Alpha"],
            ["{{選択対象の幅}}", "Anchura del objeto de selección"],
            ["{{選択対象のX座標}}", "Coordenada X del objeto de selección"],
            ["{{選択対象の高さ}}", "Altura del objeto de selección"],
            ["{{選択対象のY座標}}", "Coordenada Y del objeto de selección"],
            ["{{選択対象の幅の伸縮}}", "scaleX del objeto seleccionado"],
            ["{{選択対象を回転}}", "Girar el objeto"],
            ["{{選択対象の高さの伸縮}}", "escalaY del objeto seleccionado"],
            ["{{アルファオフセット(-255〜255)}}", "Desplazamiento alfa(-255〜255)"],
            ["{{赤(0%-100%)}}", "Rojo(0%-100%)"],
            ["{{赤オフセット(-255〜255)}}", "Compensación roja(-255〜255)"],
            ["{{緑(0%-100%)}}", "Verde(0%-100%)"],
            ["{{緑オフセット(-255〜255)}}", "Compensación verde(-255〜255)"],
            ["{{青(0%-100%)}}", "Azul(0%-100%)"],
            ["{{青オフセット(-255〜255)}}", "Offset azul(-255〜255)"],
            ["{{ブレンドモード}}", "Modo de fusión"],
            ["{{フィルターを選択}}", "Seleccione un filtro"],
            ["{{フィルターを追加}}", "Añadir un filtro"],
            ["{{サウンドを追加}}", "Añadir un sonido"],
            ["{{フィルターを表示・非表示する}}", "Mostrar y ocultar filtros"],
            ["{{フィルターを削除}}", "Eliminar el filtro"],
            ["{{水平方向にぼかす}}", "Desenfoque horizontal"],
            ["{{垂直方向にぼかす}}", "Desenfoque vertical"],
            ["{{フィルター強度}}", "Fuerza del filtro"],
            ["{{フィルター角度}}", "Ángulo del filtro"],
            ["{{シャドウのアルファ}}", "Sombra Alfa"],
            ["{{シャドウのカラー}}", "Color de la sombra"],
            ["{{フィルター距離}}", "Distancia del filtro"],
            ["{{ハイライトのカラー}}", "Color de realce"],
            ["{{ハイライトのアルファ}}", "Resaltar Alpha"],
            ["{{グラデーションカラー}}", "Color degradado"],
            ["{{グラデーションのアルファ}}", "Gradiente Alfa"],
            ["{{タブの移動・名前を変更}}", "Mover/Renombrar pestañas"],
            ["{{プロジェクトを閉じる}}", "Cerrar el proyecto"],
            ["{{上下に移動}}", "Subir y bajar"],
            ["{{レイヤー変更(ダブルクリック)}}", "Cambio de capa (doble clic)"],
            ["{{レイヤーをハイライト}}", "Capa de resaltado"],
            ["{{レイヤーを非表示}}", "Ocultar capa"],
            ["{{レイヤーをロック}}", "Bloquear la capa"],
            ["{{カーブポインター(ダブルクリックでON/OFF)}}", "Puntero de curva (doble clic para activar/desactivar)"],
            ["{{インスタンス名}}", "Nombre de la instancia"],
            ["{{ライブラリ内の検索}}", "Buscar en la biblioteca"],
            ["{{フレームラベル}}", "Etiqueta del marco"],
            ["{{プロジェクトが保存されていない場合、このタブのプロジェクトデータを復旧する事はできません。タブを削除しますか？}}", "Si el proyecto no se guarda, los datos del proyecto en esta pestaña no se pueden recuperar. ¿Desea eliminar la pestaña?"]
        ]);
    }
}
