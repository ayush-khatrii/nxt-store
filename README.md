# E-Commerce Website Project

An advanced, feature-rich e-commerce platform built with modern technologies. This project is designed to provide seamless shopping experiences for users and robust management tools for business owners.

## Tech Stack

- **Frontend**:
  - [Next.js](https://nextjs.org/): React framework for server-side rendering and static site generation.
  - [React.js](https://reactjs.org/): JavaScript library for building user interfaces.
  - [Tailwind CSS](https://tailwindcss.com/): Utility-first CSS framework for styling.
  - [ShadCN UI](https://shadcn.dev/): Modern, accessible component library for React.

- **Backend**:
  - [PostgreSQL](https://www.postgresql.org/): Relational database system for reliable data storage.

- **Authentication**:
  - [Clerk](https://clerk.dev/): Authentication and user management service.

- **Management Dashboard**:
  - Built with Next.js and ShadCN UI to allow users to manage their website efficiently.

## Features

### User-Facing
- Dynamic product listings with categories and filters.
- Secure user authentication using Clerk.
- Fully responsive design for seamless experiences across devices.
- Fast and efficient navigation with server-side rendering and optimized performance.

### Admin Dashboard
- Manage products: Add, update, and delete products.
- View orders and customer details.
- Manage categories and inventory.


## Installation

### Prerequisites
- Node.js (>= 14.x)
- PostgreSQL (Ensure it's running locally or have connection details for a remote instance)

### Steps

1. **Clone the repository:**
   ```bash
   git clone https://github.com/ayush-khatrii/nxt-store.
   cd nxt-store
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   Create a `.env.local` file in the root of your project and add the following variables:
   ```env
   DATABASE_URL=your_postgresql_connection_string
   NEXT_PUBLIC_CLERK_FRONTEND_API=your_clerk_frontend_api_key
   CLERK_API_KEY=your_clerk_backend_api_key
   ```

4. **Run database migrations:**
   ```bash
   npx prisma migrate dev
   ```

5. **Start the development server:**
   ```bash
   npm run dev
   ```
   Access the app at [http://localhost:3000](http://localhost:3000).

## Scripts

- `npm run dev`: Start the development server.
- `npm run build`: Build the app for production.
- `npm start`: Start the production server.

## Contributing

1. Fork the repository.
2. Create a feature branch.
3. Commit your changes.
4. Open a pull request.

## License

This project is licensed under the [MIT License](LICENSE).


Feel free to reach out with questions, suggestions, or contributions!

Thank You! 