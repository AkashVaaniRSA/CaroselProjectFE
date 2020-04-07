import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { Route, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CarouselComponent } from './carousel/carousel.component';
import { CarouselService } from './Service/carousel.service';
import { CarouselupdateComponent } from './carouselupdate/carouselupdate.component';
import { SoftdeleteComponent } from './softdelete/softdelete.component';
import { SoftDeleteService } from './service/softdelete.service';

const myRoutes:Route[] = [
  {
    path:'carousel',component:CarouselComponent
  },
  {
    path:'update',component:CarouselupdateComponent
  },
  {
    path:'delete',component:SoftdeleteComponent
  },
  {
    path:'**', component:CarouselComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    CarouselupdateComponent,
    SoftdeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(myRoutes),
    HttpClientModule

  ],
  providers: [CarouselService,SoftDeleteService],
  bootstrap: [AppComponent]
})
export class AppModule { }


