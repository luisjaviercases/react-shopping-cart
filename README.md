# Shopping cart exercise

React application created with Vite that simulates a shopping cart for technological products.

Make API requests and cache them using RTKQuery and persist cart data using redux-persist.

Tailwind is used for the styles.

In this document you will be able to see the structure of the folders and some of the libraries that have been used to develop the project.

## Development scripts

### Install dependencies

```shell
npm install
```

### Compiles and hot-reloads for development

```shell
npm run start
```

### Compiles and minifies for production

```shell
npm run build
```

### Run your unit tests

```shell
npm run test
```

## Folder structure

```
<project-root>
├─ 📁 .husky
│   ├─ pre-commit
│   └─ pre-push
├─ 📁 node_modules
├─ 📂 packages
│   ├─ 📂 components
│   │   └─ 📁 ComponentName
│   │      └─ ComponentName.jsx
│   │      └─ ComponentName.test.jsx
│   ├─ 📂 features
│   │   └─ 📁 FeatureName
│   │      └─ FeatureName.jsx
│   │      └─ FeatureName.test.jsx
│   │      ├─ 📂 components
│   │      │   ├─ 📂 ComponentName
│   │      │   │   ├─ ComponentName.jsx
│   │      └─  └─  └─ ComponentName.test.jsx
│   ├─ 📂 hooks
│   │   ├─ useCustom.test.js
│   │   └─ useCustom.js
│   ├─ 📁 routes
│   ├─ 📁 services
│   ├─ 📁 state
│   ├─ 📁 styles
│   ├─ 📂 tests
│   └─   └─ setup.js
├─ .env
├─ .eslintrc.cjs
├─ .gitignore
├─ .lintstagedrc
├─ .prettierrc
├─ package.json
├─ tailwind.config.js
├─ vite.config.js
└─ <more project root files>
```

## Architecture

### React

React version 18.2.0

### Redux

Redux version 8.1.2
Redux Toolkit version 1.9.5

### Redux persist

Redux persist version 6.0.0

### React Router Dom

React router dom version 6.15.0

### Testing

We use Vitest and React testing library to do unit tests

### Husky & Lint-Staged

Husky Version 8.0.3
Lint-staged Version 14.0.1

Improved the development flow using Git Hooks that will be executed before commits and push. It will check if
the linter passes correctly and tests give OK

This ensure that the code you upload to repository has a minimum quality
