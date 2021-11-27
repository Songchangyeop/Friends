# 🐶🐱 Friends

<br />

### 각 지역의 유기동물 입양 정보와 실종 동물의 정보를 조회할 수 있는 서비스입니다.

'반려동물 사지말고 입양합시다' 라는 말을 많이들 들어봤으나 어디서 정보를 찾고 어떻게 입양을 해야하는지 모르시는 분들이 많습니다.
<br />

Friends에서는 전국의 유기동물과 보호소의 정보를 얻을 수 있습니다.
<br />

Friends는 전국의 유기동물에게 따듯한 손길을 전해주고자 합니다.
<br />
<br />

<p align="center"><img src="public/img/screen.png"  width="500" height="300"></p>

<br />

## ⏰ 개발 기간

<br />

- 2021-07-28 ~ 2021-10-13

<br />
<br />

## 📒 프로젝트 노션 링크

<br />

[프로젝트 소개 노션 링크](https://holly-monarch-69a.notion.site/Friends-7d37c804379a4c99bcc2f77369f547f4)

<br />
<br />

## 🏠 데모 사이트

<br />

[https://friends-us.netlify.app/](https://friends-us.netlify.app/)

<br />
<br />

## ⚙️ 개발 스택

<br />

- ### 프론트
  - React
  - Redux + Saga
  - TypeScript
  - Styled-Components
  - Firebase

<br />

<br />
<br />

## 📁 Used Data

<br />

## [농림축산식품부 농림축산검역본부\_동물보호관리시스템 유기동물 조회 서비스](https://www.data.go.kr/tcs/dss/selectApiDataDetailView.do?publicDataPk=15001096)

<br />
<br />

## 🔨 트러블 슈팅

<br />

- Firebase Database에 저장된 찜 목록 데이터들을 Redux Saga로 받아오려 했으나 Firebase의 데이터는 onValue 함수로 받아오는 구조라서 Saga로 데이터를 Return 해줄 수 없었기 때문에 컴포넌트에서 onValue 함수를 실행하고 Response 데이터를 리덕스로 dispatch 하는 구조로 변경했습니다.

<br />
<br />
