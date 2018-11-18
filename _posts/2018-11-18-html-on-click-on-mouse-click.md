---
layout: post
title:  "[HTML] onClick vs. onMouseUp"
subtitle:   "같은 결과. 무엇이 다른가?"
categories: devlog
tags: html
---

# 배경 - onClick vs. onMouseUp
웹에서 버튼 클릭을 했을 때, 특정 액션이 나타나게 하기 위해서는 내장되어있는 액션 실행 keyword 를 활용할 수 있다.
예를 들면, 다음과 같이 활용할 수 있다.

~~~
# 버튼 "Click me" 를 클릭했을 때, "myFunction()" 이 수행된다.
<button onclick="myFunction()">Click me</button>
~~~

버튼이 클릭되었을 때 나는 예시처럼 `onClick()`을 주로 활용했었다.

관련된 개념을 찾아보는 중, 똑같은 액션을 수행할 수 있는 `onMouseUp()`을 찾았다.

엄밀히 말하면 조금 다른 개념이긴 하다.

# 설명 - 무엇이 다른가?
사용자가 '클릭'이라는 행동을 취하려면 버튼A를 마우스로 눌럿다 떼야 한다.

여기서 `onClick()`은 눌럿다 떼는, 두 행동을 합친 것을 의미한다.

그렇다면 `onMouseUp()`은 떼는 행동이 일어났을 때를 의미한다.

해당 버튼을 눌렀을 때는 `onMouseDown()` 이라는 keyword 를 활용하면 된다.

하나의 case 로 사용자가 다른 곳을 `onMouseDown()` 했다가 버튼A에서 `onMouseUp()` 을 한다면?

`onClick()` 은 수행되지 않고, `onMouseUp()` 은 수행된다.

# 정리
따라서 사용자가 버튼A를 클릭했을 때, 내부적으로는:
`onMouseDown()` 이 수행되고 `onMouseUp()` 뒤따른다.
`onClick()` 은 두 액션을 AND 조건으로 수행되는 것을 의미한다.

일반적인 사용자의 '클릭'을 생각하여 구현을 한다면 onClick() 을 활용하여 구현하는 것이 사용자의 사용성을 조금이라도 생각할 수 있을 것이다.
