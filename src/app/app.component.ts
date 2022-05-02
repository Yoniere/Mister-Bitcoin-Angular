import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'mister-Bitcoin';
   currPage: string = 't'
  toPage(pageName:string){
    console.log('page name', pageName);
    
    this.currPage = pageName
  }
  ngOnInit(): void {

  }
}
