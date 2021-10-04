# About this app

News app is built on React using functional components and react hooks. The app fetches the news from newapi.org and shows the top headlines for uk region. The app also has the functionality to filter the headlines with the given search keyword.

## Technical overview

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and no other third party library was used. For state management, state lifting mechanism and SOC principle was used. All the state is maintained in App.js.

Application architecture and landscape description can be found [here](https://github.com/sshankar02/news-app/docs/Architecture&Landscape.png).

<img src="./news-app.png">

For the app to work, below pre-requisites needs to be in place -

1. Node runtime.
2. CRA for react.
3. [Backend server](https://github.com/sshankar02/NewsApp-server) running

# Starting the app

Navigate to project directory in terminal/command prompt and use the below command to run the application in dev mode.

There is a pre-requisite for this application to work according to specification. The backend server needs to be started first. Steps to start the server can be found [here](https://github.com/sshankar02/NewsApp-server).

## start script

### `npm start`

npm start runs the app in the development mode. The app is required to be run on port 3011 as this is the port allowed in the [backend server](https://github.com/sshankar02/NewsApp-server) as allowed access control origin.

Open [http://localhost:3011](http://localhost:3011) to view it in the browser.

### `npm test`

Launches the test runner in the interactive watch mode.
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
"# news-app"
