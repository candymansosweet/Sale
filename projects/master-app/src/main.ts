// Import hàm loadManifest từ thư viện module-federation của Angular Architects
import { loadManifest } from '@angular-architects/module-federation';

// Import cấu hình môi trường từ tệp environment
import { environment } from './environments/environment';

// Gọi hàm loadManifest với đường dẫn manifest từ cấu hình môi trường
loadManifest(environment.manifest)
  // Nếu có lỗi trong việc tải remote entries, log lỗi ra console
  .catch((err) => console.error('Error loading remote entries', err))
  // Nếu tải thành công, import module bootstrap để khởi động ứng dụng
  .then(() => import('./bootstrap'))
  // Nếu có lỗi trong quá trình import, log lỗi ra console
  .catch((err) => console.error(err));
