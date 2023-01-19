# Project-Planning


## Backend 
- Node.js
- Express


## Frontend 
- Typescript via npm
TypeScript is available as a package on the npm registry available as "typescript".
You will need a copy of Node.js as an environment to run the package. Then you use a dependency manager like npm, yarn or pnpm to download TypeScript into your project.
```
npm install typescript --save-dev
```
All of these dependency managers support lockfiles, ensuring that everyone on your team is using the same version of the language. You can then run the TypeScript compiler using one of the following commands:
```
npx tsc
```
By default the TypeScript compiler will print a help message when run in an empty project. The compiler can be configured using a tsconfig.json file. You can have TypeScript create tsconfig.json with the recommended settings with:
```
npx tsc --init
```

The basic tutorial for TypeScript: [W3Schools](https://www.w3schools.com/typescript/index.php).

Adding TypeScript to an Existing Project: [in React Native](https://reactnative.dev/docs/typescript).

The offical handbook of [TypeScript ](https://www.typescriptlang.org/).

- React Native 

Requirements
React Native apps may target iOS 12.4 and Android 5.0 (API 21) or newer. You may use Windows, macOS, or Linux as your development operating system, though building and running iOS apps is limited to macOS. Tools like Expo can be used to work around this.

Building your first React Native app
Follow the Getting Started guide: https://reactnative.dev/docs/getting-started

Why React Native is great:
1. Ability to write JS and React to build apps for iOS, Android and the web from a single codebase
2. Great for building native apps
3. Straightforward installation process
4. Already acquired React skills can be used to build a native app without having to utilise Java or C
5. Greater producitivity: While the reliability of JavaScript already makes the process easier, it also comes with a live reload feature and the freedom to use any IDE or text editor of their choice
6. Strong community backing: active open-source community and easy-to-install packages on GitHub

Considerations:
1. Dependency on native app developers: a concern if app contains heavy computational operations
2. Limitations in abstraction: abstraction layer needed to add more functionality. Abstraction comes with some persistent issues:
    a. identifying bugs is difficult
    b. high dependency on third-party services and libraries
    c. dependency on implementing custom designs
3. Zero support for multiprocessing or parallel threading: slow performance
4. iOS deployment can be particularly difficult
5. There’s no CSS. Instead, every core component takes a style prop that can be customised with a style sheet constructed for JS

- Expo 

Expo is an open-source platform for making universal native apps for Android, iOS, and the web with JavaScript and React.

The basic tutorial for [Expo](https://docs.expo.dev/tutorial/introduction/).

Step 1: Initialize a new Expo app

```
npx create-expo-app THE-PROJECT-NAME
cd THE-PROJECT-NAME
```

Step 2: Install dependencies

```
npx expo install react-dom react-native-web @expo/webpack-config
```

Step 3: Run the app on mobile and web
```
npx expo start
```
Once the development server is running, the easiest way to launch the app is on a physical device with Expo Go. 

## Database
- Oracle SQL -> requires many packages to use and run on MAC OS
- Mongo DB

- Cheatsheet for [MongoDB](https://gist.github.com/bradtraversy/f407d642bdc3b31681bc7e56d95485b6).
- Tutorial: https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-os-x/
- Connecting mongo to node.js: https://www.mongodb.com/docs/drivers/node/current/quick-start/

## Real time messaging
- https://github.com/FaridSafi/react-native-gifted-chat 

## Geolocation
- Obtain location data (longitude and latitude) using postcodes
- https://api.postcodes.io
- Added spiking file into repo

### Spiking geolocation
- Can calculate the distance in km between 2 postcodes
- Can get location data from GET request to API
- Can get current longitude and latitude using location data
    - BLOCKER: finding out if this can be integrated in back end or front end

## Trello board
https://trello.com/b/9SQvqDme/farmersmarketplace

## Excalidraw
https://excalidraw.com/#room=bc15300a5f30ba865e60,ngeUIKDqDrZ-Ysa5ZsUBsA


