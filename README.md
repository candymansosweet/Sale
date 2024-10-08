# Sale

## Module Federation
- các module được espose sẽ tồn tại trong runtime dưới dạng một remoteEntry.js

## Manifest.json ( projects\master-app\src\assets\mf.manifest.json ) (1)
- chỉ định module fe được load từ đâu trong các môi trường khác nhau

## config json ( projects\master-app\src\assets\config ) (2)
- địa chỉ api ở back end sẽ được gọi ở các một trường khác nhau
- Title, favicon
- `development.json`: môi trường development
- `staging.json`: môi trường staging

## environment.ts
- chỉ định tài nguyên (1) (2) sẽ được load dựa vào MÔI TRƯỜNG.   


# Hướng dẫn chung
## Tạo mới 1 application 
- ng g @angular-architects/module-federation:init --project <tên dự án> --port <cổng> --type <kiểu dự án remote | host>
- create remote-entry moudule:  
  + cd projects\<tên dự án>\src\app
  + ng g m remote-entry --routing
  + ng g c remote-entry
- config webpack.config.js:
`
const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');
module.exports = withModuleFederationPlugin({
  name: '<tên dự án>',
  exposes: {
    './Module': './projects/<Tên dự án>/src/app/remote-entry/remote-entry.module.ts',
  },
  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },
});
`


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.0.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
