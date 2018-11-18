---
layout: post
title:  "[React.js] onMouseUp vs. onClick"
subtitle:   "같은 결과. 무엇이 다른가?"
categories: devlog
tags: react
---

Difference between onMouseUp vs. onClick
onMouseUp: you can click somewhere else on the screen, hold down the click button, and move the pointer to your onMouseUp element, and then release the mouse pointer
onClick: it both requires the onMouseDown and onMouseUp event to happen on that element
The normal expectation is that a click requires both the onMouseDown and onMouseUp event
