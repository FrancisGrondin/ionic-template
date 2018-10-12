import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable()
export class StorageProvider {

  constructor(private storage: Storage) { }

  public async set(key: string, data: any) {
    await this.storage.ready();
    await this.storage.set(key, data);
  }

  public async get<T>(key: string): Promise<T> {
    await this.storage.ready();
    const data: any = await this.storage.get(key);
    return data;
  }

}