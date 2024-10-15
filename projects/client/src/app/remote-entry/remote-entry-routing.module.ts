import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { CategoryComponent } from '../components/category/category.component';
import { ProductComponent } from '../components/product/product.component';
import { WishlistComponent } from '../components/wishlist/wishlist.component';


export const remoteRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'wishlist',
        component: WishlistComponent
      },
      {
        path: 'category',
        component: CategoryComponent
      },
      {
        path: 'category/:product',
        component: ProductComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(remoteRoutes)],
  exports: [RouterModule]
})
export class RemoteEntryRoutingModule { }
