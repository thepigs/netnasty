import { HomeModule } from '../home/home.module';
import { NgModule } from '@angular/core';

import { LoginComponent } from './login.component';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
  ],
  providers: [],
  entryComponents:[LoginComponent]
})
export class LoginModule { }
