# react-native-close-app
*** **DEPRECATED and NOT MAINTAINED anymore, mostly since I don't need it anymore** ***

React Native code snippet to Exit/Close Application. It uses the built-in `BackHandler` module on android but on ios it requires a new native module.

# Installation
Add the files from the `ios` directory to your ios project.
Add the files from the `src` directory to your react-native source directory.
Run `react native run-ios`, your ios project should compile.

# Usage
```javascript
import { exitApp } from "../../services/exit";
exitApp(); //exits the app with return code 0
//exitApp(true); //on ios will exit the app with code 1
```

# Motivation
While there is an existing react-native module that does pretty much the same thing, it is under GPL licence, which means I can't use it in a closed-source app. I also wanted to add an exit code on ios and use the built-in `BackHandler` on android and not a Native Module.

# Warning
It is considered bad practice to exit the application without user interaction, and Apple might frown in the apporoval process.

# Licence
(c) Copyright Dayzz 2018. Released under the MIT License.
