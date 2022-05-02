import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/services/contact.service';
import { Contact } from 'src/app/models/contact.model';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'contacts-page',
  templateUrl: './contacts-page.component.html',
  styleUrls: ['./contacts-page.component.scss']
})
export class ContactsPageComponent implements OnInit {

  constructor(private contactService: ContactService) { }
  contacts: Contact[]
  contacts$: Observable<Contact[]>
  selectedContactId: string

  ngOnInit(): void {
    this.contactService.loadContacts()
    this.contacts$ = this.contactService.contacts$
    console.log(this.contacts$)
  }

  onRemoveContact(contactId:string) {
    console.log(contactId)
    this.contactService.deleteContact(contactId)
    
  }

}
