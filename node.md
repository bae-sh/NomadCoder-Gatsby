# 10.1 Framework vs Library

- 갯츠비는 리액트 기반 프레임워크
- 라이브러리는 불러오려는 단순 사용하는것
- 프레임워크는 불러오는 것이 아닌 프레임워크에 코드를 불러옴

# 10.2 Creating a Project

- gatsby new > npm run develop

# 10.3 Static Sites

- 페이스북 인스타는 동적 사이트
- 블로그나 전자상거래 사이트 는 정적 사이트.
- 유저가 데이터를 올리지 않는것
- 갯츠비가 데이터 레이어를 어떻게 다루는지 초점
- reactJS가 브라우저 상에서 로드될 때 html 생성
- 이것이 create react app 의 방식인데 gatsby의 경우도 개발자 환경에서는 같음
- 하지만 배포 했을 경우 다름

# 10.4 Gatsby Build

- 빌드 전에는 JS를 받아온 상태처럼 행동하지만
- npm build 이후 npm run serve를 실행해 소스코드를 확인해보면
- html에 모든것이 담겨있는 것을 확인 할 수 있다.

# 10.5 Framework Rules

- Page 폴더 안 파일 명으로 라우터 생성 가능 (next와 같음)

# 10.6 Layouts

- Head 컴포넌트에 반영하면 가장 위에 나타남

# 10.7 Data Fetching

- reactjs > html 로 만들어주는 기능
- GraphQL 을 이용해 데이터를 배움
- 데이터를 어떤 시점에 받아올것인가에 따라 React를 쓸건지 Gatsby를 쓸건지 결정

# 10.8 GraphQL

- GraphQL의 경우 구체적인 정보에 대해서만 가져오게 할 수 있음
- query{ film(id='1234'){}}
