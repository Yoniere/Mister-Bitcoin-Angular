import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Axios from 'axios';
import { delay, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BitcoinService {

  constructor(private http: HttpClient) { }

  getRate() {
    // var rate = this.load('rate')
    // if (!rate) {
      const rate = this.http.get(`https://blockchain.info/tobtc?currency=USD&value=1`);
      // this.store('rate', rate)
    // }
    return rate

    // var rate = this.load('rate')
    // if (!rate) {
    //   rate = await Axios('https://https://blockchain.info/tobtc?currency=USD&value=1')
    //   this.store('rate', rate)
    // }
    // return rate.data
  }

  public getMarketPrice() {
    return this.http
      .get<{ values: [{ x; y }] }>(
        'https://api.blockchain.info/charts/avg-block-size?timespan=5months&format=json&cors=true'
      )
      .pipe(
        map((res) => {
          const vals = res.values.map((item) => {
            return {
              name: new Date(item.x * 1000).toLocaleDateString('en-US'),
              value: item.y,
            };
          });
          return vals.slice(0, 20);
        })
      );
  }
  
  public getTradeVolume() {
    return this.http
      .get<{ values: [{ x; y }] }>(
        '  https://api.blockchain.info/charts/trade-volume?timespan=5months&format=json&cors=true'
      )
      .pipe(
        map((res) => {
          const vals = res.values.map((item) => {
            return {
              name: new Date(item.x * 1000).toLocaleDateString('en-US'),
              value: item.y,
            };
          });
          return vals.slice(0, 20);
        })
      );
  }




  // getMarketPrice() {
    // var marketPrice = this.load('marketPrice')
    // if (!marketPrice) {
      // const marketPrice = this.http.get(`https://api.blockchain.info/charts/market-price?timespan=5months&format=json&cors=true`);
      // this.store('rate', marketPrice)
    // }
    // return marketPrice
      //   var price = store('price')
      //   if (!price || price === null) {

      //     price = await Axios('https://api.blockchain.info/charts/market-price?timespan=5months&format=json&cors=true')
      //     store('price', price)
      //   }
      //   // console.log(price)
      //   return price.data.values
  // }
  store(key, value) {
    localStorage[key] = JSON.stringify(value);
  }

  load(key, defaultValue = null) {
    var value = localStorage[key] || defaultValue;
    return JSON.parse(value);
  }

}



