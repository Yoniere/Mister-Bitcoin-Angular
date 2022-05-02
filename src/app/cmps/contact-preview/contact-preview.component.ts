import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Contact } from 'src/app/models/contact.model';
@Component({
  selector: 'contact-preview',
  templateUrl: './contact-preview.component.html',
  styleUrls: ['./contact-preview.component.scss']
})
export class ContactPreviewComponent implements OnInit {

  constructor() { }

  @Input() contact: Contact
  @Output('remove') onRemove = new EventEmitter<string>()
  
  ngOnInit(): void {
  }

  onRemoveContact(ev: MouseEvent, contactId: string) {
    ev.stopPropagation()
    this.onRemove.emit(contactId)
    console.log(contactId)
  }
}
