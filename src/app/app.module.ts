import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { GithubFollowersComponent } from './github-followers/github-followers.component';
import { AboutComponent } from './about/about.component';
import { RouterModule } from '@angular/router';
import { GithubFollowersService } from './services/github-followers.service';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    GithubFollowersComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent  },
      { path: 'followers', component: GithubFollowersComponent }
    ])
  ],
  providers: [
    GithubFollowersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
