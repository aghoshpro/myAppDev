## Pre-requisites

Postgres for the database
Node/Express for the application logic
dotenv from npm for managing environment variables
db-migrate from npm for migrations
jsonwebtoken from npm for working with JWTs
jasmine from npm for testing

## Local Environment

### `npm`

- `npx expo install react-native-web react-dom @expo/metro-runtime`

```
› Installing 3 SDK 51.0.0 compatible native modules using yarn
> yarn add react-native-web@~0.19.10 react-dom@18.2.0 @expo/metro-runtime@~3.2.3
yarn add v1.22.22
[1/4] Resolving packages...
[2/4] Fetching packages...
[3/4] Linking dependencies...
warning "react-native > @react-native/codegen@0.74.87" has unmet peer dependency "@babel/preset-env@^7.1.6".
warning "expo > babel-preset-expo > @react-native/babel-preset > @react-native/babel-plugin-codegen > @react-native/codegen > jscodeshift@0.14.0" has unmet peer dependency "@babel/preset-env@^7.1.6".
[4/4] Building fresh packages...
success Saved lockfile.
success Saved 9 new dependencies.
info Direct dependencies
├─ @expo/metro-runtime@3.2.3
├─ react-dom@18.2.0
└─ react-native-web@0.19.13
info All dependencies
├─ @expo/metro-runtime@3.2.3
├─ css-in-js-utils@3.1.0
├─ fast-loops@1.1.4
├─ hyphenate-style-name@1.1.0
├─ inline-style-prefixer@6.0.4
├─ postcss-value-parser@4.2.0
├─ react-dom@18.2.0
├─ react-native-web@0.19.13
└─ styleq@0.1.3
Done in 10.69s.
```

### `node`

- Check node version `node -v`

### `yarn`

- Install yarn `npm install yarn -g`
- Install db-migrate on the machine for terminal commands `npm install db-migrate -g`
- check node version node -v - it needs to be 10 or 12 level
  IF node was not 10 or 12 level, run
  npm install -g n
  n 10.18.0
  PATH="$PATH"
  node -v to check that the version is 10 or 12

to test that it is working, run yarn watch should show an app starting on `0.0.0.0:3000`

### `expo`

- `npm install --global expo-cli` [WORKING]

#### Start `my-new-project`

- `expo init my-new-project` **OR** `npx create-expo-app --template`

- `cd my-new-project`

- `yarn start` **OR** alternatively `yarn android` or `yarn ios` or `yarn web`

  ```
  › Using Expo Go
  ›
  › Press s │ switch to development build

  › Press a │ open Android
  › Press w │ open web

  › Press j │ open debugger
  › Press r │ reload app
  › Press m │ toggle menu
  › Press o │ open project code in your editor

  › Press ? │ show all commands
  ```

## Start working with the app

### Important Files

- App.js - [start editing and put some logic here]
- app.json - [this file bcoz od expo has unlike react-native, contains all the information]

### Create and run the db:

- switch to the postgres user `su postgres`
- start psql `psql postgres`
  in psql run the following:
- CREATE USER shopping_user WITH PASSWORD 'password123';
- CREATE DATABASE shopping;
- `\c shopping`
- GRANT ALL PRIVILEGES ON DATABASE shopping to `shopping_user`;

- Test if it's working run
  `\dt`
  and it should output "No relations found."

```

```
