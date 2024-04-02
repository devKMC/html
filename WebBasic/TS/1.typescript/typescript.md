## Typescript
- 자바스크립트의 슈퍼셋인 오픈소스 프로그래밍 언어
- 마이크로 소프트에서 개발 및 유지하며 엄격한 문법을 지원
- 컴파일러 제공으로 정적 타입

### 개발환경 구축
- typeScript는 브라우저에서 동작하지 않으므로 TypeScript로 작성된 코드를 JavaScript로 변환하는 컴파일러가 필요

```bash
npm install -g typescript
```

- 파일의 확장자 명을 .ts로 작성
- .ts 파일을 .js파일로 컴파일 후 실행

```bash
tsc typescript.ts  #typescript.js 생성
node typescript.js # JS 실행
```

- 단순히 tsc로 컴파일 시 ES5로 변환
- TypeScript 컴파일 설정을 위해서 tsconfig 사용 

```bash
tsc --init # tsconfig.json 파일 생성
```

- TypeScript를 바로 실행하기 위해선 ts-node 설치
- ts-node typescript.ts 터미널 명령어 사용 가능

```bash
npm instal -g ts-node
```