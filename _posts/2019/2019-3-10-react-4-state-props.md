---
layout: post
title:  "[React] 4편. State and Props in React"
subtitle:   "react"
categories: devlog
tags: react
---

# 4편. State and Props in React
- 리액트에서 중요한 State 와 Props 에 대해 알아본다.

## What is State? What is Props?
- 먼저, 리액트 내에서 활용되는 State 는 다음과 같이 정리해볼 수 있다.

> Component 내부에서 선언하며 값을 변경할 수 있다.

- Props 는?

> 부모 Component 에서 자식 Component 로 전달하며 값은 Component 내부에서 직접 변경할 수 없다.

## State in Detail
- 동적인 데이터를 다룰 때 활용되며 값을 변경하려면 무조건 `this.setState()` 함수를 통해 변경하여야 한다.
- +/- 버튼을 클릭하였을 때, 값의 증가 및 감소하는 기능을 만들어 보자. 

```
import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      number: 0,
    })
  }

  handleIncrease = () => {
    this.setState({
      number: this.state.number + 1
    });
  }

  handleDecrease = () => {
    this.setState({
      number: this.state.number - 1
    });
  }

  render() {
    return (
      <div>
        <h1>카운터</h1>
        <div>값: {this.state.number}</div>
        <button onClick={() => this.handleIncrease()}>+</button>
        <button onClick={() => this.handleDecrease()}>-</button>
      </div>
    );
  }
}

export default Counter;
```

- 주의할 점은 `this.setState()` 이다. 리액트에서는 해당 함수가 호출되었을 때 re-rendering 되도록 설계되어 있다.
- 따라서, 리액트 내 존재하는 API LifeCycle 에 유의하여 사용하여야 하며 이에 대해서는 다음 챕터에서 알아보도록 하자.
  - 무한루프에 빠질 수 있다.. (렌더링 -> 함수 호출 -> setState -> 렌더링 -> 함수 호출 -> 무한반복...)
- 이 함수 자체에 대해 조금 더 알아본다면 객체 (Object) 로 전달되는 값을 업데이트 해준다.
- 만약, 다음과 같이 state 가 정의되어 있다면:

```javascript
state = {
  number: 0,
  features: {
    plus: 1,
    minus: 2,
  },
}
``` 

- 여기서 `number` 에 대한 값을 변경한다고 한다면, 다음과 같이 코드를 작성할 수 있다. 이렇게 되면 `number` 에 대한 값만 변경되며 `features` 에 대한 값은 변경되지 않는다.

```javascript
this.state({
  number: 1,
})

```

- 만약 `features` 내 `plus` 의 값을 변경하고 싶으면 어떻게 해야 할까? 다음과 같이 해주면 값이 바뀔까?

```javascript
this.state({
  features: {
    plus: 2,
  }
})
```

- 이렇게 되면 state 내 `features` 의 값은 `plus: 2` 만 남으며 `minus` 에 해당하는 값은 사라지게 된다.
- 그럼 `plus: 2` 로 하면서 `minus` 의 값은 어떻게 유지할까? 다음과 같이 `전개연산자`를 활용하면 가능하다.

```javascript
this.state({
  features: {
    ...this.state.features,
    plus: 2,
  },
})
```

## Props in Detail
- Props 에 대해 알아보기 위해서는 부모 Component 와 자식 Component 가 필요하다.
- 기존에 만들었던 App.js 를 부모 Component 로, 자식 Component 는 MyName.js 이라는 새로운 Component 를 만들어 보자.

```
// MyName.js - Child Component
import React, { Component } from 'react';

class MyName extends Component {
  props: {
    name: String,
  }
  
  static defaultProps = {
    name: 'Default Name',
  },
  
  render() {
    return (
      <div>
        안녕하세요! 제 이름은 <b>{this.props.name}</b> 입니다.
      </div>
    );
  }
}

export default MyName;

// App.js - Parent Component
import React, { Component } from 'react';
import MyName from './MyName';

class App extends Component {
  render() {
    return (
      <MyName 
        name="리액트" 
      />
    );
  }
}

export default App;

```

- 부모 Component 인 App.js 에서 `name` 을 `리액트`라고 보내게 되면 자식 Component 에서 `this.props.name` 으로 접근하여 해당 값을 사용할 수 있다.
  - 이를 사용하기 위해서 자식 Component 에서 `props: {}` 를 사용하여 정의해둔다.
- 만약 자식 Component 에서는 `name` 이라는 props 를 사용하기로 되어 있는데 부모 Component 에서 값을 보내주지 않는다면 `defaultProps` 라는 값을 통해 대체할 수 있다.  

## Reference
- https://velopert.com/3629