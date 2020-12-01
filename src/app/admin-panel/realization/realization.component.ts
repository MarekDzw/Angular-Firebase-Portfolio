import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../firebase.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-realization',
  templateUrl: './realization.component.html',
  styleUrls: ['./realization.component.scss']
})
export class RealizationComponent implements OnInit {
  realization = {
    title: '',
    id: '',
    imagePath: '',
    longTitle: '',
    mainImage: '',
    description: '',
    category: ''
  };
  realizationList: any = new Array({});
  categoryPath: string;
  mainImage: string;
  multiImage: string;
  constructor(
    private firebaseService: FirebaseService,
    private router: Router
  ) {}

  ngOnInit() {
    let paths = [
      'web-design',
      'ilustracje-modele',
      'projekty-poligraficzne',
      'identyfikacja-wizualna'
    ];
    for (let path of paths) {
      this.firebaseService.getRealization(path).subscribe(realization => {
        for (let single of realization) {
          this.realizationList.push(single);
        }
      });
    }
  }

  addRealization(form) {
    this.firebaseService.addRealization(this.realization, this.categoryPath);
    form.reset();
  }
  categoryName(event) {
    this.categoryPath = event.value;
  }
  getMainImage(event) {
    this.mainImage = event.target.files[0];
    this.firebaseService.uploadRealizationMainImage(this.mainImage);
  }

  deleteRealization(event, item, mainUrl) {
    this.firebaseService.deleteRealization(item, mainUrl);
  }
}
