import { loadManifest } from '@angular-architects/module-federation';
import { environment } from './environments/environment';

loadManifest(environment.manifest)
.catch((err) => console.error('Error loading remote entries', err))
.then(() => import('./bootstrap'))
.catch((err) => console.error(err));
