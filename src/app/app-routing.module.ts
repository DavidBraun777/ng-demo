import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AngularFireAuthGuard } from '@angular/fire/auth-guard'

const redirectToProfile = () => new Promise (
  user => user ? ['profile', (user as any).uid] : true
);

const onlyAllowSelf = next => new Promise (
  user => (!!user && next.params.id == (user as any).uid) || ['']
);

const routes: Routes = [{
  path: '',
  component: LoginComponent,
  canActivate: [AngularFireAuthGuard],
  data: { authGuardPipe: onlyAllowSelf}
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
