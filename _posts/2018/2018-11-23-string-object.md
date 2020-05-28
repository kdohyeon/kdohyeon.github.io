---
layout: post
title:  "[Java] String 문자열과 String 객체 차이"
subtitle:   "Java String"
categories: devlog
tags: java
---

문제: `String str = "abc"`와 `String str = new String("abc")`의 차이는 무엇인가?

해당 문제를 예시를 통해 살펴본다.

먼저 객체를 생성하는 경우이다.

> String a = new String("abcd"); 
> String b = new String("abcd");

위 문장은, heap 내의 일반적인 객체를 생성한 뒤, a가 그 객체의 참조값을 가르키게 되는 것이다.

b의 경우, 다른 객체이기 때문에 a 와 b 는 서로 값은 같아도 다른 참조값을 가르키게 된다.

따라서, 다음과 같은 경우는 `false` 값을 리턴하게 된다.
> if(a==b) // return false

하지만, a 와 b 의 값 자체를 비교하는 경우는 `true` 값을 리턴한다.
> if(a.equals(b)) // return true

다음으로 String 문자열에 대해서는:
> String c = "abcd"; 
> String d = "abcd";

위 문장은, heap 내의 String constant pool에 저장시키거나, 이미 존재하는 문자열이라면 그 저장된 배열의 인덱스 번호를 가리키게 하는 형태로 되어 있다.

즉, string constant "abcd" 를 c 와 d 모두 가르키고 있다.

따라서, 다음과 같은 경우는 `true` 값을 리턴하게 된다.
> if(a==b) // return true

또한, 다음과 같은 경우도 `true` 값을 리턴한다.
> if(a.equals(b)) // return true


Reference:
- https://bit.ly/2zpm9jK