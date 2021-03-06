import { Component, OnInit, Input } from '@angular/core';
import { Contact } from 'src/app/models/contact.model';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'moves-list',
  templateUrl: './moves-list.component.html',
  styleUrls: ['./moves-list.component.scss']
})
export class MovesListComponent implements OnInit {

  @Input() contact: Contact
  @Input() user: User

  constructor() { }

  ngOnInit(): void {
  }

  getMoves() {
    const movesToContcat = this.user.moves.filter(move => this.contact._id === move.toId)
    return movesToContcat
  }

}
