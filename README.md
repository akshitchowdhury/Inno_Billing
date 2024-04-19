# Tech Company Billing Software

Welcome to the Billing Software/Invoice Generator app! This software is designed to streamline the billing process for tech companies by providing a user-friendly interface to manage invoices and client data.

## Features

- **CRUD Operations**: Perform Create, Read, Update, and Delete operations on client and invoice data.
- **Invoice Generation**: Generate professional invoices for clients with detailed billing information.
- **PDF Export**: Export generated invoices to PDF format for easy sharing and printing.
- **Client Management**: Maintain a database of client information including name, contact details, and billing preferences.
- **Responsive Design**: The application is built using Next.js, ensuring a responsive and mobile-friendly user interface.

## Technologies Used

- **Frontend**:
  - Next.js
  - React.js
  - HTML/CSS
  - JavaScript

- **Backend**:
  - Node.js
  - Express.js
  - MongoDB

## Installation

1. Clone the repository: `git clone <repository-url>`
2. Navigate to the project directory: `cd tech-company-billing-software`
3. Install dependencies for both frontend and backend:
   - Frontend: `cd frontend && npm install`
   - Backend: `cd backend && npm install`
4. Set up environment variables:
   - Create a `.env` file in the `backend` directory.
   - Define environment variables like `MONGODB_URI`, `PORT`, etc.
5. Start the development server:
   - Frontend: `cd frontend && npm run dev`
   - Backend: `cd backend && npm run dev`
6. Access the application in your web browser at `http://localhost:3000`.

## Usage

1. Register/Login: If you're a new user, register with your email and password. If you're an existing user, log in to access the dashboard.
2. Dashboard: Upon logging in, you'll be directed to the dashboard where you can view existing clients, invoices, and create new ones.
3. Client Management: Add, edit, or delete client information including name, contact details, and billing preferences.
4. Invoice Generation: Create new invoices for clients by selecting the client, adding billing details, and generating the invoice.
5. PDF Export: Export generated invoices to PDF format for easy sharing and printing.

## Contributing

Contributions are welcome! If you'd like to contribute to the project, please follow these steps:
1. Fork the repository.
2. Create a new branch: `git checkout -b feature/my-feature`.
3. Make your changes and commit them: `git commit -am 'Add new feature'`.
4. Push to the branch: `git push origin feature/my-feature`.
5. Submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

## Contact

For any inquiries or support, please contact akshitchowdhury@gmail.com
