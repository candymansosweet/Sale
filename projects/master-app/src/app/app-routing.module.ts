import { loadRemoteModule } from '@angular-architects/module-federation-runtime';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      // {
      //   path: '',
      //   loadChildren: () => import('../app/layouts/layout-client/layout-client.module').then(m => m.LayoutClientModule)
      // },
      {
        path: '',
        loadChildren: () => import('../app/layouts/layout-admin/layout-admin.module').then(m => m.LayoutAdminModule)
      },
      {
        path: 'admin',
        loadChildren: () => import('../app/layouts/layout-admin/layout-admin.module').then(m => m.LayoutAdminModule)
      },
      {
        path: 'auth',
        loadChildren: () => import('projects/master-app/src/app/components/auth/auth.module').then(m => m.AuthModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
