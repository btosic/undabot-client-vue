# Undabot Frontend Client App (Vue.js)

This is a recruitment test solution for Undabot job position Frontend developer created with Vue.js 2.5.

## Project setup
```
npm install
```

## Development server
To start the development server run:
```
npm run serve
```
Navigate to `http://localhost:8080/`. The app will automatically reload if you change any of the source files.

### Compiles and minifies for production
```
npm run build
```

## Task 1 - New instance

Since Vue CLI was used for generating the project no special Webpack configuration was required. When prompted, Vue Router and SASS preprocessor were selected to be included in the project.

Navigation element and two boilerplate components (Home and Contact) were created for this task. Vue Router was set up to handle the navigation (see router.js).

## Task 2 - Home page

Content is assembled based on the TV show I'm currently watching. Text and images are collected from all over the internet or made-up.

For CSS, a minimalist [Skeleton](http://getskeleton.com/) framework is used instead of more common Bootstrap. This was enough to implement responsive examples and at the same time reduced the CSS footprint.

Responsive concepts used here are:
- flexible columns/grid
- dynamic font sizing
- show/hide banner image
- different layout based on screen size

Other concepts could be applied, like smaller images for small screens to reduce network traffic on mobile phones, but this wasn't implemented here.

SCSS files in this task showcase the usage of variables, nesting, mixins and importing partials.

## Task 3 - Contact us page

This task is realized using Vuelidate and Vue computed properties. POST request is sent to server running at http://localhost:3000 as configured in environment.ts. Server implementation can be found in `undabot-server-express` repository.

HTML form is an example of Vue single page component. Event sending from child component (using $emit) is demonstrated when form is successfully submitted.

Both client-side and server-side validation are demonstrated in this task. For client-side validation, checkbox above Submit button needs to be checked.

Client-side validation is using Vuelidate for checking constraints and calculated properties for displaying errors. When used, Submit button is disabled until all form fields are in valid state.

If client-side validation is not used (checkbox not checked), validation errors (if any) are displayed based on the server response.

HTML elements representing error messages are shared (reused) for both client-side and server-side validation.