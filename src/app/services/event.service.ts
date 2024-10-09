import { Injectable } from '@angular/core';

// import the database service
import { DatabaseService } from './database.service';

import { RxDatabase, RxQuery, RxDocument, RxCollection } from 'rxdb';

// import the event interface
import { Event } from '../types/event.interface';
import { Observable } from 'rxjs';

@Injectable({
   providedIn: 'root',
})
export class EventService {
   // inject the database service
   constructor(private databaseService: DatabaseService) {}

   // CREATE NEW EVENT
   async createEvent(newEvent: Event): Promise<RxDatabase | unknown> {
      try {
         // call the createDatabase() method on the databaseService to get the database instance
         const db = await this.databaseService.createDatabase();
         // access the event collection and use the insert method to insert a new event into the event collection
         const response = db['events'].insert(newEvent);
         return response;
      } catch (error) {
         console.error('Error creating event:', error);
         return new Error('There was an error getting the event.');
      }
   }

   // GET ALL EVENTS
   async getAllEvents(): Promise<any | Event[]> {
      // call the 'createDatabase()' method of the databaseService to get the database instance
      const db = await this.databaseService.createDatabase();
      // access the event collection and uses the find() method to search event collections
      return db['events'].find({
         selector: {},
         // sort all found events by country
         sort: [{ country: 'desc' }],
      });
   }

   // GET EVENT BY ID - simplefy code
   async getEventById(id: string | null): Promise<any | Event> {
      try {
         // call the createDatabase() method on the databaseService to get the database instance
         const db = await this.databaseService.createDatabase();
         // access the event collection and use the findOne() method to find one event by id
         const event = db['events'].findOne({
            // use the event id as a selector
            selector: {
               id: id,
            },
         });
         // return the single event
         return event;
      } catch (error) {
         console.log('Error getting event', error);
         return new Error('There was an error getting the event.');
      }
   }

   // GET: recently events in database - 10 most recent
   async getRecentEvents(): Promise<any | Event[]> {
      // call the createDatabase() method on the databaseService to get the database instance
      const db = await this.databaseService.createDatabase();
      // access the event collection and use the insert find method to find recent events
      const recentEvents = db['events'].find({
         selector: {},
         // sort by date in descending order
         sort: [{ date: 'desc' }],
         // limit the results to 10
         limit: 10,
      }).exec()
      return recentEvents
   }

   // UPDATE EVENT
   async updateEvent(id: string, event: Event): Promise<RxDatabase | RxQuery | RxDocument | unknown> {
      try {
         // call the createDatabase() method on the databaseService to get the database instance
         const db = await this.databaseService.createDatabase();
         return db['events'].findOne({
            // use the event id as a selector
            selector: {
               id: id,
            },
         });
      } catch (error) {
         console.log('Error updating event', error);
         return new Error('Error updating event');
      }
   }

   // DELETE EVENT
   async deleteEvent(id: string): Promise<RxDatabase | RxQuery | unknown> {
      try {
         // call the createDatabase() method on the databaseService to get the database instance
         const db = await this.databaseService.createDatabase();
         // use rxdb 'findOne()' method to find the document by its ID and then call 'remove()' on the found document.
         return db['events']
            .findOne({
               // use the id as a selector
               selector: {
                  id: id,
               },
               // remove the event from the collection
            })
            .remove();
      } catch (error) {
         console.log('Unable to delete Event', error);
         return new Error('Unable to delete event');
      }
   }
}
