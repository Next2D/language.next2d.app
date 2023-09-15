/**
 * @class
 * @extends Language
 */
class Indonesia extends Language
{
    /**
     * @return {Map}
     * @method
     * @public
     */
    createMapping ()
    {
        return new Map([
            ["{{次のキーフレームに移動}}", "Pergi ke keyframe berikutnya"],
            ["{{前のキーフレームに移動}}", "Pergi ke keyframe sebelumnya"],
            ["{{全てのスクリプトをコピー}}", "Salin semua naskah"],
            ["{{スクリプトをコピー}}", "Salin naskah"],
            ["{{スクリプトをペースト}}", "Menempelkan skrip"],
            ["{{全てのラベルをコピー}}", "Menyalin semua label"],
            ["{{ラベルをコピー}}", "Menyalin label"],
            ["{{ラベルをペースト}}", "Menempel label"],
            ["{{全てのサウンドをコピー}}", "Menyalin semua suara"],
            ["{{サウンドをコピー}}", "Menyalin suara"],
            ["{{サウンドをペースト}}", "Menempelkan suara"],
            ["{{書き出し先の選択}}", "Memilih tujuan ekspor"],
            ["{{画質}}", "kualitas gambar"],
            ["{{座標}}", "mengkoordinasikan"],
            ["{{MovieClipを編集}}", "Edit MovieClip."],
            ["{{親の階層へ移動}}", "Pindah ke hierarki induk"],
            ["{{ロックされたレイヤーです}}", "Lapisan terkunci."],
            ["{{トゥイーンには複数のオブジェクトを設置できません}}", "Beberapa objek tidak dapat ditempatkan pada tween."],
            ["{{名前が重複しています}}", "Nama duplikat."],
            ["{{名前は必須です}}", "Nama harus diisi."],
            ["{{基準点}}", "titik referensi"],
            ["{{自由変形ツール}}", "Alat Transformasi Gratis"],
            ["{{キーフレームに変換}}", "Dikonversi ke bingkai utama"],
            ["{{空のキーフレームに変換}}", "Dikonversi ke keyframe kosong."],
            ["{{最初のフレームに移動}}", "Pergi ke bingkai pertama"],
            ["{{最後のフレームに移動}}", "Pergi ke bingkai terakhir"],
            ["{{SWFを解析中}}", "SWF sedang dianalisis."],
            ["{{JSONを生成}}", "Menghasilkan JSON"],
            ["{{ファイルを生成}}", "Hasilkan file"],
            ["{{N2Dファイルの読み込み}}", "Memuat file N2D."],
            ["{{JSONの読み込み}}", "Membaca JSON."],
            ["{{データを解凍中}}", "Data sedang dibongkar."],
            ["{{データを圧縮中}}", "Mengompresi data."],
            ["{{エンコード}}", "menyandikan"],
            ["{{外部ファイルの読み込み}}", "Memuat file eksternal"],
            ["{{バイナリデータを生成}}", "Menghasilkan data biner."],
            ["{{データベースを起動}}", "Mulai basis data"],
            ["{{データを保存中}}", "Menyimpan data."],
            ["{{完了}}", "penyelesaian"],
            ["{{ステージ左揃え}}", "perataan kiri panggung"],
            ["{{ステージ中央揃え(水平方向)}}", "Panggung terpusat (horizontal)"],
            ["{{ステージ右揃え}}", "Perataan kanan panggung"],
            ["{{ステージ上揃え}}", "penampilan di atas panggung"],
            ["{{ステージ中央揃え(垂直方向)}}", "Panggung terpusat (vertikal)"],
            ["{{ステージ下揃え}}", "pembenaran"],
            ["{{定規}}", "penggaris"],
            ["{{表示}}", "tampilan"],
            ["{{ショートカット}}", "jalan pintas"],
            ["{{レイヤーを複製}}", "Lapisan duplikat"],
            ["{{未使用のフォルダを削除}}", "Menghapus folder yang tidak digunakan."],
            ["{{同名のアイテムが存在します}}", "Ada beberapa item dengan nama yang sama."],
            ["{{追加ファイル}}", "file tambahan"],
            ["{{既存のコンテンツ}}", "Konten yang ada."],
            ["{{上書きするか、ファイル名を変更して追加するか、スキップを選択する事ができます}}", "Anda dapat memilih untuk menimpa, mengganti nama, dan menambahkan file atau melewatkan"],
            ["{{全て上書き}}", "Menimpa semua"],
            ["{{全てスキップ}}", "Lewati semua."],
            ["{{追加・上書き}}", "Penambahan dan penimpaan"],
            ["{{スキップ}}", "melewatkan"],
            ["{{表示確認したいフレームを指定}}", "Tentukan bingkai yang ingin Anda periksa tampilannya."],
            ["{{ファイル名を指定}}", "Menentukan nama file"],
            ["{{ファイル名}}", "nama-file"],
            ["{{終了フレームを指定}}", "Tentukan bingkai akhir"],
            ["{{開始フレームを指定}}", "Menentukan bingkai awal"],
            ["{{フレーム設定}}", "pengaturan bingkai"],
            ["{{書き出し設定}}", "Pengaturan ekspor"],
            ["{{ファイル形式の選択}}", "Memilih format file"],
            ["{{ファイル形式}}", "format file"],
            ["{{サイズ設定}}", "Ukuran"],
            ["{{左上}}", "kiri-atas"],
            ["{{中央上}}", "tengah-atas"],
            ["{{右上}}", "kanan-atas"],
            ["{{中央左}}", "kiri tengah"],
            ["{{中央}}", "pusat"],
            ["{{中央右}}", "kanan tengah"],
            ["{{左下}}", "kiri bawah"],
            ["{{中央下}}", "menengah ke bawah"],
            ["{{右下}}", "kanan-bawah"],
            ["{{中心点のX座標}}", "Koordinat X dari titik tengah"],
            ["{{中心点のY座標}}", "Koordinat Y dari titik tengah"],
            ["{{MovieClipに変換}}", "Konversi ke MovieClip"],
            ["{{変換}}", "transformasi"],
            ["{{ループ回数}}", "Jumlah putaran"],
            ["{{カーブポインターの削除}}", "Menghapus penunjuk kurva."],
            ["{{ステージ基準}}", "Kriteria Tahap"],
            ["{{閉じる}}", "dekat"],
            ["{{保存}}", "penyimpanan"],
            ["{{リセット}}", "mengatur ulang"],
            ["{{スクリーン}}", "layar"],
            ["{{ショートカット設定}}", "Pengaturan pintasan"],
            ["{{レイヤーカラー}}", "warna berlapis"],
            ["{{Next2Dを支援する}}", "Mendukung Next2D."],
            ["{{サポート}}", "dukungan"],
            ["{{未使用のアイテムを削除}}", "Menghapus item yang tidak digunakan"],
            ["{{レイヤーをペースト}}", "Menempelkan lapisan."],
            ["{{レイヤーをコピー}}", "Salin lapisan"],
            ["{{フレームをペースト}}", "Rekatkan bingkai."],
            ["{{フレームをコピー}}", "Salin bingkai."],
            ["{{キーフレームを削除}}", "Menghapus bingkai kunci."],
            ["{{キーフレームに空のキーフレームを追加できません}}", "Tidak dapat menambahkan bingkai utama kosong ke bingkai utama"],
            ["{{ズームツール}}", "Alat zoom"],
            ["{{タイムライン幅の拡大・縮小}}", "Memperluas dan mengurangi lebar garis waktu"],
            ["{{ガイドレイヤー}}", "lapisan panduan"],
            ["{{音量設定}}", "Pengaturan volume"],
            ["{{サウンドを削除}}", "Menghilangkan suara."],
            ["{{カスタムループ}}", "loop yang disesuaikan"],
            ["{{読込のみ}}", "Hanya baca"],
            ["{{書込を許可}}", "izin posting"],
            ["{{単一行}}", "garis sederhana"],
            ["{{複数行}}", "multiline"],
            ["{{自動で折り返し}}", "Perputaran otomatis"],
            ["{{左寄せ}}", "rata kiri"],
            ["{{中央揃え}}", "pemusatan"],
            ["{{右寄せ}}", "rata kanan"],
            ["{{放射状グラデーション}}", "gradasi radial"],
            ["{{線形グラデーション}}", "gradien linier"],
            ["{{画像}}", "Gambar."],
            ["{{画像選択}}", "Pemilihan gambar"],
            ["{{種別}}", "klasifikasi"],
            ["{{Shapeの色設定}}", "Pengaturan warna bentuk"],
            ["{{変形}}", "deformasi"],
            ["{{カラー効果}}", "efek warna"],
            ["{{フィルター}}", "filter"],
            ["{{Shapeを複製}}", "Bentuk duplikat."],
            ["{{読み込み}}", "baca di"],
            ["{{新規フォルダー}}", "Folder Baru"],
            ["{{新規MovieClip}}", "MovieClip baru."],
            ["{{枠に合わせてテキストをリサイズ}}", "Mengubah ukuran teks agar sesuai dengan bingkai."],
            ["{{テキストに合わせて枠をリサイズ}}", "Mengubah ukuran bingkai agar sesuai dengan teks."],
            ["{{リサイズしない}}", "Tidak ada pengubahan ukuran"],
            ["{{フォント}}", "font"],
            ["{{テキスト}}", "Teks."],
            ["{{ループ}}", "lingkaran"],
            ["{{音量}}", "volume"],
            ["{{ビデオ}}", "Video."],
            ["{{イージング}}", "pelonggaran"],
            ["{{サウンド}}", "suara"],
            ["{{シンボル}}", "simbol"],
            ["{{名前}}", "Nama."],
            ["{{オブジェクト}}", "objek"],
            ["{{ステージ設定}}", "Pengaturan panggung"],
            ["{{プレビュー}}", "pratinjau"],
            ["{{削除}}", "penghapusan"],
            ["{{ペースト}}", "tempel"],
            ["{{コピー}}", "salin"],
            ["{{プラグインメニュー}}", "Menu plug-in"],
            ["{{トゥイーン}}", "tween"],
            ["{{カーブポインターの追加}}", "Penunjuk kurva tambahan."],
            ["{{パスの結合}}", "Penggabungan jalur"],
            ["{{シェイプ}}", "bentuk"],
            ["{{キーフレームに配分}}", "Alokasi ke bingkai utama"],
            ["{{レイヤーに配分}}", "Alokasi ke lapisan"],
            ["{{タイムライン}}", "garis waktu"],
            ["{{整列}}", "penyelarasan"],
            ["{{最背面}}", "terbaru"],
            ["{{ひとつ背面へ}}", "Satu ke belakang."],
            ["{{ひとつ前面へ}}", "Satu ke depan."],
            ["{{最前面}}", "terpenting"],
            ["{{重ね順}}", "superposisi"],
            ["{{プラグイン}}", "plug-in"],
            ["{{ライブラリ}}", "perpustakaan"],
            ["{{プロパティ}}", "properti"],
            ["{{マスクレイヤー}}", "lapisan topeng"],
            ["{{通常レイヤー}}", "Lapisan Normal"],
            ["{{モーショントゥイーンの削除}}", "Penghapusan tweens gerak."],
            ["{{モーショントゥイーンの追加}}", "Tweens gerakan tambahan."],
            ["{{モーダル表示}}", "indikasi modal"],
            ["{{言語}}", "Bahasa."],
            ["{{フォーマット}}", "format"],
            ["{{含める}}", "termasuk"],
            ["{{含めない}}", "tidak termasuk"],
            ["{{使い方、リファレンス}}", "Penggunaan, referensi."],
            ["{{非表示レイヤー}}", "lapisan tersembunyi"],
            ["{{設定}}", "pengaturan"],
            ["{{デフォルトのループを利用する}}", "Gunakan loop default."],
            ["{{フレームピッカー}}", "pemetik bingkai"],
            ["{{左揃え}}", "pembenaran kiri"],
            ["{{中央揃え(水平方向)}}", "Terpusat (horizontal)"],
            ["{{右揃え}}", "pembenaran yang tepat"],
            ["{{上揃え}}", "pembenaran"],
            ["{{中央揃え(垂直方向)}}", "Terpusat (vertikal)"],
            ["{{下揃え}}", "pembenaran"],
            ["{{開始フレーム}}", "bingkai awal"],
            ["{{終了フレーム}}", "bingkai akhir"],
            ["{{ループで再生}}", "Putar dalam lingkaran"],
            ["{{1回再生}}", "1 pemutaran"],
            ["{{指定したフレームで固定}}", "Diperbaiki dalam bingkai yang ditentukan."],
            ["{{1回逆再生}}", "1 pemutaran mundur"],
            ["{{逆ループで再生}}", "Pemutaran dalam putaran balik."],
            ["{{画面の拡大・縮小}}", "Memperbesar dan memperkecil layar"],
            ["{{カスタムイージングデータを保存}}", "Menyimpan data pelonggaran khusus."],
            ["{{カスタムイージングデータの読込}}", "Membaca data pelonggaran khusus."],
            ["{{プレビューのON/OFF}}", "Pratinjau aktif/nonaktif."],
            ["{{フォント枠サイズ}}", "ukuran bingkai font"],
            ["{{フォント枠カラー}}", "Warna bingkai font"],
            ["{{オニオンスキン}}", "kulit bawang"],
            ["{{バケツツール}}", "Alat ember"],
            ["{{ペンツール}}", "alat pena"],
            ["{{ダブルクリックでカーブポイントが追加されます}}", "Klik dua kali untuk menambahkan titik kurva"],
            ["{{選択ツール}}", "alat seleksi"],
            ["{{Shape変形ツール}}", "Alat deformasi bentuk"],
            ["{{テキストツール}}", "alat teks"],
            ["{{矩形ツール}}", "Alat Persegi Panjang"],
            ["{{楕円ツール}}", "Alat elips"],
            ["{{角丸矩形ツール}}", "Alat persegi panjang sudut membulat"],
            ["{{塗りのカラー}}", "Warna cat"],
            ["{{線のカラー}}", "Warna garis"],
            ["{{線の太さ}}", "ketebalan garis"],
            ["{{プロジェクトデータの読込}}", "Membaca data proyek"],
            ["{{プロジェクトデータを保存}}", "Menyimpan data proyek."],
            ["{{書き出し}}", "kalimat atau paragraf pembuka"],
            ["{{Discordへ移動}}", "Pergi ke Discord"],
            ["{{バグ報告}}", "laporan bug"],
            ["{{設定}}", "pengaturan"],
            ["{{タブを追加}}", "Tab Tambah."],
            ["{{タブの一覧を表示・移動}}", "Menampilkan dan memindahkan daftar tab"],
            ["{{スクリプトを追加}}", "Tambahkan skrip."],
            ["{{キーフレームを追加}}", "Menambahkan bingkai kunci."],
            ["{{空のキーフレームを追加}}", "Menambahkan keyframe kosong."],
            ["{{フレームを追加}}", "Tambahkan bingkai."],
            ["{{フレームを削除}}", "Lepaskan bingkai."],
            ["{{再生}}", "regenerasi"],
            ["{{停止}}", "penghentian musik, tarian, dll. sebagai tanda berkabung"],
            ["{{ループ設定}}", "Pengaturan putaran"],
            ["{{レイヤーを追加}}", "Tambahkan lapisan."],
            ["{{レイヤーを削除}}", "Menghapus lapisan."],
            ["{{全てのレイヤーをハイライト}}", "Sorot semua lapisan"],
            ["{{全てのレイヤーを非表示}}", "Sembunyikan semua lapisan"],
            ["{{全てのレイヤーをロック}}", "Kunci semua lapisan."],
            ["{{比率を固定}}", "Rasio tetap"],
            ["{{ステージの幅}}", "Lebar panggung"],
            ["{{背景色}}", "warna latar belakang"],
            ["{{ステージの高さ}}", "Ketinggian panggung."],
            ["{{フレームレート}}", "kecepatan bingkai"],
            ["{{シンボル名}}", "nama simbol"],
            ["{{イージング設定}}", "Pengaturan pelonggaran"],
            ["{{ビデオの音量設定}}", "Pengaturan volume video"],
            ["{{自動再生}}", "putar otomatis"],
            ["{{テキストエリアのボーダー設定}}", "Pengaturan batas untuk area teks."],
            ["{{テキスト入力設定}}", "pengaturan entri teks"],
            ["{{フォント選択}}", "Pemilihan font"],
            ["{{自動サイズ調整}}", "Pengubahan ukuran otomatis"],
            ["{{フォントスタイルタイプ}}", "jenis gaya font"],
            ["{{行揃え}}", "membenarkan"],
            ["{{改行設定}}", "pengaturan jeda baris"],
            ["{{スクロール設定}}", "Pengaturan gulir"],
            ["{{フォントサイズ}}", "ukuran font"],
            ["{{フォントカラー}}", "warna font"],
            ["{{行間}}", "yang tersirat"],
            ["{{文字幅}}", "lebar karakter"],
            ["{{左マージン}}", "margin kiri"],
            ["{{右マージン}}", "margin kanan"],
            ["{{カラー種別の選択}}", "Pilih jenis warna"],
            ["{{背景画像の選択}}", "Memilih gambar latar belakang"],
            ["{{カラーポインターを追加}}", "Penunjuk warna tambahan."],
            ["{{カラー値}}", "nilai warna"],
            ["{{アルファ(0%-100%)}}", "Alpha (0%-100%)"],
            ["{{アルファ値}}", "nilai alfa"],
            ["{{選択対象の幅}}", "Lebar target seleksi"],
            ["{{選択対象のX座標}}", "Koordinat X dari target seleksi"],
            ["{{選択対象の高さ}}", "Ketinggian target seleksi"],
            ["{{選択対象のY座標}}", "Koordinat Y dari target seleksi"],
            ["{{選択対象の幅の伸縮}}", "Meregangkan dan mengecilkan lebar target seleksi"],
            ["{{選択対象を回転}}", "Putar pilihan"],
            ["{{選択対象の高さの伸縮}}", "Perpanjangan dan kontraksi ketinggian target seleksi."],
            ["{{アルファオフセット(-255〜255)}}", "Alfa offset (-255 hingga 255)"],
            ["{{赤(0%-100%)}}", "Merah (0%-100%)"],
            ["{{赤オフセット(-255〜255)}}", "Offset merah (-255 hingga 255)"],
            ["{{緑(0%-100%)}}", "Hijau (0%-100%)"],
            ["{{緑オフセット(-255〜255)}}", "Offset hijau (-255 hingga 255)"],
            ["{{青(0%-100%)}}", "Biru (0%-100%)"],
            ["{{青オフセット(-255〜255)}}", "Offset biru (-255 hingga 255)"],
            ["{{ブレンドモード}}", "mode campuran"],
            ["{{フィルターを選択}}", "Pilih filter"],
            ["{{フィルターを追加}}", "Tambahkan filter."],
            ["{{サウンドを追加}}", "Tambahkan suara."],
            ["{{フィルターを表示・非表示する}}", "Menampilkan/menyembunyikan filter"],
            ["{{フィルターを削除}}", "Menghapus filter."],
            ["{{水平方向にぼかす}}", "Memburamkan secara horizontal."],
            ["{{垂直方向にぼかす}}", "Keburaman vertikal."],
            ["{{フィルター強度}}", "Kekuatan filter"],
            ["{{フィルター角度}}", "Sudut filter"],
            ["{{シャドウのアルファ}}", "Shadow's Alpha."],
            ["{{シャドウのカラー}}", "Warna bayangan."],
            ["{{フィルター距離}}", "Jarak filter"],
            ["{{ハイライトのカラー}}", "Sorotan warna"],
            ["{{ハイライトのアルファ}}", "Sorot Alpha."],
            ["{{グラデーションカラー}}", "warna gradasi"],
            ["{{グラデーションのアルファ}}", "Alfa dari gradien"],
            ["{{タブの移動・名前を変更}}", "Memindahkan dan mengganti nama tab"],
            ["{{プロジェクトを閉じる}}", "Tutup proyek"],
            ["{{上下に移動}}", "Bergerak ke atas dan ke bawah"],
            ["{{レイヤー変更(ダブルクリック)}}", "Perubahan lapisan (klik dua kali)"],
            ["{{レイヤーをハイライト}}", "Menyorot lapisan."],
            ["{{レイヤーを非表示}}", "Menyembunyikan lapisan."],
            ["{{レイヤーをロック}}", "Mengunci lapisan."],
            ["{{カーブポインター(ダブルクリックでON/OFF)}}", "Penunjuk kurva (klik dua kali untuk menghidupkan/mematikan)"],
            ["{{インスタンス名}}", "nama contoh"],
            ["{{ライブラリ内の検索}}", "Mencari di perpustakaan"],
            ["{{フレームラベル}}", "label bingkai"],
            ["{{プロジェクトが保存されていない場合、このタブのプロジェクトデータを復旧する事はできません。タブを削除しますか？}}}}", "Jika proyek tidak disimpan, data proyek untuk tab ini tidak dapat dipulihkan. Apakah Anda ingin menghapus tab ini?}"]
        ]);
    }
}
