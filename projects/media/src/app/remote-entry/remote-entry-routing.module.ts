import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


export const remoteRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'test',
        loadChildren: () =>
          import('../components/test/test.module').then((m) => m.TestModule),
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(remoteRoutes)],
  exports: [RouterModule]
})
export class RemoteEntryRoutingModule { }
