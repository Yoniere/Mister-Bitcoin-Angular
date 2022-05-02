import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Contact } from '../models/contact.model';
import { ContactService } from './contact.service';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactResolverService implements Resolve<Promise<Contact>> {

  constructor(private contactService: ContactService) { }

  async resolve(route: ActivatedRouteSnapshot) {
    const { id } = route.params
    const contact = await lastValueFrom(this.contactService.getContactById(id))
    return contact
  }

}
