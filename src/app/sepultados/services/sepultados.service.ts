import { Injectable } from '@angular/core';
import {Sepultado} from '../models/sepultados.model';
import {Firestore} from 'src/app/core/classes/firestore.class';
import {AngularFirestore} from '@angular/fire/firestore';
import {AuthService} from 'src/app/core/services/auth.service';


@Injectable({
  providedIn: 'root'
})
export class SepultadosService  extends Firestore<Sepultado> {

  constructor(private authService: AuthService, db: AngularFirestore) {
    super(db);
    this.init();
    }


    private init(): void {
      this.authService.authState$.subscribe(user => {
        if (user) {
          this.setCollection(`/users/${user.uid}/sepultados`, ref =>
          ref.orderBy('done', 'asc').orderBy('title', 'asc'));
          return;
        }
        this.setCollection(null);
      });
    }
}
