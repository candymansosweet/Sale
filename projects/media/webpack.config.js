// Import các hàm cần thiết từ thư viện module-federation của Angular Architects
const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

// Xuất cấu hình Webpack với Module Federation Plugin
module.exports = withModuleFederationPlugin({

  // Tên của remote module (media) này
  name: 'media',

  // Phần expose cho phép chia sẻ module của ứng dụng này với các ứng dụng khác
  exposes: {
    // Định nghĩa module được chia sẻ với tên './Module'
    './Module': './projects/media/src/app/remote-entry/remote-entry.module.ts',
    // Tệp này sẽ được sử dụng bởi các ứng dụng khác để load module này
  },

  // Phần shared cho phép chia sẻ các thư viện với các ứng dụng khác
  shared: {
    // Sử dụng hàm shareAll để chia sẻ tất cả các dependency (thư viện) cần thiết
    ...shareAll({
      // Đảm bảo chỉ có một instance duy nhất của mỗi thư viện (singleton)
      singleton: true,
      // Bắt buộc sử dụng phiên bản chính xác của các thư viện (strictVersion)
      strictVersion: true,
      // Tự động xác định phiên bản phù hợp cho các thư viện (requiredVersion)
      requiredVersion: 'auto',
    }),
  },
});
