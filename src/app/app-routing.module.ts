import { PreloaderComponent } from './layout/preloader/preloader.component';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { DepartmentComponent } from './pages/department/department.component';
import { ErrorComponent } from './pages/error/error.component';
import { HomeComponent } from './pages/home/home.component';
import { PositionComponent } from './pages/position/position.component';
import { UserDetailComponent } from './pages/user/user-detail/user-detail.component';
import { UserComponent } from './pages/user/user.component';
import { ProfileComponent } from './pages/profile/profile.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
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
    path: 'profile',
    component: ProfileComponent,
  },
  {
    path: 'business',
    loadChildren: () =>
      import('../app/pages/business/business.module').then(
        (m) => m.BusinessModule
      ),
  },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
