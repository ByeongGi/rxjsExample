import { Component, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {
  msg :string;

  @Input()
  noficator : Subject<string>;
  constructor() { } 

  ngOnInit() {
    this.noficator.subscribe((val)=>{
      console.log(val);
      this.msg = `Child1Component : ${val}`;
    });
  }

}
