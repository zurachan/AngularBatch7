import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BreadcrumbModule } from './layout/breadcrumb/breadcrumb.module';
import { FooterComponent } from './layout/footer/footer.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { PaginationModule } from './layout/pagination/pagination.module';
import { PreloaderComponent } from './layout/preloader/preloader.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { DepartmentComponent } from './pages/department/department.component';
import { ErrorComponent } from './pages/error/error.component';
import { HomeComponent } from './pages/home/home.component';
import { PositionComponent } from './pages/position/position.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { UserDetailComponent } from './pages/user/user-detail/user-detail.component';
import { UserPopupComponent } from './pages/user/user-popup/user-popup.component';
import { UserComponent } from './pages/user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    FooterComponent,
    PreloaderComponent,
    UserComponent,
    DepartmentComponent,
    PositionComponent,
    UserDetailComponent,
    UserPopupComponent,
    HomeComponent,
    ErrorComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    PaginationModule,
    BreadcrumbModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
