# Getting Started

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

Before running this scripts be sure to run:

### `yarn install`

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
If the port is not available you will be asked if you want to run the project in an available one.

The page will reload if you make edits.\
You will also see any lint errors in the console.

Before running your app open the .env file of this repo and supply your own [GitHub](https://github.com/) personal token. 

    # Supply your own git token
    REACT_APP_GITH_TOKEN=YOUR_TOKEN_HERE

Also when creating your token be sure to select the following scopes in order for the app to work correctly, it might throw 502 errors if the incorrect scopes are selected.

    user
    public_repo
    repo
    repo_deployment
    repo:status
    read:repo_hook
    read:org
    read:public_key
    read:gpg_key

#### Scope selection screen

![scope selection screen](https://docs.github.com/assets/images/help/settings/token_scopes.gif)

Instructions on how to create a token can be found [here](https://docs.github.com/en/enterprise-server@3.1/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token).

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.