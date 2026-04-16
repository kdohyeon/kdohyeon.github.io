---
layout: post
title: "Utterances로 블로그에 댓글 기능 추가하기"
date: 2026-04-16 12:00:00 +0900
categories: [개발]
tags: [Jekyll, GitHub Pages, 댓글]
---

정적 사이트인 Jekyll 블로그에 댓글 기능을 추가하는 방법은 여러 가지가 있습니다. 이 블로그에서는 **Utterances**를 선택했습니다.

## Utterances란?

[Utterances](https://utteranc.es)는 GitHub Issues를 댓글 저장소로 활용하는 오픈소스 위젯입니다.

### 장점

- **무료** · 광고 없음
- GitHub 계정으로 로그인하므로 스팸이 적음
- 댓글이 GitHub Issues에 저장되어 관리가 편함
- 다크 모드 테마 지원

## 설정 방법

### 1. Utterances 앱 설치

[GitHub Apps - utterances](https://github.com/apps/utterances)에서 앱을 설치합니다. 댓글을 저장할 저장소에만 권한을 부여하면 됩니다.

### 2. `_config.yml` 설정

```yaml
comments:
  utterances:
    repo: your-username/your-repo
    issue_term: pathname
    theme: github-light
    label: comment
```

### 3. `_includes/comments.html` 생성

```html
<section class="comments">
  <h2>댓글</h2>
  <script src="https://utteranc.es/client.js"
    repo="{{ site.comments.utterances.repo }}"
    issue-term="{{ site.comments.utterances.issue_term }}"
    theme="{{ site.comments.utterances.theme }}"
    label="{{ site.comments.utterances.label }}"
    crossorigin="anonymous"
    async>
  </script>
</section>
```

### 4. 포스트 레이아웃에 댓글 포함

`_layouts/post.html` 하단에 아래 한 줄을 추가합니다.

```liquid
{% include comments.html %}
```

이렇게 하면 모든 포스트 하단에 댓글창이 생깁니다.

## 마무리

설정이 완료되면 이 포스트 하단에서 직접 댓글을 달아보세요!
