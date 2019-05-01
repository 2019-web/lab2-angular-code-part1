import { Component, OnInit, ContentChild } from '@angular/core';
import {BobComponent} from '../bob/bob.component';

@Component({
  selector: 'app-parents',
  templateUrl: './parents.component.html',
  styleUrls: ['./parents.component.css']
})
export class ParentsComponent implements OnInit {

  @ContentChild(BobComponent) bob:BobComponent;
  
  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit() {
    console.log(this.bob);
  } 

}
