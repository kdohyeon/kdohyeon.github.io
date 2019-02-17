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
> pattern = r"Cookie" \
> sequence = "Cookie in a jar" \
> if re.match(pattern, sequence): \
>   print("Match!") \ 
> else : \
>   print("Not a match!") \

- 예시에서 활용된 `match()`는 해당 패턴이 sequence 내에 포함이 되는지를 확인한다. 만약 존재한다면 true 를 반환하며, 아닌 경우에는 None 을 리턴하여 결과값이 없음을 나타낸다.
- pattern 이라는 변수는 `r"Cookie"` 라고 정의가 되었는데, Cookie 앞에 붙은 `r` 은 무슨 뜻일까?
  - `raw string literal` 이라는 의미를 가지고 있다.
  - 자세히 설명을 하면, 쌍 따옴표 내에 있는 string 을 그 자체로 활용하겠다는 의미이다.
  - 예를 들어, escape string 으로 활용되는 backslash \ 의 경우, backslash 그 자체의 string 보다는 escape string 으로 활용되는 경우가 많다. 만약 backslash 그 자체를 패턴으로 활용하고 싶으면 r 과 함꼐 활용하면 된다.
    - E.g., r"\"
  - 물론, "Cookie"의 경우, 필요가 없겠지만 패턴의 prefix 로 r 을 활용하는 것은 좋은 practice 이다.
  
# Special Characters
- Special character 라는 것은 그 단어 또는 문자의 의미보다는 다른 특별한 의미를 가지고 있다.
- 많이 활용되는 special character 를 살펴보고자 한다.

## Period
- newline character 를 제외하고 모든 single 문자열과 매칭한다.
> re.search(r'Co.k.e', 'Cookie').group()
  - `.` 이 위치할 곳에 모든 single 문자열로 대체 가능하다.
- 결과값으로는 'Cookie' 가 리턴될 것이다.

# Reference
- https://www.datacamp.com/community/tutorials/python-regular-expression-tutorial#modulecontent