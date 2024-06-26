# Desktop GUI App

This is a cross platform desktop application built on electron

### Version
1.0.0

## To run

* Open you favotire `cmd` or `terminal` and nevigate to your chosen app folder, Run the folwing command to install the dependencies

    ```sh
    npm install
    ```

* To run the application using electron

    ```sh
    npm start
    ```

## To Package & Build
Follow the steps,

* Install electron
    ```
    npm install electron --save-dev
    ```

    
* Install electron builder
    ```
    npm install electron-builder --save-dev
    ```

    
* Install electron packager
    ```
    npm install electron-packager --save-dev
    ```


* After running all of the above the `package.json` should have something like following, 

    ```
    "devDependencies": {
        "electron": "^31.1.0",
        "electron-builder": "^24.3.0",
        "electron-packager": "^17.1.2"
    }
    ```

Then one can run any of the follwing to build the executable file for any Os

For Windows

```sh
npm run package-win
```

For Mac

```sh
npm run package-mac
```

For Linux

```sh
npm run package-linux
```