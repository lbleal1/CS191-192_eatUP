import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import {SHOPS} from '../../../../trend_newest_dummy_classes/shops_list';
@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TrendingComponent implements OnInit {
  shops = SHOPS;
  constructor() { }

  ngOnInit() {
  }

}
