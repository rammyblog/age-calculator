<h1 align="center">Age Calculator implementation Details 👋</h1>

> An admin dashboard built using Node, Express, Node and React to for managing users easily. Coming from a django background, there is a free admin panel all models, So I decided to build one with MERN so I could easily manage the user data easily.

### 🏠 [Homepage](https://age-calculator-talentql.herokuapp.com/)

### ✨ [Demo](https://age-calculator-talentql.herokuapp.com/howold/)

## Usage

> To get this project running perfectly on your local, ensure you follow the instructions below.
1. `npm install`
2. Run this command `npm run dev`
3. The project should be live at http://localhost:3004 .

## How It works
This is a simple age calculator, it takes the dob(unix timestamp) then calculates the age based off that.

### Main Library and Frameworks
- ExpressJS as the web framework because of how minimal and flexible it is.
- Morgan for logging
- Express Rate Limit for rate limiting
- Joi for validating the schema

There is only a single GET route which is /howold, this route is handled by the a controller (dob.controller.js) which abstracts the logic away from the router.

In the `dob.controller.js` contains just one function that handles the age calculation requests, This function is named `ageController`.

The `ageController` function checks the dob query param then passes it to Joi for validation, if it's valid Joi converts the timestamp to a date then passes the date to the `getAge` function.

The `getAge` function is the one that calculates the age from the date.

If the `age` is less than 0, it returns undefined

The `ageController` is wrapped in a try-catch, so if there is an error, it returns a 400.