import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-observable-test',
  templateUrl: './observable-test.component.html',
  styleUrls: ['./observable-test.component.css']
})
export class ObservableTestComponent implements OnInit , OnDestroy{
  
  // Subscriptio은 Observble에서 사용하고 반납할 자원을 의미한다.
  private subscription : Subscription;

  constructor() {}
  obsData : number;
  
  ngOnInit() {
    // Observable 생성한다.
    const obs = this.initObservable();
    // Observer를 구독한다.
    this.subscription = obs.subscribe(this.createObserver());
  }
  /**
   * Observable은 일종의 데이터 생산자이다.
   * Observable은 일정한 시간의 흐름에 따라서 데이터(이벤트, 값 등)를 스트림처럼 
   * 데이터를 방출하여, Observer들이 구독시에 데이터를 받도록한다. 
   * @returns {Observable<number>} 
   * @memberof ObservableTestComponent
   */
  initObservable() : Observable<number>{
    return Observable.create((obs)=>{
      let cnt = 1; 
      setInterval(()=>{ 
        obs.next(cnt++);
        if(cnt === 10 ) obs.complete();
      }, 1000);
    });
  }

  /**
   * Observer는  Observerble이 발행하는 데이터를 소비(구독)하는 주체이다. 
   * 아래와 같이 3가지의 CallBack 되는 함수를 가진다.  
   * @returns {Observer<number>} 
   * @memberof ObservableTestComponent
   */
  createObserver() : Observer<number>{
    return {
      next :(val)=> {
        // Observerble의 데이터 발행시에 콜백되는 함수
        console.log(val);
        this.obsData = val;
      },
      error :(err)=>{
        console.error(err);
      },
      complete : ()=> { 
        console.log('Observerble의 스트림 완료!');

      }
    };
  }


  ngOnDestroy(): void {
    this.subscription.unsubscribe(); 
  }

}
