import { loadRemoteModule } from '@angular-architects/module-federation-runtime';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutClientComponent } from './layout-client.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutClientComponent,
    children: [
      {
        path: '',
        loadChildren: () => loadRemoteModule({
          type: 'manifest',
          remoteName: 'client',
          exposedModule: './Module'
        })
          .then(m => m.RemoteEntryModule)
          .catch(err => {
            console.error('Error loading Client module', err);
            return import('projects/master-app/src/app/components/error-page/error-page.module').then(m => m.ErrorPageModule);
          })
      }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutClientRoutingModule { }
