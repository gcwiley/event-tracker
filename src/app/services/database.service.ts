import { Injectable } from '@angular/core';

// comment
import { RxDatabase, createRxDatabase } from 'rxdb';

// use the dexie.js RxStorage that stores data in IndexDB
import { getRxStorageDexie } from 'rxdb/plugins/dexie';

// import the event schema
import { eventSchmea } from '../../schemas/event.schema';

// import the task schema
import { taskSchema } from '../../schemas/task.schema';

async function createTest(): Promise<RxDatabase> {
   const test = await createRxDatabase({
      name: 'test',
      storage: getRxStorageDexie(),
      password: '1234',
      multiInstance: true,
      eventReduce: true,
      ignoreDuplicate: true,
   });

   await test.addCollections({
      events: {
         schema: eventSchmea, // fix spelling!!
      },
      tasks: {
         schema: taskSchema, // fix spelling!!
      }
   })

   return test
}

@Injectable({ providedIn: 'root' })
export class DatabaseService {
   // create the events database
   async createDatabase(): Promise<RxDatabase> {
      // the database is created by the asynchronous '.createRxDatabase()' function of the core RxDB module.
      const database = await createRxDatabase({
         // the name of the database
         name: 'event-tracker-database',
         // use the dexie.js RxStorage that stores data in IndexDB
         storage: getRxStorageDexie(),
         // set the password
         password: 'mypassword33',
         // comment
         multiInstance: true,
         // comment
         eventReduce: true,
         // comment
         ignoreDuplicate: true,
      });

      // create an collection with the event schema
      await database.addCollections({
         events: {
            // comment here
            schema: eventSchmea,
         },
         tasks: {
            schema: taskSchema,
         },
      });

      return database;
   }
}

get
