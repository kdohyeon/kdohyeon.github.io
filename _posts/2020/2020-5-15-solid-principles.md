---
layout: post
title:  "[General] S.O.L.I.D 원칙"
subtitle:   "general"
categories: devlog
tags: general
---
-- 작성 중
# SOLID 원칙
- 객체지향 프로그래밍에서 지켜야 할 ```5대 원칙```을 뜻한다.

|  Acronym  |  Korean                |  English                              |
| --------- | ---------------------- | ------------------------------- |
| 'SRP'     | 단일 책임 원칙            | Single Responsibility Principle |
| 'OCP'     | 개방 및 폐쇄 원칙          | Open-Closed Principle |
| 'LSP'     | 리스코프 치환 원칙         | Liskov Substitution Principle |
| 'DIP'     | 의존 역전 원칙            | Dependency Inversion Principle |
| 'ISP'     | 인터페이스 분리 원칙        | Interface Segregation Principle |

## 왜 SOLID 원칙을 알아야 하는가?
- 시스템에 예상하지 못한 변경사항이 발생하여도, 유연하게 대처하고 확장성 있는 시스템 구조를 설계하기 위함. 좋은 설계란, 시스템에 새로운 요구사항 또는 변경사항이 있을 때, 영향을 받는 범위가 적은 구조를 뜻함.

## 1. Single Responsibility Principle, 단일 책임 원칙
> 소프트웨어의 설계 부품 (클래스, 함수 등)은 단 하나의 '책임'만을 가져야 한다.

## 2. Open-Closed Principle, 개방-폐쇄 원칙
> 기존의 코드를 변경하지 않고 (Closed) 기능을 수정하거나 추가할 수 있도록 (Open) 설계해야 한다.

## 3. Liskov Substitution Principle, 리스코프 치환 원칙
> 자식 클래스는 부모 클래스에서 가능한 행위를 수행할 수 있어야 한다.

## 4. Dependency Inversion Principle, 의존 역전 원칙
> 의존 관계를 맺을 때, 변화하기 쉬운것 보단 변화하기 어려운 것에 의존해야 한다.

## 5. Interface Segregation Principle, 인터페이스 분리 원칙
> 한 클래스는 자신이 사용하지 않는 인터페이스는 구현하지 말아야 한다 (하나의 일반적인 인터페이스보다, 다수의 구체적인 인터페이스가 낫다.)

# Reference
- https://bit.ly/2TJEEK7
- https://bit.ly/2M7v9Ae
- https://bit.ly/3derCvR
