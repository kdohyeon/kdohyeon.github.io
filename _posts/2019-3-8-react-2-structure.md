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

```javascript
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


## Reference
- https://velopert.com/3626
