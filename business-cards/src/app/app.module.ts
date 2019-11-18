import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule }   from '@angular/forms';
import { environment} from '../environments/environment';
//Import components
import { LoginComponent } from './login/login.component';
import { BusinessCardComponent } from './business-card/business-card.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { BusinessCardsComponent } from './business-cards/business-cards.component';
import { LogoutComponent } from './logout/logout.component';
//Import services
import {AuthServiceService} from './services/auth-service.service';
import {BusinessCardService} from './services/business-card.service';
import {SearchService} from './services/search.service';
//Import Firebase
import { firestore } from 'firebase';
import {AngularFireModule} from '@angular/fire';
import {AngularFirestore} from '@angular/fire/firestore';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireAuth } from "@angular/fire/auth";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BusinessCardComponent,
    NotFoundComponent,
    BusinessCardsComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase, 'firebaseApp'),
    AngularFireAuthModule,
    AngularFireModule,
    AngularFireStorageModule,
    AngularFireAuth,
    FormsModule
  ],
  providers: [
    AuthServiceService,
    BusinessCardService,
    SearchService,
    AngularFirestore
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
