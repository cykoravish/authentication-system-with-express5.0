# Authentication System with Express and Node.js

This is a robust and secure authentication system built using Node.js and Express (v5.0.1). The system enables users to register, log in, and manage authentication efficiently using JSON Web Tokens (JWT), with data encrypted using bcryptJs. Security best practices, such as the use of `helmet` for HTTP headers, have been implemented to ensure user data protection.

## Features

- **User Registration**: Allows new users to create accounts securely.
- **User Login**: Authenticates users using JWT for secure session management.
- **Password Encryption**: Uses bcrypt to securely store passwords.
- **Security Enhancements**: `helmet` is implemented to help secure HTTP headers.
- **Database**: Uses MongoDB for efficient and scalable data storage.
- **RESTful API Design**: Follows best practices for REST API design, making the system modular and easy to maintain.

## Technologies Used

- **Node.js**: JavaScript runtime environment.
- **Express (v5.0.1)**: Fast and minimalist web framework for building APIs.
- **MongoDB**: NoSQL database used for storing user data.
- **jsonwebtoken**: For handling JWT-based authentication.
- **bcrypt**: For password hashing and encryption.
- **helmet**: For securing HTTP headers.
- And other libraries and modules to ensure a smooth and secure setup.

## Getting Started

### Prerequisites

- **Node.js** (v14+)
- **MongoDB** (running locally or on a cloud platform like MongoDB Atlas)

### Installation

1. Clone this repository:
    ```bash
    git clone https://github.com/cykoravish/authentication-system-with-express5.0.git
    cd authentication-system-with-express5.0
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Set up environment variables:
    - Create a `.env` file in the root directory.
    - Add the following variables:
      ```env
      PORT=4000
      MONGO_URI=your_mongodb_connection_string
      JWT_SECRET=your_jwt_secret
      ```

4. Start the server:
    ```bash
    npm run dev
    ```

The server should now be running on `http://localhost:4000`.

## Usage

- **Register**: Send a `POST` request to `/api/register` with user details (e.g., name, email, password).
- **Login**: Send a `POST` request to `/api/login` with the user's email and password to receive a JWT for authorization.

### API Documentation

Detailed API documentation can be found in the `/docs` folder (if you have added documentation files) or directly in the code comments.

## Contributing

If you'd like to contribute, feel free to fork the repository and submit a Pull Request. You can also open issues for any bugs or feature requests.

To contribute:

1. Fork the project.
2. Create your feature branch (`git checkout -b feature/new-feature`).
3. Commit your changes (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature/new-feature`).
5. Open a Pull Request.

## License

This project is licensed under the MIT License.

---

### Contact

For questions or suggestions, feel free to reach out or open an issue in this repository.

Happy coding! :rocket:
