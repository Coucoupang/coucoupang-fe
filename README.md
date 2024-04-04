# CSS 속성 순서 컨벤션
```css
/* layout */
display
visibility
overflow 
float 
clear
position 
top 
right
bottom
left
z-index

/* Box */
width
height
margin
margin-top
margin-right
margin-bottom
margin-left
padding
padding-top
padding-right
padding-bottom
padding-left
box-shadow
border
border-radius

/* Background */
background-color

/* Font */
color
font-style
font-weight
font-size
line-height
letter-spacing
text-align
text-indent
vertical-align
word-break
white-space

/* Animation */
animation
transition

/* Misc */
cursor, filter, opacity, user-select ...
```

참고: [NHN 코딩 컨벤션](https://nuli.navercorp.com/data/convention/NHN_Coding_Conventions_for_Markup_Languages.pdf)
<hr/>

# 기능 명세서

### 고객

계정 관리
- 회원가입(이메일, 아이디, 비밀번호, 닉네임)
- 로그인(소셜 or 직접 로그인)
- 아이디 찾기(이메일, 아이디 별도) / 비밀번호 찾기(=변경)
- 마이페이지
- 자동 로그인

상품 관련 기능
- 계정 귀속
	- 장바구니
	- 주문 목록
	- 배송 조회...
	- 고객 문의 (1:1문의 -> 해당 상품의 업체에게 문의)

- 브라우저 귀속
	- 최근 본 상품

- 계정 귀속되지 않음
	- 홈 화면 상품 조회(인기리스트, 검색 많은거, 추천,...)
	- 상품 검색
	- 네비게이션
	- 상품 상세 정보 조회
	- footer

<hr/>

### 업체

계정 관련
- 업체 정보 등록, 삭제, 수정, ...

상품 관련
- 상품 관리
	- 등록, 삭제, 수정, ...
	- 상품 별 공지
- 주문 관리
- 문의 관리
