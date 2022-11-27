/**
 * @class
 * @extends Language
 */
class Korean extends Language
{
    /**
     * @return {Map}
     * @method
     * @public
     */
    createMapping ()
    {
        return new Map([
            ["{{最初のフレームに移動}}", "첫 번째 프레임으로 이동"],
            ["{{最後のフレームに移動}}", "마지막 프레임으로 이동"],
            ["{{SWFを解析中}}", "SWF 분석 중"],
            ["{{JSONを生成}}", "JSON 생성"],
            ["{{ファイルを生成}}", "파일 생성"],
            ["{{N2Dファイルの読み込み}}", "N2D 파일 불러오기"],
            ["{{JSONの読み込み}}", "JSON 로드"],
            ["{{データを解凍中}}", "데이터 압축 해제 중"],
            ["{{データを圧縮中}}", "데이터 압축 중"],
            ["{{エンコード}}", "인코딩"],
            ["{{外部ファイルの読み込み}}", "외부 파일 로드"],
            ["{{バイナリデータを生成}}", "바이너리 데이터 생성"],
            ["{{データベースを起動}}", "데이터베이스 시작"],
            ["{{データを保存中}}", "데이터 저장 중"],
            ["{{完了}}", "완료"],
            ["{{ステージ左揃え}}", "스테이지 왼쪽 정렬"],
            ["{{ステージ中央揃え(水平方向)}}", "스테이지 중앙 정렬(수평 방향)"],
            ["{{ステージ右揃え}}", "스테이지 오른쪽 정렬"],
            ["{{ステージ上揃え}}", "무대에서 정렬"],
            ["{{ステージ中央揃え(垂直方向)}}", "스테이지 중앙 정렬(수직 방향)"],
            ["{{ステージ下揃え}}", "무대 아래 정렬"],
            ["{{定規}}", "눈금자"],
            ["{{表示}}", "표시"],
            ["{{ショートカット}}", "단축키"],
            ["{{レイヤーを複製}}", "중복 레이어"],
            ["{{未使用のフォルダを削除}}", "사용하지 않는 폴더 삭제"],
            ["{{同名のアイテムが存在します}}", "같은 이름의 항목이 존재합니다"],
            ["{{追加ファイル}}", "추가 파일"],
            ["{{既存のコンテンツ}}", "기존 콘텐츠"],
            ["{{上書きするか、ファイル名を変更して追加するか、スキップを選択する事ができます}}", "파일을 덮어쓰거나 이름을 변경하고 추가하거나 건너뛰도록 선택할 수 있습니다"],
            ["{{全て上書き}}", "모두 덮어쓰기"],
            ["{{全てスキップ}}", "모두 건너뛰기"],
            ["{{追加・上書き}}", "추가 또는 덮어쓰기"],
            ["{{スキップ}}", "건너뛰다"],
            ["{{表示確認したいフレームを指定}}", "표시 확인할 프레임 지정"],
            ["{{ファイル名を指定}}", "파일 이름 지정"],
            ["{{ファイル名}}", "파일 이름"],
            ["{{終了フレームを指定}}", "끝 프레임 지정"],
            ["{{開始フレームを指定}}", "시작 프레임 지정"],
            ["{{フレーム設定}}", "프레임 설정"],
            ["{{書き出し設定}}", "내보내기 설정"],
            ["{{ファイル形式の選択}}", "파일 형식 선택"],
            ["{{ファイル形式}}", "파일 형식"],
            ["{{サイズ設定}}", "사이즈 설정"],
            ["{{左上}}", "왼쪽 상단"],
            ["{{中央上}}", "상단 중앙"],
            ["{{右上}}", "오른쪽 상단"],
            ["{{中央左}}", "중앙 왼쪽"],
            ["{{中央}}", "센터"],
            ["{{中央右}}", "중앙 오른쪽"],
            ["{{左下}}", "왼쪽 하단"],
            ["{{中央下}}", "하단 중앙"],
            ["{{右下}}", "오른쪽 하단"],
            ["{{中心点のX座標}}", "중심점의 X 좌표"],
            ["{{中心点のY座標}}", "중심점의 Y 좌표"],
            ["{{MovieClipに変換}}", "MovieClip로 변환"],
            ["{{変換}}", "변환"],
            ["{{ループ回数}}", "루프 횟수"],
            ["{{カーブポインターの削除}}", "곡선 테이블의"],
            ["{{ステージ基準}}", "스테이지 기준"],
            ["{{閉じる}}", "닫다"],
            ["{{保存}}", "저장"],
            ["{{リセット}}", "리셋"],
            ["{{スクリーン}}", "스크린"],
            ["{{ショートカット設定}}", "바로 가기 설정"],
            ["{{レイヤーカラー}}", "레이어 색상"],
            ["{{Next2Dを支援する}}", "Next2D 지원"],
            ["{{サポート}}", "지원"],
            ["{{未使用のアイテムを削除}}", "사용하지 않는 항목 삭제"],
            ["{{レイヤーをペースト}}", "레이어 붙여넣기"],
            ["{{レイヤーをコピー}}", "레이어 복사"],
            ["{{フレームをペースト}}", "프레임을 붙여넣기"],
            ["{{フレームをコピー}}", "프레임 복사"],
            ["{{キーフレームを削除}}", "키프레임 삭제"],
            ["{{キーフレームに空のキーフレームを追加できません}}", "키프레임에 빈 키프레임을 추가할 수 없음"],
            ["{{ズームツール}}", "줌 도구"],
            ["{{タイムライン幅の拡大・縮小}}", "타임라인 폭 확대·축소"],
            ["{{ガイドレイヤー}}", "가이드레이야"],
            ["{{音量設定}}", "볼륨 설정"],
            ["{{サウンドを削除}}", "사운드 삭제"],
            ["{{カスタムループ}}", "맞춤형 루프"],
            ["{{読込のみ}}", "로드 전용"],
            ["{{書込を許可}}", "쓰기 허용"],
            ["{{単一行}}", "단일 행"],
            ["{{複数行}}", "여러 줄"],
            ["{{自動で折り返し}}", "자동으로 되감기"],
            ["{{左寄せ}}", "왼쪽"],
            ["{{中央揃え}}", "센터"],
            ["{{右寄せ}}", "권리"],
            ["{{放射状グラデーション}}", "방사형 그라데이션"],
            ["{{線形グラデーション}}", "선형 그라데이션"],
            ["{{画像}}", "이미지"],
            ["{{画像選択}}", "이미지 선택"],
            ["{{種別}}", "종별"],
            ["{{Shapeの色設定}}", "Shape 색상 설정"],
            ["{{変形}}", "변형"],
            ["{{カラー効果}}", "색상 변환"],
            ["{{フィルター}}", "필터"],
            ["{{Shapeを複製}}", "Shape 복제"],
            ["{{読み込み}}", "로딩"],
            ["{{新規フォルダー}}", "새 폴더"],
            ["{{新規MovieClip}}", "새로운 MovieClip"],
            ["{{枠に合わせてテキストをリサイズ}}", "프레임에 맞게 텍스트를 크기 조정"],
            ["{{テキストに合わせて枠をリサイズ}}", "텍스트에 맞게 프레임을 크기 조정"],
            ["{{リサイズしない}}", "크기 조정하지 않음"],
            ["{{フォント}}", "글꼴"],
            ["{{テキスト}}", "텍스트"],
            ["{{ループ}}", "루프"],
            ["{{音量}}", "볼륨"],
            ["{{ビデオ}}", "동영상"],
            ["{{イージング}}", "부드럽게"],
            ["{{サウンド}}", "소리"],
            ["{{シンボル}}", "상징"],
            ["{{名前}}", "이름"],
            ["{{オブジェクト}}", "개체"],
            ["{{ステージ設定}}", "스테이지 설정"],
            ["{{プレビュー}}", "미리보기"],
            ["{{削除}}", "삭제"],
            ["{{ペースト}}", "붙여넣기"],
            ["{{コピー}}", "복사"],
            ["{{プラグインメニュー}}", "플러그인 메뉴"],
            ["{{トゥイーン}}", "트윈"],
            ["{{カーブポインターの追加}}", "커브 포인터 추가"],
            ["{{パスの結合}}", "경로 결합"],
            ["{{シェイプ}}", "모양"],
            ["{{キーフレームに配分}}", "키프레임에 할당"],
            ["{{レイヤーに配分}}", "레이어에 배포"],
            ["{{タイムライン}}", "타임라인"],
            ["{{整列}}", "맞추다"],
            ["{{最背面}}", "최후면"],
            ["{{ひとつ背面へ}}", "하나의 뒷면으로"],
            ["{{ひとつ前面へ}}", "하나 앞으로"],
            ["{{最前面}}", "최전면"],
            ["{{重ね順}}", "겹침 순서"],
            ["{{プラグイン}}", "플러그인"],
            ["{{ライブラリ}}", "도서관"],
            ["{{プロパティ}}", "속성"],
            ["{{マスクレイヤー}}", "마스크 레이어"],
            ["{{通常レイヤー}}", "일반 레이어"],
            ["{{モーショントゥイーンの削除}}", "모션 트윈 삭제"],
            ["{{モーショントゥイーンの追加}}", "모션 트윈 추가"],
            ["{{モーダル表示}}", "모달 표시"],
            ["{{言語}}", "언어"],
            ["{{フォーマット}}", "형식"],
            ["{{含める}}", "포함"],
            ["{{含めない}}", "포함하지 않음"],
            ["{{使い方、リファレンス}}", "사용법, 참조"],
            ["{{非表示レイヤー}}", "숨겨진 레이어"],
            ["{{設定}}", "설정"],
            ["{{デフォルトのループを利用する}}", "기본 루프 사용"],
            ["{{フレームピッカー}}", "프레임 선택기"],
            ["{{左揃え}}", "왼쪽 정렬"],
            ["{{中央揃え(水平方向)}}", "중앙 정렬(수평 방향)"],
            ["{{右揃え}}", "오른쪽 정렬"],
            ["{{上揃え}}", "상단 정렬"],
            ["{{中央揃え(垂直方向)}}", "중앙 정렬(수직 방향)"],
            ["{{下揃え}}", "아래 정렬"],
            ["{{開始フレーム}}", "시작 프레임"],
            ["{{終了フレーム}}", "종료 프레임"],
            ["{{ループで再生}}", "루프로 재생"],
            ["{{1回再生}}", "한 번 재생"],
            ["{{指定したフレームで固定}}", "지정된 프레임으로 고정"],
            ["{{1回逆再生}}", "1회 역재생"],
            ["{{逆ループで再生}}", "역 루프로 재생"],
            ["{{画面の拡大・縮小}}", "화면 확대/축소"],
            ["{{カスタムイージングデータを保存}}", "맞춤형 여유 데이터 저장"],
            ["{{カスタムイージングデータの読込}}", "사용자 정의 여유 데이터 읽기"],
            ["{{プレビューのON/OFF}}", "프레뷰의 ON/OFF"],
            ["{{フォント枠サイズ}}", "글꼴 프레임 크기"],
            ["{{フォント枠カラー}}", "글꼴 프레임 색상"],
            ["{{オニオンスキン}}", "양파 껍질"],
            ["{{バケツツール}}", "버킷 도구"],
            ["{{ペンツール}}", "펜 도구"],
            ["{{ダブルクリックでカーブポイントが追加されます}}", "곡선 점을 추가하려면 두 번 클릭"],
            ["{{選択ツール}}", "선택 도구"],
            ["{{Shape変形ツール}}", "모양 변형 도구"],
            ["{{テキストツール}}", "텍스트 도구"],
            ["{{矩形ツール}}", "너무 직사각형"],
            ["{{楕円ツール}}", "타원 도구"],
            ["{{角丸矩形ツール}}", "둥근 사각형 도구"],
            ["{{塗りのカラー}}", "채우기 색상"],
            ["{{線のカラー}}", "획 색상"],
            ["{{線の太さ}}", "획 폭"],
            ["{{プロジェクトデータの読込}}", "프로젝트 데이터 로드"],
            ["{{プロジェクトデータを保存}}", "프로젝트 데이터 저장"],
            ["{{書き出し}}", "내 보내다"],
            ["{{Discordへ移動}}", "불화로 이동"],
            ["{{バグ報告}}", "버그 보고서"],
            ["{{設定}}", "환경"],
            ["{{タブを追加}}", "탭 추가"],
            ["{{タブの一覧を表示・移動}}", "탭 목록 보기 및 이동"],
            ["{{スクリプトを追加}}", "스크립트 추가"],
            ["{{キーフレームを追加}}", "키프레임 추가"],
            ["{{空のキーフレームを追加}}", "빈 키프레임 추가"],
            ["{{フレームを追加}}", "프레임 추가"],
            ["{{フレームを削除}}", "프레임 삭제"],
            ["{{再生}}", "놀다"],
            ["{{停止}}", "중지"],
            ["{{ループ設定}}", "루프 설정"],
            ["{{レイヤーを追加}}", "레이어 추가"],
            ["{{レイヤーを削除}}", "레이어 삭제"],
            ["{{全てのレイヤーをハイライト}}", "모든 레이어 강조 표시"],
            ["{{全てのレイヤーを非表示}}", "모든 레이어 숨기기"],
            ["{{全てのレイヤーをロック}}", "모든 레이어 잠금"],
            ["{{比率を固定}}", "고정 비율"],
            ["{{ステージの幅}}", "무대 폭"],
            ["{{背景色}}", "배경색"],
            ["{{ステージの高さ}}", "무대 높이"],
            ["{{フレームレート}}", "프레임 속도"],
            ["{{シンボル名}}", "기호 이름"],
            ["{{イージング設定}}", "이징 설정"],
            ["{{ビデオの音量設定}}", "비디오 볼륨 설정"],
            ["{{自動再生}}", "자동 재생"],
            ["{{テキストエリアのボーダー設定}}", "텍스트 영역 테두리 설정"],
            ["{{テキスト入力設定}}", "텍스트 입력 설정"],
            ["{{フォント選択}}", "글꼴 선택"],
            ["{{自動サイズ調整}}", "자동 크기 조정"],
            ["{{フォントスタイルタイプ}}", "글꼴 스타일 유형"],
            ["{{行揃え}}", "맞추다"],
            ["{{改行設定}}", "개행 설정"],
            ["{{スクロール設定}}", "스크롤 설정"],
            ["{{フォントサイズ}}", "글꼴 크기"],
            ["{{フォントカラー}}", "글꼴 색상"],
            ["{{行間}}", "줄 간격"],
            ["{{文字幅}}", "문자 너비"],
            ["{{左マージン}}", "왼쪽 여백"],
            ["{{右マージン}}", "오른쪽 여백"],
            ["{{カラー種別の選択}}", "색상 유형 선택"],
            ["{{背景画像の選択}}", "배경 이미지 선택"],
            ["{{カラーポインターを追加}}", "색상 포인터 추가"],
            ["{{カラー値}}", "색상"],
            ["{{アルファ(0%-100%)}}", "알파(0%-100%)"],
            ["{{アルファ値}}", "알파"],
            ["{{選択対象の幅}}", "선택 개체의 너비"],
            ["{{選択対象のX座標}}", "선택 객체의 X 좌표"],
            ["{{選択対象の高さ}}", "선택 개체의 높이"],
            ["{{選択対象のY座標}}", "선택 객체의 Y 좌표"],
            ["{{選択対象の幅の伸縮}}", "선택한 객체의 scaleX"],
            ["{{選択対象を回転}}", "개체 회전"],
            ["{{選択対象の高さの伸縮}}", "선택한 객체의 scaleY"],
            ["{{アルファオフセット(-255〜255)}}", "알파 오프셋(-255〜255)"],
            ["{{赤(0%-100%)}}", "빨간색(0%-100%)"],
            ["{{赤オフセット(-255〜255)}}", "레드 오프셋(-255〜255)"],
            ["{{緑(0%-100%)}}", "녹색(0%-100%)"],
            ["{{緑オフセット(-255〜255)}}", "그린 오프셋(-255〜255)"],
            ["{{青(0%-100%)}}", "파란색(0%-100%)"],
            ["{{青オフセット(-255〜255)}}", "블루 오프셋(-255〜255)"],
            ["{{ブレンドモード}}", "혼합 모드"],
            ["{{フィルターを選択}}", "필터 선택"],
            ["{{フィルターを追加}}", "필터 추가"],
            ["{{サウンドを追加}}", "소리 추가"],
            ["{{フィルターを表示・非表示する}}", "필터 표시 및 숨기기"],
            ["{{フィルターを削除}}", "필터 삭제"],
            ["{{水平方向にぼかす}}", "수평으로 흐림"],
            ["{{垂直方向にぼかす}}", "수직으로 흐림"],
            ["{{フィルター強度}}", "필터 강도"],
            ["{{フィルター角度}}", "필터 각도"],
            ["{{シャドウのアルファ}}", "섀도우 알파"],
            ["{{シャドウのカラー}}", "그림자 색상"],
            ["{{フィルター距離}}", "필터 거리"],
            ["{{ハイライトのカラー}}", "하이라이트 색상"],
            ["{{ハイライトのアルファ}}", "하이라이트 알파"],
            ["{{グラデーションカラー}}", "그라데이션 색상"],
            ["{{グラデーションのアルファ}}", "그라디언트 알파"],
            ["{{タブの移動・名前を変更}}", "탭 이동/이름 바꾸기"],
            ["{{プロジェクトを閉じる}}", "프로젝트 닫기"],
            ["{{上下に移動}}", "위아래로 이동"],
            ["{{レイヤー変更(ダブルクリック)}}", "레이어 변경(더블 클릭)"],
            ["{{レイヤーをハイライト}}", "하이라이트 레이어"],
            ["{{レイヤーを非表示}}", "레이어 숨기기"],
            ["{{レイヤーをロック}}", "레이어 잠금"],
            ["{{カーブポインター(ダブルクリックでON/OFF)}}", "곡선 포인터(켜기/끄려면 두 번 클릭)"],
            ["{{インスタンス名}}", "인스턴스 이름"],
            ["{{ライブラリ内の検索}}", "도서관에서 검색"],
            ["{{フレームラベル}}", "프레임 라벨"],
            ["{{プロジェクトが保存されていない場合、このタブのプロジェクトデータを復旧する事はできません。タブを削除しますか？}}", "프로젝트를 저장하지 않으면 이 탭의 프로젝트 데이터를 복구할 수 없습니다. 탭을 삭제하시겠습니까?"]
        ]);
    }
}
