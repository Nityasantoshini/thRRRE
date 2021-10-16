import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule, Routes } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { DonateWasteComponent } from './donate-waste/donate-waste.component';
import { SellWasteComponent } from './sell-waste/sell-waste.component';
import { RRRComponent } from './rrr/rrr.component';

const routes: Routes = [{path: '', component: LoginComponent},
                        {path: 'login',component: LoginComponent},
                        {path: 'register', component: RegisterComponent},
                        {path: 'RRR',canActivate:['AuthGuard'], component: RRRComponent}
                        ];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    DonateWasteComponent,
    SellWasteComponent,
    RRRComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
