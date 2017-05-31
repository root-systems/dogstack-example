# dogstack-example

an example app using the [dogstack framework](https://dogstack.js.org). :dog: :dog: :dog:

TODO see it live at [dogstack.herokuapp.com](https://dogstack.herokuapp.com/)

## how to use

if you want to use this as a starting ground for your new app, simply fork this repository!

if you want to develop this example further,

```shell
git clone git@github.com:dogstack/dogstack-example
cd dogstack-example
npm install
npm run dev
```

### after deploy

```shell
heroku run npm run db migrate:latest --app=dogstack
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

## license

Emoji artwork is provided by [EmojiOne](https://www.emojione.com) and is licensed under [CC-BY 4.0](https://creativecommons.org/licenses/by/4.0/legalcode)
