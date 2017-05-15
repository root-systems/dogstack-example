# dogstack-example

an example app using the [dogstack framework](https://dogstack.js.org). :dog: :dog: :dog:

TODO see it live at [dogstack.herokuapp.com](https://dogstack.herokuapp.com/)

## how to use

if you want to use this as a starting ground for your new app, simply fork this repository!

if you want to develop this example further,

```
git clone git@github.com:dogstack/dogstack-example
cd dogstack-example
yarn install
yarn dev
```

### use forked version of `fela`

at the moment this example relies on [fela#260](https://github.com/rofrischmann/fela/pull/260)

```shell
cd ../
git clone git@github:ahdinosaur/fela
cd fela
git checkout build
cd packages/fela
npm link
cd ../..
cd packages/react-fela
npm link

cd ../dogstack-example
npm link fela
npm link react-fela
```

## user stories

TODO

-> make topic called agent
-> agent is an id that links to other foreign objects
-> agent might have a type person group or bot
agent has many accounts
account is a way of logging in
agent has one profile
agent has and belongs to many relationships

