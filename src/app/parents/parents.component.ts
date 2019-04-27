import { Component, OnInit, ContentChild } from '@angular/core';
import {AliceComponent} from '../alice/alice.component';

@Component({
  selector: 'app-parents',
  templateUrl: './parents.component.html',
  styleUrls: ['./parents.component.css']
})
export class ParentsComponent implements OnInit {

  @ContentChild(AliceComponent) alice:AliceComponent;
  
  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit() {
    console.log(this.alice);
  } 

}
