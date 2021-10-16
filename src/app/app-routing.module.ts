import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './auth.guard'; 
import { DonateWasteComponent } from './donate-waste/donate-waste.component';
import { SellWasteComponent } from './sell-waste/sell-waste.component';
import { RRRComponent } from './rrr/rrr.component';

const routes: Routes = [{path: '', component: LoginComponent},
{path: 'login',component: LoginComponent},
{path: 'register',component: RegisterComponent},
{path: 'donateWaste',canActivate:[AuthGuard], component: DonateWasteComponent},
{path: 'sellWaste',canActivate:[AuthGuard], component: SellWasteComponent},
{path: 'RRR',canActivate:[AuthGuard], component: RRRComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
