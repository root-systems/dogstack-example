# dogstack-example

an example app using the [dogstack framework](https://dogstack.js.org). :dog: :dog: :dog:

see it live at [dogstack.herokuapp.com](https://dogstack.herokuapp.com/)

deploy a new copy of the app to heroku:

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

## Table of Contents

- [Setup](#setup)
- [How our stack works](#how-our-stack-works)
- [Stack](#stack)
- [Folder Structure](#folder-structure)
- [Available Scripts](#available-scripts)
  - [npm start](#npm-start)
  - [npm run dev](#npm-run-dev)
  - [npm test](#npm-test)
  - [npm run lint](#npm-run-lint)
  - [npm run db](#npm-run-db)
- [Developer Notes](#developer-notes)
- [License](#license)

## Setup

Before we start, please

- [install `node@8` and `npm@5`](https://dogstack.js.org/guides/how-to-install-js.html)
- [install Git LFS](https://git-lfs.github.com/)

If you want to use this as a starting ground for your new app, simply fork this repository!

If you want to develop this example further,

```shell
git clone git://github.com/root-systems/dogstack-example
cd dogstack-example
npm install
npm run db migrate:latest
npm run db seed:run
npm run dev
```
## Stack

[`dogstack`](https://dogstack.js.org)! :dog: :dog: :dog:

## Folder Structure

We're following the [dogstack folder structure convention](https://dogstack.js.org/conventions/file-structure.html).

- root
  - package.json
  - server.js
  - client.js
  - actions.js (combines all actions)
  - epic.js (combines all epics)
  - updater.js (combines all updaters)
  - root.js
  - intl.js
  - style.js
  - layout.js
  - routes.js
  - store.js (combines top-level epic and updater)
  - `topic` (e.g. `dogs`)
    - dux
    - services
    - containers
    - components
    - getters
    - styles
    - util

### Available Scripts

### `npm start`

Starts production server

```shell
npm start
```

### `npm run dev`

Starts development server

```shell
npm run dev
```

### `npm test`

Runs [`ava`](https://github.com/avajs/ava) tests

Can optionally take a [glob](https://www.npmjs.com/package/glob)

```shell
npm test -- './todos/**/*.test.js'
```

Default glob is `./**/*.test.js` ignoring `node_modules`

### `npm run lint`

Checks for [standard style](http://standardjs.com)

Can optionally take a [glob](https://www.npmjs.com/package/glob)

```shell
npm run lint -- './todos/**/*.js'
```

default glob is `./**/*.js` ignoring `node_modules`

### `npm run db`

Runs [`knex`](http://knexjs.org/#Migrations-CLI) command, with any arguments.

```shell
npm run db migrate:latest
```

```shell
npm run db seed:run
```

## Developer Notes

Anything that a developer working on this app should know about.

### After deploy: migrate on heroku!

```shell
heroku run npm run db migrate:latest --app=dogstack
```

## License

ISC

Emoji artwork is provided by [EmojiOne](https://www.emojione.com) and is licensed under [CC-BY 4.0](https://creativecommons.org/licenses/by/4.0/legalcode)

Random dog pictures provided by [randomdoggiegenerator.com](https://www.randomdoggiegenerator.com/)
