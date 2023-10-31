import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SessionComponent } from './pages/session/session.component';
import { DashboardComponent } from './dashboard.component';
import { UserListComponent } from './pages/user/user-list/user-list.component';

export const routes: Routes = [
  { path:'',  component: DashboardComponent, children: [
    {path: 'sessions', component: SessionComponent},
    {path: 'user-list', component: UserListComponent}
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {}
