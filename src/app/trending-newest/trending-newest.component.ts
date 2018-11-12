import { Component, OnInit } from '@angular/core';
import {SHOPS} from '../../trend_newest_dummy_classes/shops_list';
@Component({
  selector: 'app-trending-newest',
  templateUrl: './trending-newest.component.html',
  styleUrls: ['./trending-newest.component.css']
})
export class TrendingNewestComponent implements OnInit {
  shops = SHOPS;

  constructor() { }

  ngOnInit() {
  }

}
