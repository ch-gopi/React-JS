# React-JS
# Create React App [![Build & Test](https://github.com/facebook/create-react-app/actions/workflows/build-and-test.yml/badge.svg?branch=main)](https://github.com/facebook/create-react-app/actions/workflows/build-and-test.yml) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-green.svg)](https://github.com/facebook/create-react-app/blob/main/CONTRIBUTING.md)

<img alt="Logo" align="right" src="https://create-react-app.dev/img/logo.svg" width="20%" />

Create React apps with no build configuration.

- [Creating an App](#creating-an-app) – How to create a new app.
- [User Guide](https://facebook.github.io/create-react-app/) – How to develop apps bootstrapped with Create React App.

Create React App works on macOS, Windows, and Linux.<br>
If something doesn’t work, please [file an issue](https://github.com/facebook/create-react-app/issues/new).<br>
If you have questions or need help, please ask in [GitHub Discussions](https://github.com/facebook/create-react-app/discussions).

## Quick Overview

```sh
npx create-react-app my-app
cd my-app
npm start
```

If you've previously installed `create-react-app` globally via `npm install -g create-react-app`, we recommend you uninstall the package using `npm uninstall -g create-react-app` or `yarn global remove create-react-app` to ensure that npx always uses the latest version.

_([npx](https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b) comes with npm 5.2+ and higher, see [instructions for older npm versions](https://gist.github.com/gaearon/4064d3c23a77c74a3614c498a8bb1c5f))_

Then open [http://localhost:3000/](http://localhost:3000/) to see your app.<br>
When you’re ready to deploy to production, create a minified bundle with `npm run build`.

<p align='center'>
<img src='https://cdn.jsdelivr.net/gh/facebook/create-react-app@27b42ac7efa018f2541153ab30d63180f5fa39e0/screencast.svg' width='600' alt='npm start'>
</p>

### Get Started Immediately

You **don’t** need to install or configure tools like webpack or Babel.<br>
They are preconfigured and hidden so that you can focus on the code.

Create a project, and you’re good to go.

## Creating an App

**You’ll need to have Node 14.0.0 or later version on your local development machine** (but it’s not required on the server). We recommend using the latest LTS version. You can use [nvm](https://github.com/creationix/nvm#installation) (macOS/Linux) or [nvm-windows](https://github.com/coreybutler/nvm-windows#node-version-manager-nvm-for-windows) to switch Node versions between different projects.

To create a new app, you may choose one of the following methods:

### npx

```sh
npx create-react-app my-app
```

_([npx](https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b) is a package runner tool that comes with npm 5.2+ and higher, see [instructions for older npm versions](https://gist.github.com/gaearon/4064d3c23a77c74a3614c498a8bb1c5f))_

### npm

```sh
npm init react-app my-app
```

_`npm init <initializer>` is available in npm 6+_

### Yarn

```sh
yarn create react-app my-app
```

_[`yarn create <starter-kit-package>`](https://yarnpkg.com/lang/en/docs/cli/create/) is available in Yarn 0.25+_

It will create a directory called `my-app` inside the current folder.<br>
Inside that directory, it will generate the initial project structure and install the transitive dependencies:

```
my-app
├── README.md
├── node_modules
├── package.json
├── .gitignore
├── public
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
└── src
    ├── App.css
    ├── App.js
    ├── App.test.js
    ├── index.css
    ├── index.js
    ├── logo.svg
    └── serviceWorker.js
    └── setupTests.js
```

No configuration or complicated folder structures, only the files you need to build your app.<br>
Once the installation is done, you can open your project folder:

```sh
cd my-app
```

Inside the newly created project, you can run some built-in commands:

### `npm start` or `yarn start`

Runs the app in development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will automatically reload if you make changes to the code.<br>
You will see the build errors and lint warnings in the console.

<p align='center'>
<img src='https://cdn.jsdelivr.net/gh/marionebl/create-react-app@9f6282671c54f0874afd37a72f6689727b562498/screencast-error.svg' width='600' alt='Build errors'>
</p>

### `npm test` or `yarn test`

Runs the test watcher in an interactive mode.<br>
By default, runs tests related to files changed since the last commit.

[Read more about testing.](https://facebook.github.io/create-react-app/docs/running-tests)

### `npm run build` or `yarn build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>

Your app is ready to be deployed.

## User Guide

You can find detailed instructions on using Create React App and many tips in [its documentation](https://facebook.github.io/create-react-app/).

## How to Update to New Versions?

Please refer to the [User Guide](https://facebook.github.io/create-react-app/docs/updating-to-new-releases) for this and other information.

## Philosophy

- **One Dependency:** There is only one build dependency. It uses webpack, Babel, ESLint, and other amazing projects, but provides a cohesive curated experience on top of them.

- **No Configuration Required:** You don't need to configure anything. A reasonably good configuration of both development and production builds is handled for you so you can focus on writing code.

- **No Lock-In:** You can “eject” to a custom setup at any time. Run a single command, and all the configuration and build dependencies will be moved directly into your project, so you can pick up right where you left off.

## What’s Included?

Your environment will have everything you need to build a modern single-page React app:

- React, JSX, ES6, TypeScript and Flow syntax support.
- Language extras beyond ES6 like the object spread operator.
- Autoprefixed CSS, so you don’t need `-webkit-` or other prefixes.
- A fast interactive unit test runner with built-in support for coverage reporting.
- A live development server that warns about common mistakes.
- A build script to bundle JS, CSS, and images for production, with hashes and sourcemaps.
- An offline-first [service worker](https://developers.google.com/web/fundamentals/getting-started/primers/service-workers) and a [web app manifest](https://developers.google.com/web/fundamentals/engage-and-retain/web-app-manifest/), meeting all the [Progressive Web App](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app) criteria. (_Note: Using the service worker is opt-in as of `react-scripts@2.0.0` and higher_)
- Hassle-free updates for the above tools with a single dependency.

Check out [this guide](https://github.com/nitishdayal/cra_closer_look) for an overview of how these tools fit together.

The tradeoff is that **these tools are preconfigured to work in a specific way**. If your project needs more customization, you can ["eject"](https://facebook.github.io/create-react-app/docs/available-scripts#npm-run-eject) and customize it, but then you will need to maintain this configuration.



A collection of awesome things regarding the React ecosystem.

- [React](#react)
  - [React General Resources](#react-general-resources)
  - [React Tutorials](#react-tutorials)
  - [React Development Tools](#react-development-tools)
  - [React Frameworks](#react-frameworks)
  - [React Component Libraries](#react-component-libraries)
  - [React State Management and Data Fetching](#react-state-management-and-data-fetching)
  - [React Styling](#react-styling)
  - [React Routing](#react-routing)
  - [React Libraries](#react-libraries)
  - [React Testing](#react-testing)
  - [React Awesome Components](#react-awesome-components)
  - [React Components Sandboxes](#react-components-sandboxes)
  - [React Forms](#react-forms)
  - [React Tables and Grids](#react-tables-and-grids)
  - [React Maps](#react-maps)
  - [React Charts](#react-charts)
  - [React Renderers](#react-renderers)
  - [React Internationalization](#react-internationalization)
  - [React Graphics and Animations](#react-graphics-and-animations)
  - [React Integration](#react-integration)
  - [React Real Apps](#react-real-apps)
- [React Native](#react-native)
  - [React Native General Resources](#react-native-general-resources)
  - [React Native Navigation](#react-native-navigation)
  - [React Native Awesome Components](#react-native-awesome-components)
  - [React Native Libraries](#react-native-libraries)
- [Contribution](#contribution)

### React

#### React General Resources

- [React Official Website](https://react.dev/)
- [React GitHub](https://github.com/facebook/react)
- [Reactiflux Discord Channel](http://www.reactiflux.com/)
- [React Community](https://react.dev/community)
- [React Conferences](https://react.dev/community/conferences)
- [React CodeSandbox Playground](https://codesandbox.io/s/new)

#### React Tutorials

- [React Official Tutorial](https://react.dev/learn)
- [Using React in Visual Studio Code](https://code.visualstudio.com/docs/nodejs/reactjs-tutorial)
- [React Interview Questions & Answers](https://github.com/sudheerj/reactjs-interview-questions)
- [Design patterns and Component patterns for building powerful Web Apps](https://www.patterns.dev/)
- [A simple, scalable, and powerful architecture for building production ready React applications](https://github.com/alan2207/bulletproof-react)
- [Cheatsheets for experienced React developers getting started with TypeScript](https://github.com/typescript-cheatsheets/react-typescript-cheatsheet)
- [The Fullstack Tutorial for GraphQL](https://github.com/howtographql/howtographql)

#### React Development Tools

- [create-react-app](https://github.com/facebook/create-react-app) - Set up a modern Web app by running one command
- [vite](https://github.com/vitejs/vite) - Next Generation Frontend Tooling
- [reactotron](https://github.com/skellock/reactotron) - A desktop app for inspecting your React and React Native projects
- [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react) - React specific linting rules for ESLint
- [why-did-you-render](https://github.com/welldone-software/why-did-you-render) - Monkey patches React to notify you about avoidable re-renders

#### React Frameworks

- [next](https://github.com/vercel/next.js) - The React Framework
- [blitz](https://github.com/blitz-js/blitz) - The Missing Fullstack Toolkit for Next.js
- [remix](https://remix.run/) - Full stack web Framework that lets you focus on the user interface
- [gatsby](https://github.com/gatsbyjs/gatsby) - Build modern websites with React
- [react-admin](https://github.com/marmelab/react-admin) - A frontend Framework for building B2B applications
- [refine](https://github.com/refinedev/refine) - Build your React-based CRUD applications, without constraints
- [aleph](https://github.com/alephjs/aleph.js) - The Full-stack Framework in Deno

#### React Component Libraries

- [material-ui](https://github.com/mui/material-ui) - Material UI, which implements Google's Material Design
- [ant-design](https://github.com/ant-design/ant-design) - An enterprise-class UI design language and React UI library
- [chakra-ui](https://github.com/chakra-ui/chakra-ui/) - Simple, Modular & Accessible UI Components for your React Applications
- [fluentui](https://github.com/microsoft/fluentui) - Microsoft's Fluent UI
- [blueprint](https://github.com/palantir/blueprint) - A React-based Palantir's UI toolkit for the web
- [mantine](https://github.com/mantinedev/mantine) – A fully featured React components library
- [framework7](https://github.com/framework7io/framework7) - Full featured HTML framework for building iOS & Android apps
- [react-bootstrap](https://github.com/react-bootstrap/react-bootstrap) - Bootstrap components built with React
- [reactstrap](https://github.com/reactstrap/reactstrap) - Simple React Bootstrap components
- [semantic-ui-react](https://github.com/Semantic-Org/Semantic-UI-React) - The official Semantic-UI-React integration
- [evergreen](https://github.com/segmentio/evergreen) - Evergreen React UI Framework by Segment
- [grommet](https://github.com/grommet/grommet) - A react-based framework that provides accessibility, modularity, responsiveness, and theming
- [ariakit](https://github.com/ariakit/ariakit) - Toolkit for building accessible web apps with React
- [rsuite](https://github.com/rsuite/rsuite) - A suite of React components
- [baseweb](https://github.com/uber/baseweb) - A React Component library implementing the Uber's Base design language
- [eui](https://github.com/elastic/eui) - Elastic UI Framework
- [react-spectrum](https://github.com/adobe/react-spectrum) - Adobe's collection of libraries and tools
- [ring-ui](https://github.com/JetBrains/ring-ui) - A collection of JetBrains Web UI components
- [radix-primitives](https://github.com/radix-ui/primitives) - An open-source UI component library for building high-quality web apps
- [nextui](https://github.com/nextui-org/nextui) - Beautiful, fast and modern React UI library

#### React State Management and Data Fetching

- [redux](https://github.com/reduxjs/redux) - Predictable State Container for JavaScript Apps
- [mobx](https://github.com/mobxjs/mobx) - Simple, scalable state management
- [zustand](https://github.com/pmndrs/zustand) - Bear necessities for state management in React
- [tanstack-query](https://github.com/TanStack/query) - Powerful asynchronous state management
- [swr](https://github.com/vercel/swr) - React Hooks for Data Fetching
- [apollo-client](https://github.com/apollographql/apollo-client) - A fully-featured, production ready caching GraphQL client
- [relay](https://github.com/facebook/relay) - A framework for building data-driven React applications
- [recoil](https://github.com/facebookexperimental/Recoil) - Experimental state management library for React apps
- [jotai](https://github.com/pmndrs/jotai) - Primitive and flexible state management for React
- [xstate](https://github.com/statelyai/xstate) - State machines and statecharts for the modern web
- [effector](https://github.com/zerobias/effector) - Business logic with ease
- [immer](https://github.com/immerjs/immer) - Create the next immutable state by mutating the current one
- [immutable-js](https://github.com/immutable-js/immutable-js) - Immutable persistent data collections for Javascript
- [rxdb](https://github.com/pubkey/rxdb) - A fast, offline-first, reactive database for JavaScript Applications
- [watermelondb](https://github.com/Nozbe/WatermelonDB) - Reactive & asynchronous database for powerful React and React Native apps
- [valtio](https://github.com/pmndrs/valtio) - Valtio makes proxy-state simple for React and Vanilla

#### React Styling

- [styled-components](https://github.com/styled-components/styled-components) - Visual primitives for the component age
- [emotion](https://github.com/emotion-js/emotion) - CSS-in-JS library designed for high performance style composition
- [linaria](https://github.com/callstack/linaria) - Zero-Runtime CSS in JS library
- [vanilla-extract](https://github.com/seek-oss/vanilla-extract) - Zero-runtime Stylesheets-in-TypeScript
- [jss](https://github.com/cssinjs/jss) - authoring tool for CSS which uses JavaScript as a host language

#### React Routing

- [react-router](https://github.com/remix-run/react-router) - Declarative routing for React
- [wouter](https://github.com/molefrog/wouter) - A minimalist-friendly routing
- [tanstack-router](https://github.com/TanStack/router) - Type-safe router with built-in caching & URL state management

#### React Libraries

- [preact](https://github.com/preactjs/preact) - Fast React alternative with the same modern API
- [floating-ui](https://github.com/floating-ui/floating-ui) - Toolkit to create floating elements
- [loadable-components](https://github.com/gregberge/loadable-components) - The recommended Code Splitting library for React
- [reapop](https://github.com/LouisBarranqueiro/reapop) - A simple and customizable React notifications system
- [react-uploady](https://github.com/rpldy/react-uploady) - Modern file-upload components & hooks for React
- [downshift](https://github.com/downshift-js/downshift) - React autocomplete, combobox or select dropdown components

#### React Testing

- [jest](https://github.com/facebook/jest) - Delightful JavaScript Testing
- [enzyme](https://github.com/enzymejs/enzyme) - JavaScript Testing utilities for React
- [react-testing-library](https://github.com/testing-library/react-testing-library) - Simple and complete React DOM testing utilities
- [react-hooks-testing-library](https://github.com/testing-library/react-hooks-testing-library) - Simple and complete React hooks testing utilities
- [cypress](https://github.com/cypress-io/cypress) - Fast, easy and reliable testing for anything that runs in a browser

#### React Awesome Components

- [Awesome React Components](https://github.com/brillout/awesome-react-components)
- [react-select](https://github.com/JedWatson/react-select) - The Select Component for React
- [react-dnd](https://github.com/react-dnd/react-dnd) - Drag and Drop for React
- [react-rnd](https://github.com/bokuweb/react-rnd) - A resizable and draggable component for React
- [react-dropzone](https://github.com/react-dropzone/react-dropzone) - Simple drag-drop zone with React
- [react-big-calendar](https://github.com/jquense/react-big-calendar) - Calendar component
- [react-datepicker](https://github.com/Hacker0x01/react-datepicker/) - A simple and reusable datepicker component for React
- [react-loading-skeleton](https://github.com/dvtng/react-loading-skeleton) - Create skeleton screens that automatically adapt to your app
- [react-qrcode](https://github.com/zpao/qrcode.react) - QR component for use with React
- [react-archer](https://github.com/pierpo/react-archer) - Draw arrows between React elements
- [react-device-detect](https://github.com/duskload/react-device-detect) - Detect device, and render view accordingly
- [react-colorful](https://github.com/omgovich/react-colorful) - A tiny color picker component
- [react-icons](https://github.com/react-icons/react-icons) - SVG React icons of popular icon packs
- [react-complex-tree](https://github.com/lukasbach/react-complex-tree) - Unopinionated Accessible Tree
- [react-insta-stories](https://github.com/mohitk05/react-insta-stories) - A React component for Instagram like stories
- [swiper](https://github.com/nolimits4web/swiper) - Most modern mobile touch slider
- [keen-slider](https://github.com/rcbyr/keen-slider) - The Touch slider carousel
- [cookie-consent-banner](https://github.com/porscheofficial/cookie-consent-banner) – The lightweight and flexible Cookie Consent Banner
- [heart-switch](https://github.com/anatoliygatt/heart-switch) - A heart-shaped toggle switch component for React
- [kbar](https://github.com/timc1/kbar) - Fast, portable, and extensible cmd+k interface for your site
- [tagify](https://github.com/yairEO/tagify) - Lightweight, efficient Tags input component

#### React Components Sandboxes

- [storybook](https://github.com/storybookjs/storybook) - Storybook is a frontend workshop for building UI components and pages in isolation
- [react-styleguidist](https://github.com/styleguidist/react-styleguidist) - Isolated React component development environment with a living style guide
- [react-cosmos](https://github.com/react-cosmos/react-cosmos) - Dev tool for creating reusable React components

#### React Forms

- [react-hook-form](https://github.com/react-hook-form/react-hook-form) - React Hooks for form state management and validation
- [formik](https://github.com/jaredpalmer/formik) - Build forms in React, without the tears
- [react-jsonschema-form](https://github.com/mozilla-services/react-jsonschema-form) - A React component for building Web forms from JSON Schema
- [react-final-form](https://github.com/final-form/react-final-form) - High performance subscription-based form state management for React
- [formily](https://github.com/alibaba/formily) - Alibaba Group Unified Form Solution
- [vest](https://github.com/ealush/vest) - Declarative validations framework

#### React Tables and Grids

- [react-grid-layout](https://github.com/react-grid-layout/react-grid-layout) - A draggable and resizable grid layout with responsive breakpoints
- [tanstack-table](https://github.com/TanStack/table) - Headless UI for building powerful tables & datagrids
- [react-data-grid](https://github.com/adazzle/react-data-grid) - Feature-rich and customizable data grid React component

#### React Maps

- [react-map-gl](https://github.com/visgl/react-map-gl) - React friendly API wrapper around MapboxGL JS
- [react-leaflet](https://github.com/PaulLeCam/react-leaflet) - React components for Leaflet maps

#### React Charts

- [recharts](https://github.com/recharts/recharts) - Redefined chart library built with React and D3
- [visx](https://github.com/airbnb/visx) - Visualization components
- [victory](https://github.com/FormidableLabs/victory) - A collection of composable React components for building interactive data visualizations
- [react-vis](https://github.com/uber/react-vis) - Data Visualization Components
- [nivo](https://github.com/plouc/nivo) - Provides a rich set of data visualization components built on top of the D3 and React libraries

#### React Renderers

- [react-three-fiber](https://github.com/pmndrs/react-three-fiber) - A React renderer for Three.js
- [ink](https://github.com/vadimdemedes/ink) - React for interactive command-line apps
- [remotion](https://github.com/remotion-dev/remotion) - Make videos programmatically with React
- [react-pdf](https://github.com/diegomura/react-pdf) - Create PDF files using React
- [react-figma](https://github.com/react-figma/react-figma) - A React renderer for Figma

#### React Internationalization

- [formatjs](https://github.com/formatjs/formatjs) - Internationalize your web apps
- [react-i18next](https://github.com/i18next/react-i18next) - Internationalization for React done right
- [typesafe-i18n](https://github.com/ivanhofer/typesafe-i18n) - A fully type-safe and lightweight internationalization library

#### React Graphics and Animations

- [react-spring](https://github.com/pmndrs/react-spring) - A spring physics based React animation library
- [framer-motion](https://github.com/framer/motion) - Open source, production-ready animation and gesture library for React
- [react-transition-group](https://github.com/reactjs/react-transition-group) - An easy way to perform animations for React
- [auto-animate](https://github.com/formkit/auto-animate) - A zero-config, drop-in animation utility that adds smooth transitions
- [react-tsparticles](https://github.com/matteobruni/tsparticles) - Easily create highly customizable particles effects
- [react-parallax-tilt](https://github.com/mkosir/react-parallax-tilt) - Easily apply tilt hover effect on React components
- [gooey-react](https://github.com/luukdv/gooey-react) - The gooey effect for React

#### React Integration

- [rescript-compiler](https://github.com/rescript-lang/rescript-compiler) - A robustly typed language that compiles to efficient and human-readable JavaScript
- [react-rails](https://github.com/reactjs/react-rails) - Integrate React with Rails
- [reagent](https://github.com/reagent-project/reagent) - A minimalistic ClojureScript interface to React
- [fulcro](https://github.com/fulcrologic/fulcro) - A library for development of web applications in clj/cljs
- [tailwind-react](https://tailwind-elements.com/docs/standard/integrations/react-integration/) - Article that shows you how to integrate React application with Tailwind

#### React Real Apps

- [mattermost-server](https://github.com/mattermost/mattermost-server) - An open source platform for secure collaboration
- [kibana](https://github.com/elastic/kibana) - Your window into the Elastic Stack
- [webamp](https://github.com/captbaritone/webamp) - Winamp 2 reimplemented for the browser
- [overreacted](https://github.com/gaearon/overreacted.io) - Personal blog by Dan Abramov

### React Native

#### React Native General Resources

- [React Native Official Website](https://reactnative.dev/)
- [React Native GitHub](https://github.com/facebook/react-native)
- [React Native Community](https://reactnative.dev/community/overview)
- [Expo](https://expo.dev/)
- [Expo Snack Playground](https://snack.expo.dev/)

#### React Native Navigation

- [react-navigation](https://github.com/react-navigation/react-navigation) - Routing and navigation for your React Native apps
- [expo-router](https://github.com/expo/router) - The File-based router for universal React Native apps

#### React Native Awesome Components

- [react-native-vector-icons](https://github.com/oblador/react-native-vector-icons) - Customizable Icons for React Native
- [react-native-gifted-chat](https://github.com/FaridSafi/react-native-gifted-chat) - The most complete chat UI for React Native

#### React Native Libraries

- [realm-js](https://github.com/realm/realm-js) - A mobile database: an alternative to SQLite & key-value stores
- [react-native-device-info](https://github.com/react-native-device-info/react-native-device-info) - Device Information for React Native iOS and Android
## Popular Alternatives

Create React App is a great fit for:

- **Learning React** in a comfortable and feature-rich development environment.
- **Starting new single-page React applications.**
- **Creating examples** with React for your libraries and components.

Here are a few common cases where you might want to try something else:

- If you want to **try React** without hundreds of transitive build tool dependencies, consider [using a single HTML file or an online sandbox instead](https://reactjs.org/docs/getting-started.html#try-react).

- If you need to **integrate React code with a server-side template framework** like Rails, Django or Symfony, or if you’re **not building a single-page app**, consider using [nwb](https://github.com/insin/nwb), or [Neutrino](https://neutrino.js.org/) which are more flexible. For Rails specifically, you can use [Rails Webpacker](https://github.com/rails/webpacker). For Symfony, try [Symfony's webpack Encore](https://symfony.com/doc/current/frontend/encore/reactjs.html).

- If you need to **publish a React component**, [nwb](https://github.com/insin/nwb) can [also do this](https://github.com/insin/nwb#react-components-and-libraries), as well as [Neutrino's react-components preset](https://neutrino.js.org/packages/react-components/).

- If you want to do **server rendering** with React and Node.js, check out [Next.js](https://nextjs.org/) or [Razzle](https://github.com/jaredpalmer/razzle). Create React App is agnostic of the backend, and only produces static HTML/JS/CSS bundles.

- If your website is **mostly static** (for example, a portfolio or a blog), consider using [Gatsby](https://www.gatsbyjs.org/) or [Next.js](https://nextjs.org/). Unlike Create React App, Gatsby pre-renders the website into HTML at build time. Next.js supports both server rendering and pre-rendering.

- Finally, if you need **more customization**, check out [Neutrino](https://neutrino.js.org/) and its [React preset](https://neutrino.js.org/packages/react/).

All of the above tools can work with little to no configuration.

If you prefer configuring the build yourself, [follow this guide](https://reactjs.org/docs/add-react-to-a-website.html).

## React Native

Looking for something similar, but for React Native?<br>
Check out [Expo CLI](https://github.com/expo/expo-cli).

## License

Create React App is open source software [licensed as MIT](https://github.com/facebook/create-react-app/blob/main/LICENSE).
## **Awesome React** [![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome)


