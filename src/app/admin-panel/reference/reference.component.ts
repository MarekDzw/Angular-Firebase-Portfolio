import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../firebase.service';
import { ReferenceItem } from '../../models/NewReference';

@Component({
  selector: 'app-reference',
  templateUrl: './reference.component.html',
  styleUrls: ['./reference.component.scss']
})
export class ReferenceComponent implements OnInit {
  reference = {
    name: '',
    text: '',
    imagePath: '',
    id: '',
    image: '',
  }
  file;
  panelOpenState = false;
  referenceList: ReferenceItem[];
  constructor(private firebaseService: FirebaseService) { }
  ngOnInit() {
    this.firebaseService.getReference().subscribe(reference => {
      this.referenceList = reference;
    });
  }


  addReference(form) {
    this.firebaseService.addReference(this.reference)
    form.reset()
  }

  uploadImage(event) {
    this.file = event.target.files[0];
    const filePath = 'reference/' + Math.random() * 5 + this.file.name;
    this.firebaseService.uploadImage(filePath, this.file);
  }

  deleteReference(event, item, image) {
    console.log(image)
    this.firebaseService.deleteReference(item, image)
  }

}
