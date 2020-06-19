import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  { path: 'pages/login', component: LoginComponent },
  { path: '', redirectTo: 'pages/login', pathMatch: 'full' },
  { path: '**', component: LoginComponent },
  ];

@NgModule({
  exports: [ RouterModule ]
})

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})

export class AppRoutingModule {}