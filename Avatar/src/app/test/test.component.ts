import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  test="qwerty"
  myImg="assets/img1.jpg";
  myImg2="assets/img1.jpg";
  myvideo="assets/video.mp4 ";



  getval(){
    return("qwerty");
  }
num=100;
  constructor() { }

  counter=0;
      counterless=10;
    increment() {
      this.counter++;
    }
    decrement() {
      this.counterless--;
    }
  ngOnInit(): void {
  }
  getName(name:any){}

}
