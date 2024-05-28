import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentComponent } from './pages/department/department.component';
import { PositionComponent } from './pages/position/position.component';
import { UserDetailComponent } from './pages/user-detail/user-detail.component';
import { UserComponent } from './pages/user/user.component';

const routes: Routes = [
  {
    path: 'management/user',
    component: UserComponent,
  },
  {
    path: 'management/user/:id',
    component: UserDetailComponent,
  },
  {
    path: 'management/department',
    component: DepartmentComponent,
  },
  {
    path: 'management/position',
    component: PositionComponent,
  },
  {
    path: 'business',
    loadChildren: () =>
      import('../app/pages/business/business.module').then(
        (m) => m.BusinessModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
