import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from 'src/app/models/contact.model';
import { ContactService } from 'src/app/services/contact.service';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'contact-details-page',
  templateUrl: './contact-details-page.component.html',
  styleUrls: ['./contact-details-page.component.scss']
})
export class ContactDetailsPageComponent implements OnInit {

  constructor(
    private contactService: ContactService,
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService
  ) { }

  contact: Contact
  user: User

  async ngOnInit() {
    this.route.data.subscribe(data => {
      this.contact = data['contact']
      this.user = this.userService.getUser()
    })
  }

  onTransferToContact(transferAmount) {
    this.contactService.transferCoinsToContact(this.contact, transferAmount)
    this.router.navigateByUrl('/contacts');
  }

}
