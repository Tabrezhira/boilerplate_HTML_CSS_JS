# Project Analysis

## Overview

This project is a front-end boilerplate featuring HTML, CSS, JavaScript, and Sass. It includes a main page with a styled table and grid, and a signup module with full CRUD (Create, Read, Update, Delete) functionality. User data is validated, stored in localStorage, and displayed dynamically in a table format without page reloads.

## Features

- **HTML Boilerplate**: Semantic structure, table and grid examples.
- **CSS Styling**: Responsive layout, custom table and grid styles, form and button designs.
- **Sass Support**: Modular and maintainable styles using variables, mixins, nesting, and partials.
- **Signup Form**:
  - Fields: Name, Email, Mobile Number, Password
  - Validation: Real-time error messages for all fields
  - Data Storage: Uses localStorage for persistence
  - CRUD Operations: Add, edit, and delete users directly from the table
  - Dynamic Table: Updates instantly using JavaScript (no page reload)
- **JavaScript Functionality**:
  - DOM manipulation for form and table
  - Event handling for form submission and table actions
  - AJAX-like updates (dynamic UI without reload)
- **NPM Ready**: Includes package.json, scripts for development, build, and Sass compilation
- **Webpack & Babel**: Modern JS support and asset bundling

## Folder Structure

```
project-folder/
├── src/
│   ├── index.html
│   ├── styles.css
│   ├── signup/
│   │   ├── signup.html
│   │   ├── signup.css
│   │   └── signup.js
│   ├── scss/
│   │   └── main.scss
│   ├── html-README.md
│   ├── css-README.md
│   ├── js-README.md
│   └── sass-README.md
├── package.json
├── webpack.config.js
├── .babelrc
└── README.md
```

## How It Works

- **Main Page**: Shows a sample table and grid layout.
- **Signup Page**: Users can register, edit, or delete their info. All changes are reflected instantly in the table below the form.
- **Validation**: Ensures data integrity before storing.
- **LocalStorage**: Keeps user data persistent across sessions.
- **No Backend Required**: All logic runs in the browser.

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start development server:
   ```bash
   npm start
   ```
3. Compile Sass:
   ```bash
   npm run sass
   ```
4. Build for production:
   ```bash
   npm run build
   ```

## Usage

- Visit `/src/index.html` for the main demo.
- Visit `/src/signup/signup.html` for the signup and user management module.

## License

MIT

---

**This project is ideal for learning and rapid prototyping of front-end features with modern