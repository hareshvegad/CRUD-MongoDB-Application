# CRUD MongoDB Application

This is a simple CRUD (Create, Read, Update, Delete) application built using Node.js, Express, MongoDB, and EJS templating engine. The application allows users to create, view, update, and delete user data, including their name, email, and image URL.

## Features

- **Create User**: Add new users with a name, email, and image URL.
- **Read Users**: View a list of all users with their details.
- **Update User**: Edit existing user details.
- **Delete User**: Remove users from the list.

## Prerequisites

Ensure you have the following installed on your local machine:

- [Node.js](https://nodejs.org/) (v12.x or later)
- [MongoDB](https://www.mongodb.com/) (v4.x or later)

## Installation

1. **Clone the repository**:

    ```bash
    git clone https://github.com/hareshvegad/CRUD-MongoDB-Application.git
    cd CRUD-MongoDB-Application
    ```

2. **Install dependencies**:

    ```bash
    npm install
    ```

3. **Set up MongoDB**:

    - Make sure MongoDB is running on your machine.
    - By default, the application connects to a MongoDB instance at `mongodb://127.0.0.1:27017/CRUD`. You can modify this in `models/user.js` if needed.

## Running the Application

1. Start the Node.js server:

    ```bash
    node app.js
    ```

2. Open your web browser and navigate to:

    ```
    http://localhost:3000
    ```

3. You should see the homepage where you can create new users, view existing users, update them, or delete them.

## File Structure

- `app.js`: Main application file, defines routes and handles CRUD operations.
- `models/user.js`: Mongoose schema and model for the user data.
- `views/`: Contains the EJS templates (`index.ejs`, `read.ejs`, `edit.ejs`) for rendering the HTML.
- `package.json`: Contains the project dependencies and scripts.
- `public/`: Static files such as CSS and JavaScript.

```
    ├── app.js
    ├── models
    │   └── user.js
    ├── views
    │   ├── edit.ejs
    │   ├── index.ejs
    │   └── read.ejs
    ├── public
    │   └── stylesheets
    │       └── style.css
    ├── package.json
    └── README.md
```

## Usage

- **Create User**: Fill out the form on the homepage (`/`) to create a new user.
- **Read Users**: Click on the "Read Users" link to view all users.
- **Update User**: Click on "Edit User" next to any user to edit their details.
- **Delete User**: Click on "Delete User" next to any user to remove them.

## Dependencies

- [Express](https://expressjs.com/) - Web framework for Node.js
- [EJS](https://ejs.co/) - Templating engine for generating HTML markup
- [Mongoose](https://mongoosejs.com/) - MongoDB object modeling tool

## License

This project is licensed under the ISC License.

## Acknowledgments

- Thanks to the developers of Node.js, Express, MongoDB, and EJS for their amazing tools.
