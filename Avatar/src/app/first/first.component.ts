import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

Avatar="assets/first naming.png";
videoSource="assets/video.mp4";

  constructor() { }

  ngOnInit(): void {
  }

}
