import { NgModule } from "@angular/core";
import { AngularFireModule } from '@angular/fire';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireDatabaseModule } from "@angular/fire/database";
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireStorage } from '@angular/fire/storage';
import { environment } from '../environments/environment';
import { FirebaseService } from './firebase.service';
@NgModule({
    imports: [
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireDatabaseModule,
    ],
    providers: [AngularFirestore, FirebaseService, AngularFireAuth, AngularFireStorage],
})
export class FirebaseModule { }