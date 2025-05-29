import { Injectable } from '@angular/core';
import {
  Firestore,
  collection,
  collectionData,
  doc,
  docData,
  addDoc,
  updateDoc,
  getDocs,
  deleteDoc
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private firestore: Firestore
  ) { }

  getCategoryList(): Promise<any> {
    console.debug("getCategoryList")
    return new Promise((resolve, reject) => {
      getDocs(collection(this.firestore, "categories")).then((querySnapshot) => {
        const categoryList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        resolve(categoryList);
      }).catch((error) => {
        reject(error);
      });
    });
  }
}

