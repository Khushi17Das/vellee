# Velluto Impex Catalogue

Premium responsive Angular catalogue website for Velluto Impex, designed for `vellutolinen.com.au`.

## Included

- Public catalogue pages: Home, About, Shop, Product Details, Categories, Contact, Privacy Policy, Terms & Conditions.
- Mock product/category/testimonial data through Angular services.
- No pricing, cart, checkout, or payment gateway.
- Responsive luxury UI with sticky navigation, animated mobile menu, scroll reveal, hover states, category/product sliders, skeleton loading, counters, testimonials, and scroll-to-top.
- SEO basics through route titles, meta tags, semantic content, Open Graph tags, and image alt text.
- Replaceable local assets in `src/assets`.

## Angular Version Note

The npm registry reports Angular `22.0.5` as current, but Angular 22 CLI requires Node `24.15.0+`. This machine has Node `24.13.1`, so the project uses Angular `21.2.x`, which supports the installed Node runtime and builds successfully. To upgrade later, update Node first, then run Angular's official update path.

## Commands

```bash
npm install
npm run start
npm run build
```

Development server:

```bash
http://127.0.0.1:4200/
```

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 21.2.18.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
