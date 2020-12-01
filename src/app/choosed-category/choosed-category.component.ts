import { Component, OnInit, Inject } from '@angular/core';
import { FirebaseService } from 'src/app/firebase.service';
import { CategoryItem } from 'src/app/models/CategoryItem';
import { ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-choosed-category',
  templateUrl: './choosed-category.component.html',
  styleUrls: ['./choosed-category.component.scss']
})
export class ChoosedCategoryComponent implements OnInit {
  categoryName: string;
  category: CategoryItem[];
  name: string;
  constructor(
    public firebaseService: FirebaseService,
    activatedRoute: ActivatedRoute,
    public dialog: MatDialog
  ) {
    activatedRoute.params.subscribe(params => {
      this.categoryName = params['id'];
    });
  }

  openDialog(event): void {
    const i = event.target.getAttribute('data-index');
    const dialogRef = this.dialog.open(SingleComponent, {
      height: '90%',
      width: '90%',
      maxWidth: '90vw',
      data: { data: this.category, i: i }
    });

    dialogRef.afterClosed().subscribe;
  }
  ngOnInit() {
    this.firebaseService.getSingleCat(this.categoryName).subscribe(category => {
      this.category = category;

      if (this.category[0].category == 'web-design') {
        this.name = 'web design i reklama';
      }
      if (this.category[0].category == 'ilustracje-modele') {
        this.name = 'ilustracje i modele 3d';
      }
      if (this.category[0].category == 'projekty-poligraficzne') {
        this.name = 'projekty poligraficzne';
      }
      if (this.category[0].category == 'identyfikacja-wizualna') {
        this.name = 'identyfikacja wizualna';
      }
    });
  }
}

@Component({
  selector: 'single-component',
  templateUrl: 'single.component.html'
})
export class SingleComponent {
  constructor(
    public dialogRef: MatDialogRef<SingleComponent>,
    @Inject(MAT_DIALOG_DATA) public data: CategoryItem
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
