import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthserviceService } from './authservice.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PrivacyComponent } from './privacy/privacy.component';
import { HttpClientModule} from '@angular/common/http';
import { ContactComponent } from './contact/contact.component';


export const routes:Routes=[
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'contact', component: ContactComponent },
      { path: 'privacy', component: PrivacyComponent }
    ]
  },
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    PrivacyComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    CommonModule,
    FormsModule,
    HttpClientModule,

  ],
  providers: [AuthserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
