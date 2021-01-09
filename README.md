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

## Compiling an app once initial setup is completed
1. Run `tsc` in the terminal to compile the app
   - To save running the command each time changes are made, run the
     `tsc -w` (watch) command in the terminal to automatically compile any new changes
