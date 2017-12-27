# React + Redux Observable + Typescript + Electron (desktop app)

## Description

Architecture with React + ElectronIO + Typescript + Redux Observable. (And testing with Jest, of course)

You should have a look at https://electronforge.io/ it will surprise you.

## Install

```
npm install
```

## Usage

Dev Application with hot reload (may need to press Ctrl + R):

```
npm start
```

Build:

```
npm make
```

Test:

```
npm test
```

## State Flow

* Actions
  * Actions are everything that changes the State, you emmit actions by using the
    action creators. Look @connect decorator to see how to pass them to your components
* Reducers
  * They are any action that do not modify the State, the best exampe is a
    logger.
* Selectors
  * These are functions that receive the state and an Action, and return a new state
    modified by that action.
* Epics
  * They are functions that listen to an ActionsObservable and react to them doing
    side effects. The most powerfull way for making async actions with redux such as
    ajax requests.
    
## NodeJS

You have all NodeJS APIs even into the HTML files. (You can require NPM packages too)
