# HiShop - Front-end

## Prerequisites
- Ensure Node and NPM (or yarn) are installed.
- Install firebase-tools globally.
- Create a Stripe account.
- Create a Firebase project and activate Hosting, Cloud Firestore, and Functions services.

## Installation

Start by cloning the git repository. In the command prompt of a terminal, navigate to the project directory.

Run the command `npm i` to install all the necessary packages.

At the project's root, create a `.env` file and define the environment variables.

```env
REACT_APP_PUBLIC_FIREBASE_API_KEY=
REACT_APP_PUBLIC_FIREBASE_AUTH_DOMAIN=
REACT_APP_PUBLIC_FIREBASE_PROJECT_ID=
REACT_APP_PUBLIC_FIREBASE_STORAGE_BUCKET=
REACT_APP_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
REACT_APP_PUBLIC_FIREBASE_APP_ID=
REACT_APP_PUBLIC_FIREBASE_MEASUREMENT_ID=
REACT_APP_STRIPE_PUBLIC_KEY=
```

### Local Preview
To run the project locally, execute the command `npm run start`.

### Deployment
To deploy the application, run the command `npm run deploy`.

### Choices
This project utilizes several NPM packages to incorporate features and simplify their implementation.

- `@headlessui/react`: A library of unstyled UI components.
- `@stripe/react-stripe-js`: Package for integrating Stripe with React.
- `@stripe/stripe-js`: Package for integrating Stripe.
- `clsx:` Enables more complex construction of `className`.
- `firebase`: This package provides tools for the frontend to communicate with the Google Firebase service.
- `i18next`: Adds internationalization management.
- `i18next-browser-languagedetector`: Detects the language used by the user's browser.
- `lucide-react`: Adds a collection of icons as components.
- `react-hot-toast`: A library for displaying notifications as toasts.
- `react-i18next`: Enables the implementation of internationalization in a React project.
- `react-router-dom`: React library for managing application routes.
- `tailwind-merge`: Allows the merging of class names.
- `zustand`: State management.
- `tailwindcss`: CSS library.