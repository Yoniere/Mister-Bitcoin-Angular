import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { Contact } from 'src/app/models/contact.model';
@Component({
  selector: 'contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {

  constructor() { }
  @Input() contacts: Contact[]
  @Output('remove') onRemove= new EventEmitter<string>()
  ngOnInit(): void {
  }

}
