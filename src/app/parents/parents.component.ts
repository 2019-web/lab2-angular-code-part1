import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parents',
  templateUrl: './parents.component.html',
  styleUrls: ['./parents.component.css']
})
export class ParentsComponent implements OnInit {

  @ContentChild(AliceComponent) Xiaohong:XiaohongComponent;
  
  constructor() { }

  ngOnInit() {
  }

}
