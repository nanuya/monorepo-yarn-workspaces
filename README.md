# monorepo-yarn-workspaces

```
monorepo-yarn-workspaces
│  // monorepo 구성요소
├─ package.json
├─ .pnp.cjs
├─ .pnp.loader.mjs
├─ .yarnrc.yml
├─ packages
│  ├─ domain // 도메인
│  │  ├─ member
│  │  │  ├─ README.md
│  │  │  └─ package.json
│  │  ├─ order
│  │  │  ├─ README.md
│  │  │  └─ package.json
│  │  └─ product
│  │     ├─ README.md
│  │     └─ package.json
│  ├─ global // 공통
│  │  ├─ api-sdk
│  │  │  ├─ README.md
│  │  │  ├─ babel.config.json
│  │  │  ├─ index.ts
│  │  │  ├─ package.json
│  │  │  ├─ src
│  │  │  │  ├─ mall
│  │  │  │  │  └─ index.ts
│  │  │  │  ├─ order
│  │  │  │  │  └─ index.ts
│  │  │  │  └─ product
│  │  │  │     └─ index.ts
│  │  │  └─ tsconfig.json
│  │  ├─ ui-kit
│  │  │  ├─ README.md
│  │  │  ├─ build
│  │  │  │  ├─ assets
│  │  │  │  │  └─ index.adc7879a.js
│  │  │  │  └─ index.html
│  │  │  ├─ index.html
│  │  │  ├─ node_modules
│  │  │  │  └─ .vite
│  │  │  │     └─ deps
│  │  │  │        ├─ _metadata.json
│  │  │  │        ├─ chunk-MAOFAT5M.js
│  │  │  │        ├─ chunk-MAOFAT5M.js.map
│  │  │  │        ├─ package.json
│  │  │  │        ├─ react-dom.js
│  │  │  │        ├─ react-dom.js.map
│  │  │  │        ├─ react_jsx-dev-runtime.js
│  │  │  │        ├─ react_jsx-dev-runtime.js.map
│  │  │  │        ├─ react_jsx-runtime.js
│  │  │  │        └─ react_jsx-runtime.js.map
│  │  │  ├─ package.json
│  │  │  ├─ src
│  │  │  │  ├─ App.tsx
│  │  │  │  └─ index.tsx
│  │  │  ├─ tsconfig.json
│  │  │  ├─ tsconfig.node.json
│  │  │  └─ vite.config.ts
│  │  └─ utility
│  │     ├─ README.md
│  │     └─ package.json
│  └─ service // 서비스
│     ├─ admin-partner
│     │  ├─ README.md
│     │  ├─ build
│     │  │  ├─ assets
│     │  │  │  └─ index.adc7879a.js
│     │  │  └─ index.html
│     │  ├─ index.html
│     │  ├─ node_modules
│     │  │  └─ .vite
│     │  │     └─ deps
│     │  │        ├─ _metadata.json
│     │  │        ├─ chunk-MAOFAT5M.js
│     │  │        ├─ chunk-MAOFAT5M.js.map
│     │  │        ├─ package.json
│     │  │        ├─ react-dom.js
│     │  │        ├─ react-dom.js.map
│     │  │        ├─ react_jsx-dev-runtime.js
│     │  │        ├─ react_jsx-dev-runtime.js.map
│     │  │        ├─ react_jsx-runtime.js
│     │  │        └─ react_jsx-runtime.js.map
│     │  ├─ package.json
│     │  ├─ src
│     │  │  ├─ App.tsx
│     │  │  └─ index.tsx
│     │  ├─ tsconfig.json
│     │  ├─ tsconfig.node.json
│     │  └─ vite.config.ts
│     ├─ admin-pro
│     │  ├─ README.md
│     │  ├─ package.json
│     │  └─ src
│     │     ├─ index.html
│     │     └─ index.ts
│     └─ admin-service
│        ├─ README.md
│        ├─ package.json
│        └─ src
│           └─ index.html
│
│ // 공통으로 사용
├─ .vscode
│  ├─ extensions.json
│  └─ settings.json
├─ .editorconfig
├─ .git
├─ .github
│  └─ workflows
│     └─ node.js.yml
├─ .gitignore
├─ .npmrc
├─ .releaserc.yml
│
│ // ts
├─ tsconfig.json
│
│ // prettier && eslint
├─ .eslintignore
├─ .eslintrc.js
├─ .prettierignore
├─ .prettierrc.json
│
│  // dependency-cruiser 의존도 시각화
├─ berry-dependency-cruiser-config.js
├─ berry-high-level-dependencies.html
├─ berry-high-level-dependencies.svg
│
├─ README.md
└─ yarn.lock


```