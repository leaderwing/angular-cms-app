import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HelpComComponent } from '../component/help-com/help-com.component';
import {IndexComComponent} from '../component/index-com/index-com.component';
import {ContactComComponent} from '../component/contact-com/contact-com.component';
const routes : Routes = [
  {
    path : '',
    redirectTo : '/index',
    pathMatch : 'full'
  },

  {
    path : 'index',
    component : IndexComComponent
  },
  {
      path : 'help',
      component : HelpComComponent
  },
  {
    path : 'contact',
    component : ContactComComponent
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot (routes)
  ],
  exports : [RouterModule],
  declarations: []
})
export class CmsRouteModule { }
