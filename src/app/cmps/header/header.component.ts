import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
  @Output() onSelectPage = new EventEmitter<string>()
  constructor() { }

  ngOnInit(): void {
  }

}
