---
layout: post
title:  "[React] 1편. Introduction to React"
subtitle:   "react"
categories: devlog
tags: react
---

# 1편. Introduction to React
- 리액트는 무엇인가? 어디서부터 왔는가? 주로 어디서 활용되는가? 왜 사용하는가? 등에 대해 알아보자.

## 무엇인가?
- 웹 개발을 하기 위해 사용되는 Front-end 라이브러리이다.

## Front-end 라이브러리 없이 웹 개발을 한다면?
- 하나의 예시를 살펴보자. 버튼을 클릭했을 때, 숫자값이 하나씩 올라가는 기능을 만들어야 한다면 어떻게 할까?
- 아마 다음과 같이 할 수 있을 것이다. 
```html
<div>
  <h1>Counter</h1>
  <h2 id="number">0</h2>
  <button id="increase">+</button>
</div>
``` 
- 그럼 버튼을 클릭했을 때 숫자 0이라는 값을 어떻게 증가시켜줄 수 있을까?
- 버튼을 클릭해서 숫자 0이라는 값을 바꿔주려면 각 DOM Element 에 대한 레퍼런스를 찾고, 이에 접근하여 원하는 작업을 해주어야 한다.
```javascript
var number = 0;
var elNumber = document.getElementById('number');
var btnIncrease = document.getElementById('increase');

btnIncrease.onclick = function() {
  number++;
  elNumber.innerText = number;
};
```
- 위 예시에서는 `btnIncrease` 라는 변수를 통해 increase 버튼에 대한 접근을 하고 `elNumber` 라는 변수를 통해 0 에 대한 접근을 하고 있다. 
- `onclick` 함수를 통해 버튼이 클릭될 때마다 `elNumber` 변수의 값을 하나씩 증가시킨다.
- 예시를 통해 살펴보았듯이, 수많은 DOM Element 를 직접 다 관리하고 코드 정리를 한다는 것은 매우 복잡하고 어려운 작업일 것이다.
- 그럼 조금 더 편하게 하는 방법은 무엇일까?

## Front-end 라이브러리를 사용해보자 
- DOM Element 에 대한 관리와 업데이트에 대한 관리 등 개발자가 굳이 신경쓰지 않아도 되는 부분은 Front-end 라이브러리가 맡아서 할 수 있다.
- 그렇다면 Front-end 라이브러리로는 어떤 것들이 있을까?
  - Angular.js
  - React.js
  - Vue.js
  - ...
  
## 이 중에서 리액트는?
- 리액트는 페이스북에서 만든 자바스크립트 기반 Front-end 라이브러리이다.
- "Component" 라는 개념에 집중이 되어 있으며, 화면 단에서 일어나는 변화에 대해서 효율적으로 처리한다.
- 리액트 매뉴얼에도 확인할 수 있듯이, 리액트는 데이터가 지속해서 바뀌는 대규모 어플리케이션을 만들기 위해 필요한 라이브러리이다.
> We built React to solve one problem: building large applications with data that changes over time.
- 리액트를 매우 강력하게 만들어주는 부분은 Virtual DOM 이다.
  - Virtual DOM 은 변화가 일어날 때, 실제로 브라우저의 DOM 에 새로운 값을 입력하는 것이 아니라 가상의 DOM 에 먼저 렌더링을 하고, 기존의 DOM 과 차이점을 파악한 후 필요한 곳에만 업데이트를 한다.

## 그럼 얼마나 좋은가? 많이들 사용하는가?
- 수많은 리액트 라이브러리
  - jQuery 가 처음 나왔을 때, 수많은 플러그인이 이에 기반하여 개발되었다.
  - 리액트 기반 라이브러리도 엄청나게 많이 만들어져 있다.
  
- 다양한 분야에서의 활용
  - 리액트에 기반한 서비스를 제공하는 곳은 매우 다양하고 많다. [여기](https://github.com/facebook/react/wiki/Sites-Using-React)

## Reference
- https://velopert.com/3612
