import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


export const remoteRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'test',
        loadChildren: () =>
          import('../components/permission/permission.module').then((m) => m.PermissionModule),
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(remoteRoutes)],
  exports: [RouterModule]
})
export class RemoteEntryRoutingModule { }
