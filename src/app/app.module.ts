import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ObservableTestComponent } from './observable-test/observable-test.component';
import { SubjectExampleComponent } from './subject-example/subject-example.component';
import { SubjectTestComponent } from './subject-test/subject-test.component';
import { Child1Component } from './subject-test/child1/child1.component';
import { Child2Component } from './subject-test/child2/child2.component';


@NgModule({
  declarations: [
    AppComponent,
    ObservableTestComponent,
    SubjectExampleComponent,
    SubjectTestComponent,
    Child1Component,
    Child2Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
