# 🍕 Next Pizza

**Next Pizza** is a clone of the popular pizza delivery service “Dodo Pizza,” developed using the Next.js framework.

### [DEMO](https://next-pizza-taupe-one.vercel.app/)

## Features

-   View the pizza catalog with detailed descriptions
-   Place orders and manage the shopping cart
-   User authentication and profile management with NextAuth.js

## Technologies

-   **Next.js**: for building the user interface
-   **Prisma**: for working with the PostgreSQL database
-   **Shadcn**: for UI components
-   **Next Auth**: for user authentication and session management

## Install

1.  Clone the repository:

    ``` bash  
    git clone https://github.com/karamba-x/next-pizza.git
    ```
2.  Install dependencies:
   
    ``` bash   
    cd next-pizza
    npm install
    ```
3.  Set up the environment variables:
    
4.  Run Prisma migrations:
    
    ``` bash   
    npm run prisma:push
    ```
5.  Run the development server:
    
    ``` bash   
    npm run dev
    ```
    
6.  Build for production (optional):
    
    ``` bash
    npm run build
	```
7.  Start the production server (optional):
    
    ``` bash
    npm run start
	```