import { Component, OnInit } from '@angular/core';
import { BitcoinService } from 'src/app/services/bitcoin.service';

@Component({
  selector: 'statistics-page',
  templateUrl: './statistics-page.component.html',
  styleUrls: ['./statistics-page.component.scss']
})
export class StatisticsPageComponent implements OnInit {

  constructor(private bitcoinService:BitcoinService) { }
  marketPrice:[]
  tradeVolume:[]

  async ngOnInit() {
     await this.bitcoinService.getMarketPrice().subscribe((values: any) => {this.marketPrice=values
    });
    await this.bitcoinService.getTradeVolume().subscribe((values: any) => {this.tradeVolume=values
    });
  }

}
