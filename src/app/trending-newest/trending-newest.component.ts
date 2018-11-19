import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
// import { Subscription } from 'rxjs';


// import { Shop } from '../../shops/shops.list';
import { HttpClient } from '@angular/common/http';
import { Shop } from '../shops/shops.model';
import { ShopsService } from '../shops/shops.service';

// import { Shop } from ''


@Component({
  selector: 'app-trending-newest',
  templateUrl: './trending-newest.component.html',
  styleUrls: ['./trending-newest.component.css']
})
export class TrendingNewestComponent implements OnInit {
  shops: Shop[] = [];

  constructor(private shopService: ShopsService) { }

  ngOnInit() {
    this.shopService.getShopsDisplay().subscribe((shops: Shop[]) => {
      this.shops = shops;
    });

    this.shopService.getShopById('002').subscribe((shop: Shop) => {
      console.log(shop)
    });
  }

  isShopOpen(shop: Shop): boolean {
    const opening = moment().hour(shop.hours.opening.hour).minute(shop.hours.opening.minute);
    const closing = moment().hour(shop.hours.closing.hour).minute(shop.hours.closing.minute);
    const currentDate = moment();

    const isOpenToday = shop.days_open.map(day => day.toLowerCase()).includes(currentDate.format('dddd').toLowerCase());
    
    const isOpenThisTime = currentDate.isSameOrAfter(opening) && currentDate.isSameOrBefore(closing);

    return isOpenToday && isOpenThisTime;
  }

}
