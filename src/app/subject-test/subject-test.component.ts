import { Component, OnInit , EventEmitter } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-subject-test',
  templateUrl: './subject-test.component.html',
  styleUrls: ['./subject-test.component.css']
})
export class SubjectTestComponent implements OnInit {

  // Subject 는 많은 Observers에게 멀티 캐스트 하도록 되어 있는 Observerble의 특별한 타입입니다.
  // 순수한  Observable은 uni 캐스트하지만(각각의 구독한 Observer는 독립적인 실행 영역을 갖는다)
  // 반면에 Subject는 멀티 캐스트 한다.
  // Subject는 모든 Observer을 내부적으로 등록하고, 이 옵저버에게 데이터에게 데이터를 전달한다.
  // 그리고 데이터를 Observer처럼 데이터를 발행한다.   
  noficator : Subject<number> = new Subject<number>();
  

  constructor() { }

  ngOnInit() { }

}
