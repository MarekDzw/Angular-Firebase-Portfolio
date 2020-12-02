import { Injectable } from "@angular/core";
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from "@angular/fire/firestore";
import { Observable } from "rxjs";
import { CategoryItem } from "./models/CategoryItem";
import { AngularFireStorage } from "@angular/fire/storage";
import { finalize } from "rxjs/operators";

@Injectable()
export class FirebaseService {
  categoriesItems: Observable<CategoryItem[]>;
  categoriesSingleItems: Observable<CategoryItem[]>;
  referenceImage: string;
  reference: Observable<any[]>;
  referenceDoc: AngularFirestoreDocument<any>;
  realizationDoc: AngularFirestoreDocument<any>;
  realizationItem: Observable<CategoryItem[]>;
  realizationMainImage: string;
  downloadUrl: any;
  constructor(
    private db: AngularFirestore,
    private storage: AngularFireStorage
  ) {}

  getSingleCat(route) {
    this.categoriesItems = this.db.collection(route).valueChanges();

    return this.categoriesItems;
  }
  getSingleCatItem(route) {
    this.categoriesSingleItems = this.db.collection(route).valueChanges();
    return this.categoriesSingleItems;
  }

  addReference(reference) {
    const id = this.db.createId();
    const references = {
      name: reference.name,
      text: reference.text,
      imagePath: this.referenceImage,
      id: id,
    };
    if (this.referenceImage == "") {
      return;
    }
    this.db.collection("reference").doc(id).set(references);
  }

  uploadImage(filePath, file) {
    const ref = this.storage.ref(filePath);
    ref
      .put(file)
      .percentageChanges()
      .pipe(
        finalize(() => {
          ref.getDownloadURL().subscribe((url) => {
            this.referenceImage = url;
          });
        })
      )
      .subscribe();
  }

  getReference() {
    this.reference = this.db.collection("reference").valueChanges();
    return this.reference;
  }

  deleteReference(item, imageUrl) {
    this.referenceDoc = this.db.doc(`reference/${item.id}`);
    this.storage.storage.refFromURL(imageUrl).delete();
    this.referenceDoc.delete();
  }

  getRealization(path) {
    this.realizationItem = this.db.collection(path).valueChanges();
    return this.realizationItem;
  }
  addRealization(realization, categoryPath) {
    const id = this.db.createId();
    const path = categoryPath;
    realization = {
      title: realization.title,
      id: id,
      longTitle: realization.longTitle,
      mainImage: this.realizationMainImage,
      description: realization.description,
      category: path,
    };
    if (realization.mainImage == null) {
      return;
    } else {
      this.db
        .collection(path)
        .doc(id)
        .set(realization)
        .then(() => {
          window.location.reload();
        });
    }
  }
  uploadRealizationMainImage(file) {
    const path = "realizacje/" + Math.random() * 5 + file.name;
    const ref = this.storage.ref(path);
    ref
      .put(file)
      .percentageChanges()
      .pipe(
        finalize(() => {
          ref.getDownloadURL().subscribe((url) => {
            this.realizationMainImage = url;
          });
        })
      )
      .subscribe();
  }

  deleteRealization(item, mainUrl) {
    this.realizationDoc = this.db.doc(`${item.category}/${item.id}`);
    this.downloadUrl = mainUrl;

    this.storage.storage.refFromURL(this.downloadUrl).delete();
    this.realizationDoc.delete().then(() => {
      window.location.reload();
    });
  }
}
