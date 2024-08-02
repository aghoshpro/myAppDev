# Desktop GUI App

## 0. Design

- Design the app as webpage using `index.html`, `style.css` and `script.js`

## 1. Creation

- Create blank folder and navigate to it. It will be the container of the new app. Run the following,

  ```sh
  npm init
  ```

- This will create `package.json` file

- This utility will walk you through creating a package.json file.

- Replace `test:` with `"start": "electron ."`

  ```
  {
  	"name": "caltopoapp",
  	"version": "1.0.0",
  	"description": "To calculate toposheet no and visualize it on interactive map based on input latitude and longitude ",
  	"main": "main.js",
  	"scripts": {
  		"start": "electron ."
  	},
  	"author": "Arka Ghosh",
  	"license": "MIT"
  }

  ```

### 1.1. Create `main.js`

- Create main.js in vsCode or any IDE. It will be the starting point which will start the electron.

  ```
  const { app, BrowserWindow } = require("electron");

  function createWindow() {
  const win = new BrowserWindow({
  width: 1000,
  height: 770,
  webPreferences: {
  nodeIntegration: true,
  contextIsolation: false,
  },
  });

      win.loadFile("index.html");

  }

  app.whenReady().then(createWindow);

  app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
  app.quit();
  }
  });

  app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
  createWindow();
  }
  });

  ```

### 1.2. Paste `index.html`, `style.css` and `script.js`

- The app should be built using the above and the `index.html` will be linked to `main.js`.

- Install electron

  ```
  npm install electron --save-dev
  ```

- To run the application using electron

  ```sh
  npm start
  ```

  Now your app should be running.

  <!-- - After successful start
    ### Simple Calculator (as an example)
      <center> <img src="viz/simpleCal.gif" height = 400 width = 800></center> -->

## 2. To Package & Build .exe

- Resource: https://www.christianengvall.se/electron-packager-tutorial/

### 2.1. Add dependencies

Follow the steps to add to `package.json`

- Install electron
  ```
  npm install electron --save-dev
  ```
- Install electron builder
  ```
  npm install electron-builder --save-dev
  ```
- Install electron packager

  ```
  npm install electron-packager --save-dev
  ```

- After running all of the above the `package.json` should have something like following,

  ```
  "devDependencies": {
      "electron": "^31.1.0",
      "electron-builder": "^24.3.0",
      "electron-packager": "^17.1.2"
  }
  ```

### 2.2. Include Os dependency

- Add under `scripts` just after `start": "electron .",`

  - Windows

    ```sh
    "package-win": "electron-packager . calculator-app --platform=win32 --arch=x64 --out=dist --overwrite"
    ```

  - MacOS

    ```sh
    "package-mac": "electron-packager . --overwrite --platform=darwin --arch=x64 --icon=assets/icons/mac/icon.icns --prune=true --out=release-builds"
    ```

  - Linux

    ```sh
    "package-linux": "electron-packager . electron-tutorial-app --overwrite --asar=true --platform=linux --arch=x64 --icon=assets/icons/png/1024x1024.png --prune=true --out=release-builds"
    ```

### 2.3 Packaging

#### Final `package.json` should look like following for Windows

```sh
{
	"name": "caltopoapp",
	"version": "1.0.0",
	"description": "To calculate toposheet no and visualize it on interactive map based on input latitude and longitude ",
	"main": "main.js",
	"scripts": {
		"start": "electron .",
		"package-win": "electron-packager . calculator-app --platform=win32 --arch=x64 --out=dist --overwrite"
	},
	"author": "Arka Ghosh",
	"license": "MIT",
	"devDependencies": {
		"electron": "^31.3.1",
		"electron-builder": "^24.13.3",
		"electron-packager": "^17.1.2"
	}
}

```

Run the suitable command to build the executable file for any Os. Click and Run.

- For Windows

  ```sh
  npm run package-win
  ```

- For Mac

  ```sh
  npm run package-mac
  ```

- For Linux

  ```sh
  npm run package-linux
  ```

# 100 Apps Challenge

## #01 - Simple Calculator

<img src="./viz/sompleCalculator.PNG" width="200">

## #02 - calTopo

<img src="./viz/calTopo@.png">
