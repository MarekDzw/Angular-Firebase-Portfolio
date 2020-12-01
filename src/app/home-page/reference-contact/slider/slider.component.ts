import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/firebase.service';
import { ReferenceItem } from 'src/app/models/NewReference';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  reference: ReferenceItem[]
  constructor(private firebaseService: FirebaseService) { }

  ngOnInit() {
    this.firebaseService.getReference().subscribe(reference => {
      this.reference = reference;
    });

  }

  slideConfig = {
    "infinite": true,
    "slidesToShow": 2,
    "slidesToScroll": 2,
    "autoplay": true,
    "autoplaySpeed": 2000,
    "arrows": false,
    "dots": true,
    'responsive': [{
      'breakpoint': 500,
      'settings': {
        'infinite': true,
        'slidesToShow': 1,
        'slidesToScroll': 1,
        'autoplay': true,
        'autoplaySpeed': 2000,
        'arrows': false,
        'dots': true,
      }
    },]
  }
}