import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, FormControlDirective } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  shops: any;
  shouldShowContent = false;

  ratingForm: FormGroup;

  constructor(private http: HttpClient, private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.getShops();

    this.ratingForm = this.formBuilder.group({
      ratingScore: new FormControl(),
      ratingReview: new FormControl()
    });
  }

  getShops() {

    this.shops = [{
      name: 'AB',
      score: 5,
      address: 'asdasd'
    }, {
      name: 'Ab',
      score: 3,
      address: 'asdasdaaaa'
    }, {
      name: 'Ac',
      score: 4,
      address: 'asdasdbbbbb'
    }];
    // this.http.get('http://localhost:3000/shops/').subscribe((dbShops) => {
    //   console.log(dbShops);
    //   this.shops = dbShops;
    // });
  }

  addRatingForShop(shopId: string) {
  //   this.http.post(`http://localhost:3000/shops/${shopId}`, {
  //     rating: {
  //       score: ratingScore,
  //       review: ratingReview
  //     }
  //   }).subscribe((dbShops) => {
  //     console.log(dbShops);
  //     this.shops = dbShops;
  //   });
  // }

    console.log('score:' + this.ratingForm.value.ratingScore);
    console.log('review:' + this.ratingForm.value.ratingReview);
  }
}
