---
layout: post
title:  "[Python] For loop"
subtitle:   "for loop"
categories: devlog
tags: python
---

# Introduction
- Fop loop 는 언제 사용하면 될까?
- 특정 코드를 반복적으로 수행하여야 할 때 for loop 를 사용할 수 있다.
- 예를 들어, Hello World 라는 문구를 3번 출력해야 하는 상황일 때, 다음과 같은 코드를 작성할 수 있다.
```python
print('Hello World 1')
print('Hello World 2')
print('Hello World 3')
``` 
- 하지만 이렇게 같은 역할을 하는 코드의 경우, for loop 를 통해 코드를 간략화할 수 있다.
```python
for index in range(0, 3):
  print('Hello World ', index)
```
- 상기 코드에 대해서 상세히 알아보자.
  - index 라는 것은 loop 가 실행되는 각 step 을 나타낸다. 예를 들어, 3번 수행되는 for loop 의 경우, index 값은 0, 1, 2가 된다. 
  - range 함수는 loop 가 총 몇번 수행될지를 알려준다. 더불어, index 의 시작값과 종료값을 지정할 수 있다.
    - range(start, end) - 시작 index: 0, 종료 index: 3
    - 시작 index 값은 inclusive 이며, 종료 index 값은 exclusive 이다.
    
# Ways to Iterator For Loop
- 앞선 예시에서는 range 함수를 통해 loop 를 iterate 하였지만, 다른 방법들도 존재한다.

## String as an iterable
```python
str = 'Hello World'
for index in str:
  print(index)
```

## Array as an iterable
```python
arr = ['a', 'b', 'c', 'd']
for index in arr:
  print(index, arr[index])
```

## Loop over 2D Array
```python
arr_of_arr = [['a', 'b', 'c'], ['d', 'e', 'f'], ['g', 'h', 'i']]
for arr in arr_of_arr:
  for index in arr:
    print(index, arr[index])
```

# Reference
- https://wiki.python.org/moin/ForLoop