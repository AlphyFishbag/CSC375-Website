# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

## Installing

1. Make sure you have node and npm installed on your computer.  
   You can test this by opening a terminal and typing `node -v`.  
   If it throws an error at you, you do not have it installed.

   You also need npm (node package manager). It should come installed with node.  
   Test this by typing `npm --version`

   If you need to download either of these, go to the [official node site](https://nodejs.org/en/download). Download the binary for your OS and follow the installer

   Also, make sure you have git on your machine. Test this by running `git help`  
   To download git, go to [this link](https://git-scm.com/download/win)

2. Clone the repo  
   Ask Dexter for push permissions on the repository, then visit it in a browser. Click the green 'Code' button in the top right.  
   If you have SSH set up, use it, otherwise use HTTPS. Copy the string it shows you in that mini window.  
   Then, in a terminal, navigate to a directory you want the project to be stored, ie. School/CSC375.  
   Run the command `git clone <THE STRING YOU COPIED FROM GITHUB>`. If you now run `ls` you should see a newly created directory called `CSC375-Website`. This is the repo

3. Install dependencies  
   Our project will have a bunch of dependencies, which are external packages we use. For example, we use the React package as a UI library, and we use Vite as a build tool  
   These dependencies are never committed to git, since they can get pretty huge. So instead Node has a thing called a `package.json` file, which outlines what dependencies are used in our project  
   Every time you add a new one, it is automatically added to that file.  
   To install all dependencies for our project, make sure you are in the CSC375-Website directory and run `npm install` or `npm i` for short

4. Run the app  
   To run the app, simply open up a terminal to the CSC375-Website directory, and run `npm run dev`.  
   It should tell you its running on `localhost:5173`. Just open that up in the browser and you shoud see the app

5. Working on the app  
   I'll post some nice beginner React tutorials and videos below. I'm also happy to do a run down of React and how it works, and am also available for questions you might have.
