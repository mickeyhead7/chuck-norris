# Chuck Norris joke generator

## Description

This small aplication generates random Chuck Norris jokes.

## Getting started

To setup, run:

```
npm install
```

or :

```
yarn
```

You can then start the app locally, using:

```
npm run start
```

or:

```
yarn start
```

If a browser tab does not automatically open, please browse to http://localhost:3000

## Usage

Simply click the 'Get a new Joke' button to generate a new Chuck Norris joke. It will appear in a list 
above the button. If a joke is generated that already exists, then it will be placed back at the top 
of the list.

## Tests

To test the application, run:

```
npm run test
```

or:

```
yarn test
```

## Development notes

* First I identified some rough development steps. This gave me logical increments to structure my development. E.g.
  * Create basic app framework
  * Create component templates, with dummy data
  * Create store
  * Utilise API and add Sagas
  * Add error state
  * Add tests
* I followed this structure as closely as possible when developing, committing each step. Any later commits are code tidies, corrections and unforseen additions
* I have utilised Ramda, as I am a fan of functional programming. Ramda provide methods that can make your code more understandable and testable. You will notice custom methods which do things like provide curried, composed and utility methods
* Alongside this, I have strived to build components as pure functions, and connecting to the store via higher order components. This keeps templates clean and logic easy to follow
* I have implemented Enzyme when testing. Enzyme is a really nice package that provides useful tools for snapshots, querying the DOM and methods such as `shallow`, `render` and `mount` for testing components either specifically, or testing at a deeper level if needed
* I find Sagas really nice for testing as you can iterate through the generator functions to test against both expected and unexpected results (e.g. errors)

## Thanks

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).
