import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'card-color',
  templateUrl: './index.html',
  styleUrls: ['./style.css']
})
export class CardColorComponent implements OnInit {

  @Input()
  set data(list) {
    if (list) {
      let i = '';
      let data = {};
      for (i in list) {
        this.color[i] = list[i];
      }
    }
  }

  @Output() colorData = new EventEmitter();

  color: Array<object> = [];

  constructor() {

  }
  ngOnInit() {

  }

  copyValue(event) {
    this.colorData.emit(event);
  }
}
