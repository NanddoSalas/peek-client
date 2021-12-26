# Peek Notes

Web Application that allows you create, read, update and delete simple notes (just Title and note Body).

[Try Demo](https://peek-notes.netlify.app)

## Preview

<img  src="./screeanshots/1.gif" width="300"/>

## Features

- Signup with Google
- Create notes
- Read notes
- Update notes
- Delete notes
- Subscribe for updates on notes

## Setup Project

The Project consists of two repositories, [peek-client](https://github.com/NanddoSalas/peek-client) and [peek-server](https://github.com/NanddoSalas/peek-server).

### Prerequisites

1. MongoDB database, you can get a free one [here](https://www.mongodb.com)

2. Create a Google Client ID, you can do it [here](https://console.developers.google.com/apis/credentials)

### Setup Server

1. Get the code into your local machine and install all dependencies

   ```
   git clone https://github.com/NanddoSalas/peek-server.git
   cd peek-server
   npm install
   ```

2. Create a `.env` file at the root of the repo and fill the next variables

   ```
   MONGO_URI=mongodb+srv://[user]:[password]@[host]/[dbname]

   GOOGLE_CLIENT_ID=

   FRONTEND_URL=http://localhost:3000
   ```

3. Start the server by running `npm start`

### Setup Client

1. Get the code into your local machine and install all dependencies

   ```
   git clone https://github.com/NanddoSalas/peek-client.git
   cd peek-client
   npm install
   ```

2. Create a `.env` file at the root of the repo and fill the next variables

   ```
   REACT_APP_GOOGLE_CLIENT_ID=

   REACT_APP_SUBSCRIPTIONS_URL=ws://localhost:4000/subscriptions
   REACT_APP_API_URL=http://localhost:4000
   ```

3. Start the client by running `npm start`

## License

[MIT](https://choosealicense.com/licenses/mit/)
