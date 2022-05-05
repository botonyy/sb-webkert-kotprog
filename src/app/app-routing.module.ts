import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './pages/contact/contact.component';
import { MainComponent } from './pages/main/main.component';


export const routes: Routes = [
  {
      path: '',
      component: MainComponent,
  },
  {
      path: 'contact',
      component: ContactComponent,
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

