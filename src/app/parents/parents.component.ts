import { Component, OnInit, ViewChild } from '@angular/core';
import {AliceComponent} from '../alice/alice.component';

@Component({
  selector: 'app-parents',
  templateUrl: './parents.component.html',
  styleUrls: ['./parents.component.css']
})
export class ParentsComponent implements OnInit {

  @ViewChild(AliceComponent) alice:AliceComponent;
  
  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit() {
    console.log(this.alice);
  } 

}
