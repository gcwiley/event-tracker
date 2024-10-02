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
   async getEvents(): Promise<unknown> {
      try {
         // call the 'createDatabase()' method of the databaseService to get the database instance
         const db = await this.databaseService.createDatabase(); // get the database instance
         const allEvents = db['events'].find({
            selector: {},
            // sort the results by country
            sort: [{ country: 'asc' }],
         });
         // return all events
         return allEvents;
      } catch (error) {
         console.log('Error adding event:', error);
         return new Error('There was an error');
      }
   }

   // GET: recently events in database - 10 most recent
   async getRecentEvents(): Promise<unknown> {
      try {
         const db = await this.databaseService.createDatabase(); // get the database instance
         const recentEvents = db['events'].find({
            selector: {},
            sort: [{ createdAt: 'desc' }],
            limit: 10,
         });
         return recentEvents;
      } catch (error) {
         console.log('Error adding event:', error);
         return new Error('There was an error');
      }
   }

   // this asynchronous function takes a newEvent object as input.
   async addEvent(newEvent: object): Promise<unknown> {
      try {
         // get the database instance
         const db = await this.databaseService.createDatabase();
         // comment
         const response = await db['events'].insert(newEvent);
         return response;
      } catch (error) {
         console.error('Error adding event:', error);
         return new Error('There was an error');
      }
   }

   // comment
   async updateEvent(): Promise<unknown> {
      try {
         const db = await this.databaseService.createDatabase();
      } catch (error) {}
   }

   // comment
   async deleteEvent(): Promise<unknown> {
      try {
         const db = await this.databaseService.createDatabase();
      } catch (error) {}
   }
}
