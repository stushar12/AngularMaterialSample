import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import {ajax} from 'rxjs/ajax';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'testApp';

  // userInput=""

  // receiveData(event: string)
  // {
  //   this.userInput=event
  // }

  ngOnInit(): void {
    
    // const observer = new Observable(obj => obj.next(Math.random()));

    // const subject = new Subject();

    // //1st subscriber
    // observer.subscribe(v => console.log("Observable: "+v));

    // //2nd subscriber
    // observer.subscribe(v => console.log("Observable: "+v));

     
    // //1st subscriber
    // subject.subscribe(v => console.log("Subject: "+v));

    // //2nd subscriber
    // subject.subscribe(v => console.log("Subject: "+v));

    // subject.next(Math.random());

    // const subject = new Subject();
    // const data = ajax('https://jsonplaceholder.typicode.com/users')

    // subject.subscribe(d => console.log(d));
    // subject.subscribe(d => console.log(d));
  
    // //subject.next(data);
    // data.subscribe(subject);
  }

}

