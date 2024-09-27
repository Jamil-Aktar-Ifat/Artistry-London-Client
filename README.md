# Artistry London Frontend

## Overview
The Artistry London frontend is a user-friendly and responsive web application designed to showcase various art and craft items. Built with React, this application provides an engaging experience for users to browse, manage, and showcase their creativity. It seamlessly connects to a backend API for user authentication and CRUD operations, enabling users to create a personalised collection of their favorite crafts.

## Live Site URL
Explore the live version of Artistry London here: [Artistry London Live](https://artistry-london.web.app)

## Features
### General Features
- **Responsive Design**: The application is designed to be responsive, ensuring that it works seamlessly on mobile, tablet, and desktop devices.
- **User-Friendly Interface**: Intuitive navigation and layout make it easy for users to explore different art and craft items.

### User Authentication
- **Secure Registration & Login**: Users can register and log in securely using email/password, Google, GitHub, or Facebook accounts.
- **Session Management**: The application maintains user sessions, allowing users to remain logged in without needing to authenticate every time they visit the site.

### Craft Item Management
- **Add Craft Item**: Logged-in users can add new art and craft items with relevant details such as name, category, description, price, and images.
- **Update Craft Item**: Users can update their previously added craft items to keep their listings up-to-date.
- **Delete Craft Item**: Users can delete their craft items if they are no longer needed.
- **Private Route Access**: Certain features, like adding or updating craft items, are restricted to authenticated users.

### Craft Item Display
- **Craft Item Gallery**: A visually appealing grid layout displays craft items, including images, titles, and brief descriptions, allowing users to browse easily.
- **View Details Page**: Users can click on a craft item to see detailed information, including a larger image, full description, and additional details like ratings and customisation options.

### Notifications & Alerts
- **User Feedback**: Utilise toast notifications for user actions such as successful login, item additions, updates, and deletions, providing immediate feedback and enhancing the user experience.

## Key Rules
- **Environment Variables**: Use environment variables to keep sensitive information secure. Create a `.env` file in the root directory with the required keys.
- **Creative Design**: The design is unique and inspired by modern web design trends, ensuring a distinctive look and feel for the application.

## Technologies Used
- **React**: A JavaScript library for building user interfaces, allowing for component-based architecture and reusability.
- **React Router**: For managing navigation and routing between different pages in the application.
- **Firebase Authentication**: For secure user authentication and session management.
- **CSS Modules / SCSS**: For styling components in a modular way, promoting better organization and maintainability of styles.
- **React Icons**: For incorporating a variety of icons in the UI, enhancing visual appeal and user interaction.
- **Animate.css**: For adding animations to elements, improving the overall user experience.

## API Integration
The frontend interacts with the backend API to perform user authentication and manage craft items. Below are the API endpoints used:

### User Authentication
- **`POST /register`**: Registers a new user by accepting a name, email, and password.
- **`POST /login`**: Authenticates the user with email and password, returning a token for session management.
- **Social Login**: Users can log in using their Google and GitHub accounts through Firebase Authentication.

### Craft Items Management
- **`GET /crafts`**: Retrieves all craft items from the database to display on the home page.
- **`POST /crafts`**: Adds a new craft item (protected route). Only logged-in users can access this endpoint.
- **`PUT /crafts/:id`**: Updates an existing craft item (protected route). Only the user who added the item can update it.
- **`DELETE /crafts/:id`**: Deletes a craft item (protected route). A confirmation prompt is shown before deletion.

## Getting Started
To run the frontend locally, follow these steps:

### Prerequisites
- Ensure you have Node.js and npm installed on your machine.

### Installation Steps
1. **Clone the Repository**:
    ```bash
    git clone https://github.com/yourusername/artistry-london-frontend.git
    ```
2. **Navigate to the Frontend Directory**:
    ```bash
    cd artistry-london-frontend
    ```
3. **Install Dependencies**:
    ```bash
    npm install
    ```
4. **Set Up Environment Variables**:
    - Create a `.env` file in the root directory and add your Firebase configuration:
    ```plaintext
    REACT_APP_FIREBASE_API_KEY=your_firebase_api_key
    REACT_APP_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
    REACT_APP_FIREBASE_PROJECT_ID=your_firebase_project_id
    REACT_APP_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
    REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
    REACT_APP_FIREBASE_APP_ID=your_firebase_app_id
    ```
5. **Run the Application**:
    ```bash
    npm start
    ```
6. **Access the Application**: 
    Open your web browser and navigate to `http://localhost:3000` to view the application in action.

## Contribution
We welcome contributions! If you would like to contribute to this project, please follow these steps:
1. **Fork the Repository**: Click on the "Fork" button at the top right of this page.
2. **Create a Feature Branch**:
    ```bash
    git checkout -b feature/YourFeature
    ```
3. **Make Your Changes**: Implement your feature or fix a bug.
4. **Commit Your Changes**:
    ```bash
    git commit -m "Add your commit message here"
    ```
5. **Push to the Branch**:
    ```bash
    git push origin feature/YourFeature
    ```
6. **Create a Pull Request**: Navigate to the original repository and submit a pull request.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
