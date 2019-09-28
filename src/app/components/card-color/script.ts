import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'card-color',
  templateUrl: './index.html',
  styleUrls: ['./style.css']
})
export class CardColorComponent implements OnInit {

  @Input()
  set data(list) {
    if (list) {
      console.log('lista', list);
      let i = '';
      let data = {};
      for (i in list) {
        this.color[i] = list[i];
      }
      console.log('data', this.color);
    }
  }

  color: Array<object> = [];

  constructor() {

  }
  ngOnInit() {

  }
}
