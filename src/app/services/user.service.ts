import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { storageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  STORAGE_KEY = 'user'

  getUser(): User {
    return storageService.load('user')
  }

  signup(name: string) {
    // var user = storageService.load(STORAGE_KEY)
    // if (!user || user === null) {
    const user: User = {
      name,
      coins: 100,
      moves: []
    }
    storageService.store(this.STORAGE_KEY, user)
    // }
    return user
  }
}
