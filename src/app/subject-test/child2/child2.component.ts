import { Component, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {
  msg : string;

  @Input()
  noficator : Subject<string>;
  constructor() { }

  ngOnInit() {
    this.noficator.subscribe((val)=>{
      this.msg = `Child2Component : ${val}`;
    });
  }

}
