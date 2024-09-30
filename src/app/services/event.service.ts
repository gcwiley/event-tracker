import { Injectable } from '@angular/core';

// import the database service
import { DatabaseService } from './database.service';

@Injectable({
   providedIn: 'root',
})
export class EventService {
   // inject the database service
   constructor(private databaseService: DatabaseService) {}

   // GET: all events from the database
   async getEvents(): Promise<any> {
      try {
         // call the 'createDatabase()' metod of the databaseService to get the database instance
         const db = await this.databaseService.createDatabase(); // get the database instance
         const allEvents = db['events'].find({
            selector: {},
            // sort the results country
            sort: [{ country: 'asc' }],
         });
         return allEvents;
      } catch (error) {
         console.log(error);
      }
   }

   // this asynchronous function takes a newEvent object as input.
   async addEvent(newEvent: object): Promise<any> {
      try {
         // get the database instance
         const db = await this.databaseService.createDatabase();
         // comment
         const response = await db['events'].insert(newEvent);
         console.log('Event added:', response);
      } catch (error) {
         console.error('Error adding event:', error);
         throw error;
      }
   }

   // GET: recently created events in database
   async getRecentlyCreatedEvents(): Promise<any> {
      try {
         const db = await this.databaseService.createDatabase();
         const recentEvents = db['events'].find({
            selector: {},
            sort: [{ country: 'asc' }],
         });
         return recentEvents;
      } catch (error) {
         console.log(error);
      }
   }
}
