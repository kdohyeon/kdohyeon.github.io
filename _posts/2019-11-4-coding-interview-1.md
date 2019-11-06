---
layout: post
title:  "[Algorithm] Coding Interview #1"
subtitle:   "algorithm"
categories: devlog
tags: algorithm
---

# 중복 찾기

## 문제
```크기가 n인 배열에 1부터 n-1까지의 수가 들어 있고,
중복된 수가 한 개 더 들어 있다고 할 때, 중복된 수가 무엇인지 찾으시오. 
```

## 예시 결과
```
Input: [1, 2, 3, 4, 4] 
Output: 4 

Input: [1, 2, 3, 4, 2] 
Output: 2
```
## 방법
문제를 보고 처음 들었던 생각은 for-loop 을 두번 돌리면 되는거겠구나 라고 생각했다.
```
int findDuplicate(int[] list) {
    for (int i = 0; i < list.length; i++) {
        int currElement = list[i];
        for (int j = i+1; j < list.length; j++) {
            int compElement = list[j];
            if (currElement == compElement) {
                // found duplicate
                return currElement;
            }
        }
    }
    // no duplicate
    return 0;
}
```

그런데 이렇게 하면 비효율적이라 다른 방법을 생각해보았다.
> for-loop 을 한번만 사용해서 문제를 푼다면 어떻게 하면 될까?

```
int findDuplicate(int[] list) {
    boolean isFlagged = new boolean[list.length]
    for (int i = 0; i < list.length; i++) {
        int currElement = list[i];
        if (isFlagged[currElement]) {
            // found duplicate
            return currElement
        }

        isFlagged[currElement] = true;
    }
}
```

이렇게 하면 for-loop 을 한번만 사용해서 문제를 해결할 수 있지 않을까 생각한다.