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
- npx ng generate application <tên dự án>
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
