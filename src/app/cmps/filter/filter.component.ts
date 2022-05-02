import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/services/contact.service';
import { ContactFilter } from 'src/app/models/contact-filter.model';

@Component({
  selector: 'filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  constructor(private contactService:ContactService) { }
filterBy:ContactFilter

  ngOnInit(): void {
    this.contactService.filterBy$.subscribe(filterBy =>{
      this.filterBy=filterBy
    })
  }

  onChangeFilter() {
    this.contactService.loadContacts(this.filterBy)
}

}
