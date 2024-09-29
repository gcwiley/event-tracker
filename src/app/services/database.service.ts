import { Injectable } from '@angular/core';

// comment
import { RxDatabase, createRxDatabase } from 'rxdb';

// use the dexie.js RxStorage that stores data in IndexDB
import { getRxStorageDexie } from 'rxdb/plugins/dexie';

// import the event schema
import { eventSchema } from '../schemas/event.schema';

// import the task schema
import { taskSchema } from '../schemas/task.schema';

// create the database and set up collections
@Injectable({ providedIn: 'root' })
export class DatabaseService {
   // create the event tracker database
   async createDatabase(): Promise<RxDatabase> {
      // the database is created by the asynchronous 'createRxDatabase()' function of the core RxDB module
      const database = await createRxDatabase({
         // the name of the database
         name: 'event-tracker-database',
         // use the dexie.js RxStorage that stores data in IndexDB
         storage: getRxStorageDexie(),
         // set the password
         password: 'mypassword1033',
         // comment
         multiInstance: true,
         // comment
         eventReduce: true,
         // comment
         ignoreDuplicate: true,
      });

      // create an collection with the event and tracker schema
      await database.addCollections({
         events: {
            // comment here
            schema: eventSchema,
         },
         tasks: {
            schema: taskSchema,
         },
      });

      return database;
   }
}
