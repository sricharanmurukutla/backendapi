# React Budget Management App

This project is a budget management application bootstrapped with [Create React App](https://github.com/facebook/create-react-app). It incorporates user authentication, budget configuration, data logging, and a responsive design. The backend is powered by Express.js and MySQL, and the deployment is handled through Netlify and Clever Cloud.

## Table of Contents

1. [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
    - [Configuration](#configuration)
    - [Usage](#usage)
2. [Available Scripts](#available-scripts)
3. [Features](#features)
4. [Technologies Used](#technologies-used)
5. [API Endpoints](#api-endpoints)
6. [Contributing](#contributing)
7. [License](#license)
8. [Deployment](#deployment)

## Getting Started

### Prerequisites

Before starting, make sure you have the following installed:

- Node.js and npm
- MySQL

### Installation

Follow these steps to install the project:

1. Clone the repository.
2. Run `npm install` to install dependencies.

### Configuration

Ensure your MySQL is installed and configured appropriately.

### Usage

- Run the app in development mode with `npm start`.
- View the app at [https://main--calm-liger-a794ac.netlify.app/login](https://main--calm-liger-a794ac.netlify.app/login).

## Available Scripts

In the project directory, you can run the following scripts:

- `npm start`: Runs the app in development mode.
- `npm test`: Launches the test runner in interactive watch mode.
- `npm run build`: Builds the app for production to the `build` folder.
- `npm run eject`: Ejects from Create React App (one-way operation).

## Features

- **User Authentication:** Secure login and registration functionalities.
- **Budget Configuration:** Easily configure and manage your budget.
- **Data Logging:** Log and retrieve budget-related data efficiently.
- **Responsive Design:** User-friendly and responsive design built with React.
- **Backend Integration:** Integration with Express.js and MySQL.
- **Deployment:** Frontend deployed on Netlify, backend, and database hosted on Clever Cloud.

## Technologies Used

### Frontend

- React
- JavaScript (JS)
- CSS

### Backend

- Express.js
- Node.js

### Database

- MySQL

### Other Technologies

- CORS
- Body-parser
- JWT (JSON Web Tokens)
- Compression

## API Endpoints

Explore the available API endpoints in the [API Endpoints documentation](#).

- `/api/login`: User login endpoint.
- `/api/register`: User registration endpoint.
- `/api/api/get-all-categories`: Fetches all categories.
- `/api/configure-budget`: Configures the budget.
- `/api/get-table-data`: Retrieves table data.
- `/api/enter-used-budget`: Logs the used budget.

## Contributing

Contributions are welcome! Please check out the [Contribution Guidelines](CONTRIBUTING.md) before getting started.

## License

This project is licensed under the MIT License. You are free to use, modify, and distribute the code. Refer to the [LICENSE](LICENSE) file for more details.

Start building powerful budget management applications with this backend API! If you have any questions or encounter issues, feel free to open an issue.
