import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { ServicesComponent } from './component/services/services.component';
import { AboutComponent } from './component/about/about.component';
import { ContactComponent } from './component/contact/contact.component';
import { CoronaComponent } from './component/corona/corona.component';
import { SolutionsComponent } from './component/solutions/solutions.component';
import { AdminComponent } from './component/admin/admin.component';


const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'services', component:ServicesComponent},
  {path:'aboutus', component:AboutComponent},
  {path:'contactus', component:ContactComponent},
  {path:'corona', component:CoronaComponent},
  {path:'solutions', component:SolutionsComponent},
  {path:'admin', component:AdminComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
