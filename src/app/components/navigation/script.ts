import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './index.html',
  styleUrls: ['./style.css']
})
export class NavigationComponent implements OnInit {

  @Output() before = new EventEmitter<any>();
  @Output() after = new EventEmitter<any>();
  @Input() minPage: boolean = true;
  @Input() maxPage: boolean = false;

  constructor() {

  }
  ngOnInit() {

  }

  prev() {
    let data = {
      page: '1'
    };
    this.before.emit(data);
  }

  next() {
    let data = {
      page: '2'
    };
    this.after.emit(data);
  }
}
