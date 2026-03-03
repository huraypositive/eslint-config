# huray-eslint-config

Huray 프론트엔드 팀의 공유 ESLint 설정 모노레포입니다.

## 패키지 구성

| 패키지 | 설명 | npm |
|---|---|---|
| `@huray/eslint-config` | 공통 규칙 정의 (플러그인 미포함) | [![npm](https://img.shields.io/npm/v/@huray/eslint-config)](https://www.npmjs.com/package/@huray/eslint-config) |
| `@huray/eslint-config-next` | Next.js 프로젝트용 ESLint 설정 | [![npm](https://img.shields.io/npm/v/@huray/eslint-config-next)](https://www.npmjs.com/package/@huray/eslint-config-next) |
| `@huray/eslint-config-react` | React 프로젝트용 ESLint 설정 | [![npm](https://img.shields.io/npm/v/@huray/eslint-config-react)](https://www.npmjs.com/package/@huray/eslint-config-react) |

## 사용법

### Next.js 프로젝트

```bash
npm install -D @huray/eslint-config-next
# or
yarn add -D @huray/eslint-config-next
# or
pnpm add -D @huray/eslint-config-next
```

`eslint.config.js` (또는 `eslint.config.mjs`):

```js
import { defineConfig, globalIgnores } from 'eslint/config';
import huray from '@huray/eslint-config-next';

export default defineConfig([
  ...huray,
  globalIgnores(['.next/**', 'out/**', 'build/**', 'next-env.d.ts']),
]);
```

---

### React 프로젝트

```bash
npm install -D @huray/eslint-config-react
# or
yarn add -D @huray/eslint-config-react
# or
pnpm add -D @huray/eslint-config-react
```

`eslint.config.js` (또는 `eslint.config.mjs`):

```js
import { defineConfig, globalIgnores } from 'eslint/config';
import huray from '@huray/eslint-config-react';

export default defineConfig([
  ...huray,
  globalIgnores(['dist/**', 'build/**']),
]);
```

---

## VS Code 설정

`@huray/eslint-config` 설치 시 `postinstall` 스크립트가 자동으로 실행되어 `.vscode/` 파일을 생성하거나 기존 파일에 병합합니다.

### `.vscode/settings.json`

```json
{
  "editor.formatOnSave": false,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit"
  }
}
```

| 설정 | 값 | 설명 |
|---|---|---|
| `editor.formatOnSave` | `false` | 저장 시 포맷터 자동 실행 비활성화 |
| `source.fixAll.eslint` | `"explicit"` | 저장 시 ESLint auto-fix만 적용 (포맷터 대신 ESLint가 코드 정리) |

### `.vscode/extensions.json`

```json
{
  "recommendations": [
    "dbaeumer.vscode-eslint",
    "streetsidesoftware.code-spell-checker"
  ]
}
```

| 익스텐션 | 설명 |
|---|---|
| `dbaeumer.vscode-eslint` | ESLint 오류를 인라인으로 표시하고 저장 시 auto-fix 실행 |
| `streetsidesoftware.code-spell-checker` | 코드 내 영문 오타 감지 |

---

## 개발 환경 구성

### 초기 설치

```bash
pnpm install
```

### 모노레포 구조

```
huray-eslint-config/
├── packages/
│   ├── core/          # @huray/eslint-config (공통 규칙)
│   ├── next/          # @huray/eslint-config-next
│   ├── react/         # @huray/eslint-config-react
│   └── fixtures/
│       ├── next/      # Next.js 규칙 검증용 (배포 제외)
│       └── react/     # React 규칙 검증용 (배포 제외)
└── package.json
```

---

## 규칙 검증

`packages/fixtures/` 하위에 실제 규칙 위반 코드가 담긴 `TestComponent.jsx`를 통해 IDE에서 시각적으로 규칙 동작을 확인하거나, CLI로 검증할 수 있습니다.

```bash
# Next.js + React 전체 검증
pnpm lint

# Next.js 설정만 검증
pnpm lint:next

# React 설정만 검증
pnpm lint:react
```

---

## 배포

### 사전 준비

#### 1. npm 계정 생성 및 `@huray` organization 확인

npm 계정이 없다면 [npmjs.com](https://www.npmjs.com/signup)에서 먼저 계정을 생성합니다.

계정 생성 후 [npmjs.com/@huray](https://www.npmjs.com/settings/huray/packages) org의 멤버로 등록되어야 배포할 수 있습니다.

#### 2. npm 로그인

```bash
npm login
# 또는 pnpm 사용 시
pnpm login --registry https://registry.npmjs.org
```

로그인 후 아래 명령으로 계정을 확인합니다.

```bash
npm whoami
```

---

### 배포 절차

#### Step 1. 코드 수정 후 커밋

```bash
# packages/core/index.js 수정
git commit -m "[core][추가] prefer-template 규칙"
```

#### Step 2. changeset 기록 (`pnpm changeset`)
> [Changesets](https://github.com/changesets/changesets)는 모노레포에서 패키지별로 버전을 독립적으로 관리하기 위한 도구입니다. 변경할 때마다 "어떤 패키지를, 어떤 버전으로, 왜 올리는지"를 `.changeset/*.md` 파일로 기록해두고, 배포 시점에 이 파일들을 한꺼번에 소비해 버전 업데이트와 CHANGELOG를 자동으로 생성합니다.


```bash
pnpm changeset
```

터미널에서 대화형으로 진행됩니다.

```
# 어떤 패키지를 변경했나요?
◉ @huray/eslint-config        ← 스페이스바로 선택
◯ @huray/eslint-config-next
◯ @huray/eslint-config-react

# 변경 유형은?
● patch  ○ minor  ○ major

# 변경 내용 요약 (CHANGELOG에 기록됨)
> prefer-template 규칙 추가
```

| 유형 | 설명 | 예시 |
|---|---|---|
| `patch` | 하위 호환되는 버그 수정, 옵션 조정 | `2.0.0` → `2.0.1` |
| `minor` | 하위 호환되는 새 규칙 추가 | `2.0.0` → `2.1.0` |
| `major` | 기존 규칙 삭제, 호환성이 깨지는 변경 | `2.0.0` → `3.0.0` |

완료되면 `.changeset/random-name.md` 파일이 생성됩니다.

**패키지 선택 기준**

| 상황 | changeset에서 선택할 패키지 |
|---|---|
| `core` 규칙 수정 | `core`만 선택 → `next`, `react`는 자동으로 patch 버전 업 |
| `next`에만 규칙 추가 | `next`만 선택 |
| `core` 수정 + `next`에도 별도 변경 | 둘 다 선택, 각각 유형 지정 |

> `core`를 선택하면 이를 의존하는 `next`, `react`는 `.changeset/config.json`의 `updateInternalDependencies: "patch"` 설정에 의해 자동으로 patch 버전이 올라갑니다.

#### Step 3. 배포 (`pnpm release`)

```bash
pnpm release
```

아래 순서로 자동 실행됩니다.

```
① pnpm version
   └─ .changeset/*.md를 읽어서 버전 계산
   └─ package.json: "2.0.0" → "2.0.1"
   └─ CHANGELOG.md 업데이트
   └─ .changeset/*.md 삭제

② git commit && git push
   └─ 버전 변경 + .changeset/*.md 삭제 내용을 원격 저장소에 반영

③ pnpm publish
   └─ npm에 패키지 배포
   └─ git 태그 생성: @huray/eslint-config@2.0.1
   └─ fixtures/* 는 private이므로 자동 제외

④ git push --tags
   └─ 태그를 원격 저장소에 반영
```

---

### 전체 흐름 요약

```
코드 수정
  ↓
git commit
  ↓
pnpm changeset    # 어떤 패키지를, 어떤 버전으로, 왜 올리는지 기록
  ↓
pnpm release      # 버전 업데이트 + npm 배포 + 태그 생성
```
