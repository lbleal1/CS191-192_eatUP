import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop-list-item',
  templateUrl: './shop-list-item.component.html',
  styleUrls: ['./shop-list-item.component.css']
})
export class ShopListItemComponent implements OnInit {
  @Input() name: string;
  @Input() score: number;
  @Input() street: string;
  @Input() shopImage: any;

  ngOnInit() {}
}
