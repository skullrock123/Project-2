import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavContainerComponent } from './nav-container/nav-container.component';
import { OrderViewComponent } from './order-view/order-view.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { CakeRequestViewComponent } from './cake-request-view/cake-request-view.component';
import { AuthGuard } from './services/auth.guard';



const routes: Routes = [
  {path:"home",component:NavContainerComponent},
  {path:"login",component:LoginPageComponent},
  {path:"cake-request",component:CakeRequestViewComponent,canActivate:[AuthGuard]},
  {path:"order/:id",component:OrderViewComponent},
  {path:"",redirectTo:"/home",pathMatch:"full"},
  {path:"**",component:NotFoundComponent}
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
