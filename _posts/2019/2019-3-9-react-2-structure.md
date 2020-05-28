---
layout: post
title:  "[React] 2편. Structure of React"
subtitle:   "react"
categories: devlog
tags: react
---

# 2편. Structure of React
- 리액트의 기본 구조는 어떻게 구성되어 있는지 알아본다.

## 리액트의 코드 구조는 어떻게 되어 있나?
- 리액트 기본 컴포넌트의 형식은 다음과 같다.

```
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
```

- 자바스크립트인것 같으면서도 HTML 코드처럼 보이는 리액트 코드를 세분화하여 살펴보자.

### Import
- import 를 한다는 것은 무엇을 불러온다는 것을 의미한다.
- 'react'로 부터 React 와 내부 Component 를 불러온다.
- 더불어 해당 App.js 파일과 동일한 디렉토리에 위치하는 logo.svg 와 App.css 파일을 불러온다.

```
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
```

### Component
- extend Component 를 통해 해당 클래스를 리액트 컴포넌트로 구분하였다.

```
class App extends Component {
  ...
}
```

### Render
- 리액트 클래스는 하나의 render 함수를 무조건 포함하고 있어야 한다.
  - render 함수 내에서 웹에 노출할 JSX 코드 (HTML 코드같이 생긴)를 작성하여 리턴한다.

## Reference
- https://velopert.com/3626
