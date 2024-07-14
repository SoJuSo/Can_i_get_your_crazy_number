에러 바운더리도 할까 했지만, 에러가 많이 날 부분이 없다...ㅠ

숫자조절바는 어떻게 하는가! -> input으로 할 수 있다! 해보자!
그리고 굳이 router 쓰지말고 직접 구현으로 가자

스타일드 컴포넌트 필수..

SPA 라우팅을 직접 구현하기에는 공수가 많이 들어서 그냥 react-router-dom 설치

[오후 3:53] 차분한 색감보다는 따듯한 색감으로<br>
[오후 3:53] 빨강으로 갈수록 광란에 강하고 보라색으로 갈수록 차분<br>
[오후 3:54] 노란색을 베이스로 쓰고<br>
[오후 3:54] 빨간색이랑 파란색을 포인트로<br>
feat.joyswim :)

배경에 존재하는 svg 이미지를 어떻게 하면 잘 렌더링 할 수 있을까?

방안

1. 리액트 메모
   - 메모이제이션을 통해서 재계산 로직을 최적화해준다.
2. width에 따른 렌더링 요소 조절
   - width 감지 로직 필요

필요한 작업 - 컴포넌트화(svg 색상 변경하는지 확인하기) -> 변하지 않아서 따로 react-icons 써야할듯?

Debounce훅이랑 windowWidth를 구하는 훅을 분리했더니 올바르게 동작하지 않았다.<br >
분리된 파일로 인해서 타겟에 대한 상태관리가 깨져서 그런 것 같은데 더 정확한 원인을 잘 모르겠다..

Layout에 배경으로 들어가는 컴포넌트들이 겹친다 -> React.memo를 사용해서 감사주고 props값을 변동시켜 차별성을 둔다.

useMemo로 감싸니까 메모리 초과가 나서 프로세스가 뻗어버림..

<details>
<summary>CSS 질의응답 토글</summary>
<div markdown="1">

색상
재미있고 익살스러운 사이트를 만들기 위해 오렌지 계열의 배경과 라이트모드 및 다크모드를 지원하려면 가독성과 조화를 고려한 색상 조합이 중요합니다. 아래는 추천하는 색상 조합입니다.

### 라이트 모드

- **배경색**: 밝은 오렌지 계열 (#FFE5B4)
- **글씨 색상**: 진한 갈색 (#5A3E36) 또는 검정 (#000000)
- **기타 색상**: 밝은 회색 (#F0F0F0) 또는 하이라이트 색상 (#FFD700, 황금색)

### 다크 모드

- **배경색**: 어두운 오렌지 계열 (#FF8C00)
- **글씨 색상**: 밝은 흰색 (#FFFFFF) 또는 연한 회색 (#D3D3D3)
- **기타 색상**: 어두운 회색 (#2F2F2F) 또는 하이라이트 색상 (#FFD700, 황금색)

### CSS 예시

```css
/* 라이트 모드 */
body.light-mode {
  background-color: #ffe5b4;
  color: #5a3e36;
}

body.light-mode .highlight {
  background-color: #ffd700;
}

/* 다크 모드 */
body.dark-mode {
  background-color: #ff8c00;
  color: #ffffff;
}

body.dark-mode .highlight {
  background-color: #ffd700;
}

/* 공통 스타일 */
.floating-element {
  position: absolute;
  animation: float 5s infinite;
}

/* 색상표에 있는 요소들 */
.color-1 {
  background-color: #ff0000;
}
.color-2 {
  background-color: #00ff00;
}
.color-3 {
  background-color: #0000ff;
}
.color-4 {
  background-color: #ff00ff;
}
.color-5 {
  background-color: #00ffff;
}
.color-6 {
  background-color: #ffa500;
}
.color-7 {
  background-color: #800080;
}
.color-8 {
  background-color: #008000;
}
.color-9 {
  background-color: #ffc0cb;
}
.color-10 {
  background-color: #ff5733;
}
.color-11 {
  background-color: #33ff57;
}
.color-12 {
  background-color: #5733ff;
}
.color-13 {
  background-color: #33ffff;
}
.color-14 {
  background-color: #ff33ff;
}
.color-15 {
  background-color: #33ffaa;
}
.color-16 {
  background-color: #aa33ff;
}
.color-17 {
  background-color: #33aaff;
}
.color-18 {
  background-color: #ffa733;
}
.color-19 {
  background-color: #733fff;
}

@keyframes float {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
  100% {
    transform: translateY(0);
  }
}
```

이렇게 하면 배경색과 글씨 색상이 잘 어우러지면서도 가독성을 유지할 수 있습니다. 또한, 떠다니는 요소들의 색상이 배경과 잘 어울리도록 조정되어 재미있고 익살스러운 느낌을 줄 수 있습니다.
<br />
답변2<br />
더 어두운 다크모드 색상을 사용하여 눈의 피로를 줄이는 것이 좋습니다. 다음은 좀 더 어두운 다크모드 색상 조합입니다.

### 다크 모드

- **배경색**: 어두운 오렌지 계열 (#4E342E)
- **글씨 색상**: 밝은 흰색 (#FFFFFF) 또는 연한 회색 (#D3D3D3)
- **기타 색상**: 어두운 회색 (#2F2F2F) 또는 하이라이트 색상 (#FFD700, 황금색)

### CSS 예시

```css
/* 라이트 모드 */
body.light-mode {
  background-color: #ffe5b4;
  color: #5a3e36;
}

body.light-mode .highlight {
  background-color: #ffd700;
}

/* 다크 모드 */
body.dark-mode {
  background-color: #4e342e;
  color: #ffffff;
}

body.dark-mode .highlight {
  background-color: #ffd700;
}

/* 공통 스타일 */
.floating-element {
  position: absolute;
  animation: float 5s infinite;
}

/* 색상표에 있는 요소들 */
.color-1 {
  background-color: #ff0000;
}
.color-2 {
  background-color: #00ff00;
}
.color-3 {
  background-color: #0000ff;
}
.color-4 {
  background-color: #ff00ff;
}
.color-5 {
  background-color: #00ffff;
}
.color-6 {
  background-color: #ffa500;
}
.color-7 {
  background-color: #800080;
}
.color-8 {
  background-color: #008000;
}
.color-9 {
  background-color: #ffc0cb;
}
.color-10 {
  background-color: #ff5733;
}
.color-11 {
  background-color: #33ff57;
}
.color-12 {
  background-color: #5733ff;
}
.color-13 {
  background-color: #33ffff;
}
.color-14 {
  background-color: #ff33ff;
}
.color-15 {
  background-color: #33ffaa;
}
.color-16 {
  background-color: #aa33ff;
}
.color-17 {
  background-color: #33aaff;
}
.color-18 {
  background-color: #ffa733;
}
.color-19 {
  background-color: #733fff;
}

@keyframes float {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
  100% {
    transform: translateY(0);
  }
}
```

이렇게 하면 다크 모드에서 배경색이 더 어두워지면서 눈의 피로를 줄일 수 있습니다. 밝은 글씨 색상과 조화를 이루어 가독성을 유지할 수 있습니다.

</div>
</details>
<br />

현재 css로 nthchild로 처리된 부분 추후에 개별 컴포넌트화하고 랜덤 요소까지 부여하기
