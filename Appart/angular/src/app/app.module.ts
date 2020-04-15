import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PangolinComponent } from './pangolin/pangolin.component';
import { UserComponent } from './user/user.component';
import { Routes, RouterModule }  from '@angular/router';

const appRoutes : Routes = [
{path : 'pangolins', component: PangolinComponent},
{path : '', component: UserComponent}
];
  
@NgModule({
  declarations: [
    AppComponent,
    PangolinComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
