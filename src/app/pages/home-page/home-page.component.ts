import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';
import { BitcoinService } from 'src/app/services/bitcoin.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  // @Input() myUser: User
  @Input() onUserSignup: User
  // Ani lo yodea ma ze....
  // Ten shemot yoter tovim
  // ya gever 
  // meMahar ein yoter metargelim capara........

  user: User
  rate: number
  bitCoinSubscription: Subscription
  marketPrice: object[]

  constructor(private userService: UserService,
    private bitcoinService: BitcoinService) { }

  ngOnInit() {
    // console.log('this.onUserSignup', this.myUser)
    this.user = this.userService.getUser();
    this.bitCoinSubscription = this.bitcoinService.getRate().subscribe((rate: any) => this.rate = +(1 / rate).toFixed(2));
  }

  func(user: User) {
    this.user = user
  }

  



}
