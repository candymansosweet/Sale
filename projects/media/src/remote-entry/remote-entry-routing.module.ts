import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const remoteRoutes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import(
        '../app/test/test.module'
      ).then((m) => m.TestModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(remoteRoutes)],
  exports: [RouterModule]
})
export class RemoteEntryRoutingModule { }
