// Import hàm loadManifest từ thư viện module-federation của Angular Architects
import { loadManifest } from '@angular-architects/module-federation';

// Import cấu hình môi trường từ tệp environment
import { environment } from './environments/environment';

// Gọi hàm loadManifest với đường dẫn manifest từ cấu hình môi trường
loadManifest(environment.manifest)
  .catch((err) => console.error('Error loading remote entries', err)) // Nếu có lỗi trong việc tải remote entries, log lỗi ra console
  .then(() => import('./bootstrap')) // Nếu tải thành công, import module bootstrap để khởi động ứng dụng
  .catch((err) => console.error(err));  // Nếu có lỗi trong quá trình import, log lỗi ra console
