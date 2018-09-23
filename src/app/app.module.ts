import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';


import {CmsRouteModule} from './cms-route/cms-route.module';
import { AppComponent } from './app.component';
import { IndexComComponent } from './component/index-com/index-com.component';
import { HelpComComponent } from './component/help-com/help-com.component';
import { ContactComComponent } from './component/contact-com/contact-com.component';
import { LoginComComponent } from './component/login-com/login-com.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComComponent,
    HelpComComponent,
    ContactComComponent,
    LoginComComponent
  ],
  imports: [
    BrowserModule,
    CmsRouteModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
