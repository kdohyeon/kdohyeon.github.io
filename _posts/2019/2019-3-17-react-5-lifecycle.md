---
layout: post
title:  "[React] 5편. Life Cycle of React"
subtitle:   "react"
categories: devlog
tags: react
---

# 5편. Life Cycle of React
- 리액트 컴포넌트가 나타나고, 업데이트되고, 사라지는 리액트의 API Life Cycle 에 대해 알아본다.

## Component 초기 생성
### Constructor
- Component 가 새로 만들어질 때 마다 호출된다.

```
constructor(props) {
  super(props);
}
```

### ComponentDidMount
- Component 가 화면에 노출될 때 호출된다.
- 외부 라이브러리를 호출하거나 화면에 사용될 데이터를 불러올 때 (e.g., ajax, axios) 사용된다.

```
componentDidMount() {
  // 외부 라이브러리 연동: D3, masonry, etc
  // 컴포넌트에서 필요한 데이터 요청: Ajax, GraphQL, etc
  // DOM 에 관련된 작업: 스크롤 설정, 크기 읽어오기 등
}
```

## Component 업데이트
### static getDerivedStateFromProps()
- 새로운 props 값을 받을 때 호출된다.
- props 값에 따라 state 값을 바꾸어주어야 할 때 사용된다.

```
static getDerivedStateFromProps(nextProps, prevState) {
  // 여기서는 setState 를 하는 것이 아니라
  // 특정 props 가 바뀔 때 설정하고 설정하고 싶은 state 값을 리턴하는 형태로
  // 사용됩니다.
  /*
  if (nextProps.value !== prevState.value) {
    return { value: nextProps.value };
  }
  return null; // null 을 리턴하면 따로 업데이트 할 것은 없다라는 의미
  */
}
```

### shouldComponentUpdate
- Virtual DOM 의 비효율적인 렌더링을 막기 위해 사용된다.
  - 변화를 감지하기 위해서는 Virtual DOM 에 렌더링을 해주어야 한다.
  - 부모 Component 가 렌더링이 되면 자식 Component 도 렌더링이 된다.
  - 만약 Component 가 많다면 비효율적인 Virtual DOM 의 렌더링이 발생한다.
- 굳이 리렌더링이 필요없는 Component 의 경우, `return false` 를 통해 리렌더링을 막는다.

```
shouldComponentUpdate(nextProps, nextState) {
  // return false 하면 업데이트를 안함
  // return this.props.checked !== nextProps.checked
  return true;
}
```

### ComponentDidUpdate
- Component 에서 render() 의 호출 뒤 발생한다.
- 이 시점에선 `this.props` 와 `this.state` 가 바뀌어 있다. 
- 이전의 `prevProps` 와 `prevState` 를 조회 할 수 있다.

```
componentDidUpdate(prevProps, prevState) {

}
```

## Component 제거
### ComponentWillUnmount
- 렌더링이 완료된 후 더 이상 필요없는 Component 를 제거하기 위해 사용된다.

```
componentWillUnmount() {
  // 이벤트, setTimeout, 외부 라이브러리 인스턴스 제거
}
```

## Reference
- https://velopert.com/3631
- https://bit.ly/2UFeEhf