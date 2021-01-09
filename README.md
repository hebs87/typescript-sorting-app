# Sorting App

This is an app that contains a sorting algorithm. The algorithm will
accept various data types and sort them in ascending order.

## Creating a TS app from scratch and configuring the compiler

1. Create an `src` directory with an `index.ts` file in the root directory
2. Create a `build` directory in the root directory
3. Run `tsc --init` in the terminal to generate a `tsconfig.json` file
4. Amend the following lines in the `tsconfig.json` file
    - `"outDir": "./build",`
    - `"rootDir": "./src",`

## Compiling a TS app once initial setup is completed

1. Run `tsc` in the terminal to compile the app
   - To save running the command each time changes are made, run the
     `tsc -w` (watch) command in the terminal to automatically compile any new changes

## Running a TS app using Node
We can run the `node build/{filename.js}` command in the terminal to run the app. However,
this can be automated with the following setup:

1. Create a `package.json` file by running the `npm init -y` command in the terminal
2. Install the `nodemon` and `concurrently` modules by running the `npm install nodemon concurrently`
command in the terminal
    - `nodemon` - allows us to re-run node any time a file changes in our project
    - `concurrently` - helps us run multiple scripts at the same time
        - We want to run two scripts simultaneously - a script to compile the code, and a script to run it
3. Add the following scripts in the `scripts` section of the `package.json` file
```
    "start:build": "tsc -w",
    "start:run": "nodemon build/index.js",
    "start": "concurrently npm:start:*"
```
4. Run the `npm start` command in the terminal, which will compile and run our project
