# assignment-react-magazine
### 🏁 백엔드와 함께 로그인 사용자용 매거진 사이트 만들기
<br/>

# Lv2. 프로젝트 요구사항
## 기능 목록
1. 게시글
- [x] 목록 가져오기
- [x] 추가하기 (+ 이미지 업로드하기)
- [x] 삭제하기
  - [ ] 게시글 삭제만 구현, 게시글 삭제시 댓글도 전부 삭제하는 로직 구현해야함
- [x] 수정하기
2. 좋아요
- [ ] 게시글에 좋아요하기
- [ ] 게시글에 좋아요 취소하기
3. - [x] 회원가입하기
4. - [x] 로그인하기
5. 예외처리
- [ ] 로그인 한 사용자가 로그인 페이지 또는 회원가입 페이지에 접속한 경우 '이미 로그인이 되어있습니다.'라는 메세지를 띄우고 `전체 게시글 목록 조회 페이지`로 이동시킬 수 있도록 예외처리하기
- [ ] 로그인하지 않은 사용자가 좋아요 버튼을 눌렀을 경우, '로그인이 필요합니다.'라는 메세지를 띄워주기
- [ ] 배포하기
## 페이지별 상세 페이지 요구사항
1. 회원가입 페이지
- [ ] 이메일 형식 체크, 비밀번호 체크
2. 로그인 페이지
- [ ] 이메일, 패스워드 미기입 시 로그인 버튼 활성화 막을 것
3. 메인 페이지(게시글 목록 페이지)
- [x] 게시글 목록 노출
- [x] 무한 스크롤
- [x] 게시글 하나는 작성자, 작성 시간, 이미지 미리보기, 텍스트 내용으로 구성
- [x] 게시글 하나를 클릭 시, 게시글 상세 페이지로 이동
- [ ] 게시글 중 좋아요 버튼(ex. 분홍색 하트 버튼)을 누르면 [좋아요]를 +1 한다. 다시 누르면 분홍색 하트가 회색 하트가 되고 좋아요가 -1개 된다.
4. 글 작성 페이지
- [ ] 레이아웃 선택 버튼
  1. 3가지 레이아웃 중 선택하도록 한다.
      - 이미지가 오른편에, 텍스트는 왼편에 위치한 레이아웃
      - 이미지가 왼편에, 텍스트는 오른편에 위치한 레이아웃
      - 텍스트가 위에, 이미지는 아래에 위치한 레이아웃
  2. 레이아웃 선택 시, 게시글 레이아웃(모양새)대로 메인 페이지에서 보이도록 한다.
  3. **텍스트, 이미지 중 입력 안된 게 있다면 게시글 작성 버튼 비활성화**
  4. 작성 완료 시 메인 페이지로 이동
5. 게시글 상세 페이지
- [ ] 게시글 레이아웃에 맞춰 이미지, 텍스트 위치 조절해서 노출

- [ ] UI 수정
- [ ] 모든 페이지는 반응형으로 구현

# Lv. 3 백엔드와 API 붙여보기
- [ ] 파이어베이스 코드 들어내기
- [ ] Axios 사용하여 코드 수정
- [ ] S3로 배포하기
- [ ] 백엔드 API와 연결 (API 개발 중일 경우 Mock API 활용)

# Lv. 4 프로젝트 최적화
- [ ] 코드 스플리팅
- [ ] 레이지 로딩
