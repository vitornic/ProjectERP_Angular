import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { PrincipalComponent } from './pages/principal/principal.component';
import { CClientComponent } from './pages/modulos/clientes/cadastro/c-client/c-client.component';
import { RotasLogadasGuard } from './guards/rotas-logadas.guard';

const routes: Routes = [
  { path: '', component: PrincipalComponent },
  { path: 'Principal', component: PrincipalComponent },
  { path: 'Login', component: LoginComponent },
  { path: 'Cadastro', component: CadastroComponent },
  { path: 'Modulos/Clientes/Cadastro/C_Client', component: CClientComponent, canActivate: [RotasLogadasGuard] },
  { path: '**', redirectTo: 'Login' }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})

export class AppRoutingModule {}