import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Contact } from 'src/app/models/contact.model';
import { ContactService } from 'src/app/services/contact.service';
@Component({
  selector: 'transfer-fund',
  templateUrl: './transfer-fund.component.html',
  styleUrls: ['./transfer-fund.component.scss']
})
export class TransferFundComponent implements OnInit {

  transferAmount:number

  @Input() contact: Contact;
  @Output() onTransfer = new EventEmitter<number>()
  constructor(private contactService: ContactService) { }

  ngOnInit(): void {
  }

  onTransferToContact(ev:MouseEvent,transferAmount) {
    this.onTransfer.emit(transferAmount)
  }
}
