import { Injectable } from '@angular/core';

// import the database service
import { DatabaseService } from './database.service';

@Injectable({
   providedIn: 'root',
})
export class TaskService {
   // inject the database service
   constructor(private databaseService: DatabaseService) {}

   // GET: all tasks from the database
   async getTasks(): Promise<any> {
      try {
         // call the 'createDatabase()' method to get the database instance
         const db = await this.databaseService.createDatabase(); // get the database instance
         const allTasks = db['tasks'].find({
            selector: {},
            // sort the results by timestamp
            sort: [{ timestamp: 'asc' }],
         });
         return allTasks;
      } catch (error) {
         console.log(error);
      }
   }
}
