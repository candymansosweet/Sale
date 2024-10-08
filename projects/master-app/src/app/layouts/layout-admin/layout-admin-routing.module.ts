import { loadRemoteModule } from '@angular-architects/module-federation-runtime';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutAdminComponent } from './layout-admin.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutAdminComponent,
    children: [
      {
        path: 'hrm',
        loadChildren: () => loadRemoteModule({
          type: 'manifest',
          remoteName: 'hrm',
          exposedModule: './Module'
        })
          .then(m => m.RemoteEntryModule)
          .catch(err => {
            console.error('Error loading HRM module', err);
            return import('projects/master-app/src/app/components/error-page/error-page.module').then(m => m.ErrorPageModule);
          })
      },
      {
        path: 'media',
        loadChildren: () => loadRemoteModule({
          type: 'manifest',
          remoteName: 'media',
          exposedModule: './Module'
        })
          .then(m => m.RemoteEntryModule)
          .catch(err => {
            console.error('Error loading Media module', err);
            return import('projects/master-app/src/app/components/error-page/error-page.module').then(m => m.ErrorPageModule);
          })
      },
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutAdminRoutingModule { }
