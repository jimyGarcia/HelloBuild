# Getting Started with Hello Build Test App by Jimy Garcia

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## .env.local configuration

Create a local .env with the following data:

```
REACT_APP_AUTH_URL="https://github.com/login/oauth/authorize"
REACT_APP_CLIENT_ID="YOUR_GITHUB_CLIENT_ID"
REACT_APP_CLIENT_SECRET="YOUR_GITHUB_CLIENT_SECRET"
REACT_APP_REDIRECT_URI="http://localhost:3000/code"
REACT_APP_APP_SERVER_URL="https://github.com/login/oauth/access_token"
REACT_APP_OAUTH_SERVER_URL="https://api.github.com"
REACT_APP_SCOPE="repo, user"
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.
