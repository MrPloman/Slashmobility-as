import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { RequestService } from './services/request/request.service';
import { DataShareService } from './services/dataShare/data-share.service';

import { AppComponent } from './app.component';
import { NavBarComponent } from './components/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './angular_material/material.module';
import { IonSearchBarComponent } from './components/ion-searchbar/ion-searchbar.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { HomeComponent } from './components/home/home.component';
import { CatalogComponent } from './components/catalog/catalog.component';
import { NgxPopper } from 'angular-popper';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    IonSearchBarComponent,
    WishlistComponent,
    HomeComponent,
    CatalogComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    NgxPopper, 
    FormsModule,
  ],
  providers: [RequestService, DataShareService],
  bootstrap: [AppComponent]
})
export class AppModule { }
