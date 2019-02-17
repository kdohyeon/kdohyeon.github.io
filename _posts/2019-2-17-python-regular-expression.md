---
layout: post
title:  "[Python] Regular Expression"
subtitle:   "regular expression"
categories: devlog
tags: python
---

# Background
- Python 에서 활용할 수 있는 Regular Expression 라이브러리에 대해서 공부해보았다.
- re library (i.e., Regular Expression library) 는 기본적인 패턴에서부터 복잡한 패턴(e.g., 반복)까지 찾아낼 수 있는 라이브러리이다.
- Regular expression 은 주로 주어진 문자열 (string) 내에서 패턴 (pattern)을 찾고자 할 때 사용된다.  

# Basic Patterns
- 가장 쉬운 부분부터 시작해본다. 먼저 예시를 살펴보자.
> pattern = r"Cookie"
> sequence = "Cookie"
> if re.match(pattern, sequence):
>   print("Match!")
> else :
>   print("Not a match!")

# Reference
- https://www.datacamp.com/community/tutorials/python-regular-expression-tutorial#modulecontent