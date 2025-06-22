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
export class  DataService {

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

  getCategoryWithMenuItems(): Promise<any[]> {
    return new Promise(async (resolve, reject) => {
      try {
        const categorySnapshot = await getDocs(collection(this.firestore, 'categories'));
        const menuItemsSnapshot = await getDocs(collection(this.firestore, 'menuItems'));

        const categories = categorySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...(doc.data() as any),
        }));

        const menuItems = menuItemsSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...(doc.data() as any),
        }));

        const finalData = categories.map((category) => {
          const items = menuItems.filter((item) => item.category === category.id);
          return { ...category, items };
        });

        resolve(finalData);
      } catch (error) {
        reject(error);
      }
    });
  }

   // Fetch offers
  getOffers(): Promise<any[]> {
    return new Promise((resolve, reject) => {
      getDocs(collection(this.firestore, "offers")).then((querySnapshot) => {
        const offersList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        resolve(offersList);
      }).catch((error) => {
        reject(error);
      });
    });
  }

  // Fetch posters
  getPosters(): Promise<any[]> {
    return new Promise((resolve, reject) => {
      getDocs(collection(this.firestore, "posters")).then((querySnapshot) => {
        const postersList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        resolve(postersList);
      }).catch((error) => {
        reject(error);
      });
    });
  }

  // Fetch gallery items
  getGallery(): Promise<any[]> {
    return new Promise((resolve, reject) => {
      getDocs(collection(this.firestore, "gallery")).then((querySnapshot) => {
        const galleryList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        resolve(galleryList);
      }).catch((error) => {
        reject(error);
      });
    });
  }

}

