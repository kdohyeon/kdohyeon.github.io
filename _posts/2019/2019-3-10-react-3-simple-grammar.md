---
layout: post
title:  "[React] 3편. Simple Grammar in React"
subtitle:   "react"
categories: devlog
tags: react
---

# 3편. Simple Grammars in React
- 리액트 코드는 어떤 특징/문법이 있는지 알아본다.

## Single element in render
> render 함수 내에는 하나의 Element 로만 구성되어 있어야 한다.

- 예시를 먼저 보자.
  - render 함수 내 2개의 <div></div> 를 넣어야 한다면? 다음과 같이 작성할 수 있을 것이다.

```
...
  render() {
    return (
      <div>
        Hello
      </div>
      <div>
        Bye
      </div>
    );
  }
}
```

- 이렇게 작성한다면 오류가 발생하기 때문에 두 <div></div> 를 하나의 <div> 내에 포함하여야 한다.
  - 다음과 같이 작성할 수 있다.

```
...
  render() {
    return (
      <div>
        <div>
          Hello
        </div>
        <div>
          Bye
        </div>
      </div>
    );
  }
}
```

## Must close opened tags
> HTML 처럼 하나의 태그를 사용하기 위해 Open 을 하였다면 해당 태그를 꼭 Close 하여야 한다.

- 예를 들어, <div> 를 사용한다면 </div> 를 꼭 사용하여 close 하여야 한다.

## Using JavaScript in JSX
> 괄호를 활용하여 JavaScript 값을 입력할 수 있다.

- 예시는:
```
...
  render() {
    const name = "Danny";
    return (
      <div>
        <div>
          Hello, {name} // Hello, Danny
        </div>
        <div>
          Bye
        </div>
      </div>
    );
  }
}
```

## Conditional rendering
> 삼항 연산자를 활용하거나 AND 연산자를 활용한다.

- 삼항 연산자를 활용한다면?

```
...
  render() {
    return (
      <div>
        {
          1 + 1 === 2 
            ? (<div>맞아요!</div>)
            : (<div>틀려요!</div>)
        }
      </div>
    );
  }
}
...
```

- AND 연산자를 활용한다면?

```
...
  render() {
    return (
      <div>
        {
          1 + 1 === 2 && (<div>맞아요!</div>)
        }
      </div>
    );
  }
}
...
``` 

## Reference
- https://velopert.com/3626