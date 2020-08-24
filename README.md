# CASCADE Demo Tool

## About
The CASCADE tool is a ReactJS based webapp that interacts with the CASCADE peruse Flask app, and also NiFi. The purpose of the tool is to show some minimally viable examples of what types of technological solutions can be offered for a given customers sore spots.

The app follows typical best practices for the ReactJS framework utilizing various libraries to achomplish the tasks required to communicate with the back-end and display data. The application can be started locally in development mode, or deployed as a docker container for added stability and performance.

## Starting the app in development mode
### Background
Because of CORS issues, requests to the back-end must be proxied. A proxy exists in development in the form recognized by Reactjs. The file setupProxy.js is specifically looked for by react when loading the application on startup. This allows proxying to seamlessly work in development just like it does being proxied by nginx in the docker container.

1. Clone the git repository
2. Navigate to the destination of the git repository
3. In the terminal execute `npm install`
4. In the terminal execute `npm start`


## Deploying as a docker container

1. execute `docker-compose build cascade-gui`
2. execute `docker-compose up -d`

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

In the project directory, first run:
## Upgrading npm
This isn't something you have to do every time. This ensures you have up to date npm and node.
### `npm install -g npm@latest`

## Upgrade node with npm:
### `sudo npm cache clean -f`
### `sudo npm install -g n`
### `sudo n stable`

## Install application dependencies

### `npm install`

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify



### Neo4j Initialization

visit `http://<cascade_gui>/seed` to load reports and requirements into Neo4j
