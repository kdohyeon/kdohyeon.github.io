---
layout: post
title:  "[Python] Simple Chat-bot 만들기"
subtitle:   "chatbot"
categories: devlog
tags: python
---

# Goal: 
- to implement an ELIZA-like system as a conversational agent

# Level: 
- University-level assignment

# Constraints (Things that need to be considered for this assignment):
- 인풋이 들어오면 그에 알맞는 대응을 하여야 함
- 인풋 내 변수의 개수는 1개 또는 2개가 될 수 있음
- 아웃풋 내 변수의 개수는 1개 또는 2개가 될 수 있음
- 인풋 내 변수의 개수와 아웃풋 내 변수의 개수는 서로 independent
- 최소 25개의 rule 필요
  - 그 중 최소 10개는 변수가 1개인 rule
  - 그 중 최소 10개는 변수가 2개인 rule

# Tips
- String pattern matching library (re, regular expression) 사용 추천
- 문법상 완벽한 문장이 안되어도 상관없음

# Bonus points
- 전체 매칭이 가능한 rule 에서 랜덤하게 가져온다면 +10점 

# Examples of the simple chat-bot
- Input --> Output (Response)
- Example 1) I love <1> --> Why do you love <1> ?
- Example 2) <1> love <2> --> Tell me more about your feelings on <2>
- Example 3) Hi --> Hello

# Requirements to solve
1. Turn in your code [20pts]. (If you are going for bonus points, write a sentence on how you did it)
2. Turn in two conversations [10pts each] of about 1-2 pages each: 
  - First, you talking to the chat bot about the domain, showing how well it responds. 
  - Second, give it to a friend who is told nothing about it other than to talk to them about this topic. 
  - Write down some of your friend's impressions.
3. Based on how your ELIZA performs in conversations, describe in a sentence or two one way you could improve its performance, in principle, other than adding more rules [10pts].
  - *(Opinion: use 'search' than 'match', return a response from all possible responses, build a machine learning model that trains on user inputs)*
4. Finally, turn in a single sentence that you think nobody’s implementation will perform well on, but every human would. Explain why [5pts].
  - *(Opinion: Typically, a long sentence does not work well on ELIZA-like chat-bots.)* 

# Simple Chat-bot algorithm
- Define regular expression with possible responses in map
- For every possible expression:
  - If input string matches with one of the expressions:
    - Find a random possible response 

# Sites for reference
- Python Code Example - https://github.com/jezhiggins/eliza.py
- Paper on ELIZA - https://cse.buffalo.edu/~rapaport/572/S02/weizenbaum.eliza.1966.pdf