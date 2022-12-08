import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  // myImg="assets/img1.jpg";
  Avatar="assets/first naming.png";
  
  constructor() { }

  ngOnInit(): void {
  }

}
