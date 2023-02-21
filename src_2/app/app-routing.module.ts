import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductCreateComponent } from './admin/product-create/product-create.component';
import { HomeComponent } from './component/home/home.component';


const routes: Routes = [
  {
    path:'product-create',component:ProductCreateComponent
  },
  {
    path:'',component:HomeComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
