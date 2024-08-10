import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedComponent } from './shared.component';
import { FooterComponent } from './footer/footer.component';

const routes: Routes = [
  {
    path:'',
    component:SharedComponent,
    children: [
      {
        path: '',
        component: FooterComponent
      },
      // {
      //   path: '',
      //   component: FooterComponent
      // },
    ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }
