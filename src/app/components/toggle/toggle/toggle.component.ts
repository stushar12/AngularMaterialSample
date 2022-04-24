import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.css']
})
export class ToggleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  red() {
    var btn1 = document.getElementById('btn1')!;
    var btn2 = document.getElementById('btn2')!;
    var btn3 = document.getElementById('btn3')!;
    btn1.style.backgroundColor = 'red'
    btn2.style.backgroundColor = 'white'
    btn3.style.backgroundColor = 'white'
  }
  green() {
    var btn1 = document.getElementById('btn1')!;
    var btn2 = document.getElementById('btn2')!;
    var btn3 = document.getElementById('btn3')!;
    btn1.style.backgroundColor = 'white'
    btn2.style.backgroundColor = 'lightgreen'
    btn3.style.backgroundColor = 'white'
  }
  blue() {
    var btn1 = document.getElementById('btn1')!;
    var btn2 = document.getElementById('btn2')!;
    var btn3 = document.getElementById('btn3')!;
    btn1.style.backgroundColor = 'white'
    btn2.style.backgroundColor = 'white'
    btn3.style.backgroundColor = 'lightblue'
  }

}
