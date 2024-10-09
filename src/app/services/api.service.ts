import { Injectable } from '@angular/core';
import { Observable, combineLatest, from, map } from 'rxjs';

// comment
import { v4 as uuidv4 } from 'uuid';

// comment
import { EventDto } from '../types/event.dto';

// import the database service
import { RxdbProvider } from './db.service';

// comment
interface EventListInput {
   page: number;
   limit: number;
   sort: keyof EventDto;
   order: 'asc' | 'desc';
   query: string;
}

@Injectable({
   providedIn: 'root',
})
export class ApiService {
   // comment here
   constructor(private rxdbProvider: RxdbProvider) {}

   // get the name of the collection
   private get collection() {
      return this.rxdbProvider.getDatabaseCollection('events');
   }

   // create a new event within the database
   public create(body: Partial<T>) {
      return from(
         this.collection.insert({
            id: uuidv4(),
            ...body,
         })
      ).pipe(map((doc) => doc._data));
   }

   // updates an event
   public patch(id: string, body: Partial<T>) {
      return from(
         // find document by id and updates document
         this.collection.findOne({ selector: { id } }).update({
            $set: { id, ...body },
         })
      ).pipe(map((doc) => ({ ...doc._data, ...body })));
   }
}
