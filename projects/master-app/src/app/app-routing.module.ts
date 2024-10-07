import { loadRemoteModule } from '@angular-architects/module-federation';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: 'hrm',
        loadChildren: () => loadRemoteModule(
          {
            type: 'manifest',
            remoteName: 'hrm',
            exposedModule: './Module'
          }
        ).then(m => m.RemoteEntryModule)
      },
      {
        path: 'media',
        loadChildren: () => loadRemoteModule(
          {
            type: 'manifest',
            remoteName: 'media',
            exposedModule: './Module'
          }
        ).then(m => m.RemoteEntryModule)
      },
    ]
  }  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
