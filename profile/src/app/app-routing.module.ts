import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { ContactComponent } from './contact/contact.component';
import { ServicesComponent } from './services/services.component';

const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"about",component:AboutComponent},
  {path:"skills",component:SkillsComponent},
  {path:"contact",component:ContactComponent},
  {path:"services",component:ServicesComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
