import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule }   from '@angular/forms';
import { environment} from '../environments/environment';
import {WebcamModule} from 'ngx-webcam';
import { HttpClientModule } from '@angular/common/http';
//Import components
import { LoginComponent } from './login/login.component';
import { BusinessCardComponent } from './business-card/business-card.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { BusinessCardsComponent } from './business-cards/business-cards.component';
import { LogoutComponent } from './logout/logout.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { UserInforComponent } from './user-infor/user-infor.component';
import { RegisterComponent } from './register/register.component';
import { NewBusinessCardComponent } from './new-business-card/new-business-card.component';
import { UpdateBusinessCardComponent } from './update-business-card/update-business-card.component';
import { WebcamSnapshotComponent } from './webcam-snapshot/webcam-snapshot.component';
//Import services
import {AuthServiceService} from './services/auth-service.service';
import {BusinessCardService} from './services/business-card.service';
import {SearchService} from './services/search.service';
import {AuthGuardGuard} from './auth-guard.guard';

//Import Firebase
import { firestore } from 'firebase';
import {AngularFireModule} from '@angular/fire';
import {AngularFirestore} from '@angular/fire/firestore';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { SearchCardComponent } from './search-card/search-card.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BusinessCardComponent,
    NotFoundComponent,
    BusinessCardsComponent,
    LogoutComponent,
    NavBarComponent,
    UserInforComponent,
    RegisterComponent,
    NewBusinessCardComponent,
    UpdateBusinessCardComponent,
    WebcamSnapshotComponent,
    SearchCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase, 'firebaseApp'),
    AngularFireAuthModule,
    AngularFireModule,
    AngularFireStorageModule,
    FormsModule,
    AngularFirestoreModule,
    WebcamModule,
    HttpClientModule
  ],
  providers: [
    AuthServiceService,
    BusinessCardService,
    SearchService,
    AngularFirestore,
    AuthGuardGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
