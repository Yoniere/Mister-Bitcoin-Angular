import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from 'src/app/models/contact.model';
import { ContactService } from 'src/app/services/contact.service';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  constructor(
    private contactService: ContactService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  contact: Contact

  ngOnInit(): void {
    this.route.data.subscribe(async ({ contact }) => {
      this.contact = contact ? contact : this.contactService.getEmptyContact() as Contact
      console.log(this.contact)
    })
  }

  async onSaveContact() {
    await this.contactService.saveContact({ ...this.contact });
    this.router.navigateByUrl('');
    console.log(this.contact)
  }


}
