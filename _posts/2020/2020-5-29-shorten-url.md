---
layout: post
title:  "[General] URL을 줄여보자"
subtitle:   "general"
categories: devlog
tags: general
---

# bit.ly/...?
웹 사이트를 돌아다니다 보면 bit.ly/... 등의 url 을 본적이 있다. 트위터? 쪽에서 많이 봤던 것 같은데 이런 애들을 클릭하면 모종의 웹사이트로 연결해준다.
보기에도 깔끔하고 뭔가 그럴싸 해보인다.
이게 뭘까? 궁금해서 구글링을 해보았다.

## URL Shortening, URL 단축
https://bitly.com/ 에 가서 아무 웹 사이트 주소를 입력하면 https://bit.ly/... 형태의 주소로 바꾸어준다. 웹 주소에 한글, 숫자, 영문 상관없이 잘 바꾸어 준다.
어떠한 특징이 있을까?
- URL 주소 길이가 길든 짧든 상관없다.
- URL 을 줄여주기 때문에 텍스트 제한이 있는 트위터나 SMS 문자 메시지의 경우, 유용하게 사용할 수 있다.

## URL 단축 서비스는 어떻게 구현하나?
1. 원본 URL 을 입력 받는다.
2. 입력받은 원본 URL 이 유효한지 검증을 실시한다. (e.g., url 의 형식을 따르는지)
3. Shortening 알고리즘을 통해 URL 을 단축시킨다.
4. 사용자는 단축된 URL 로 접근하려고 할 때, 원본 URL 으로 리다이렉션 시켜준다.

## Shortening 알고리즘은 어떤 것들이 있을까?
검색을 해보면 많은 사이트가 ```Base62``` 인코딩 기반의 알고리즘을 사용할 수 있다고 나온다. DB 에 저장되는 Index ID 값을 Base62 로 인코딩하여 Short URL 을 뽑아낼 수 있다.

## 실제로는 어떤 값이 활용되나?
Short URL 을 사용자가 입력하는 순간, 개발자 도구에서 'Network' 쪽을 보면..

> General - Request URL: https://bit.ly/3es5xKk \
> Response Headers - Location: http://naver.com/ \
> Request Headers - Host: bit.ly \

### 예시
1. 원본 URL 은 'naver.com'
2. 유효성 검사는 bit.ly 에서 했을 듯
3. 모종의 Shortening 알고리즘을 통해 3es5xKk 라는 값으로 단축됨
4. bit.ly/3es5xKk 입력을 하면, 맵핑되어 있는 'naver.com' 으로 리다이렉션 시켜줌

# Reference
- https://metalkin.tistory.com/53
