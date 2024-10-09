import { Injectable, isDevMode } from '@angular/core';
import { RxDatabase, RxJsonSchema, addRxPlugin, createRxDatabase } from 'rxdb';
import { RxDBAttachmentsPlugin } from 'rxdb/plugins/attachments';
import { RxDBDevModePlugin } from 'rxdb/plugins/dev-mode';
import { getRxStorageDexie } from 'rxdb/plugins/storage-dexie';
import { RxDBUpdatePlugin } from 'rxdb/plugins/update';
import { BehaviorSubject } from 'rxjs';

// define the event schema
const dbSchema: RxJsonSchema<any> | any = {
   title: 'events schema',
   version: 0,
   type: 'object',
   primaryKey: 'id',
   properties: {
      id: {
         type: 'string',
         primary: true,
         maxLength: 100,
      },
      title: {
         type: 'string',
      },
      body: {
         type: 'string',
      },
   },
};

// add a plugin to the library
async function loadRxDBPlugin(): Promise<void> {
   // comment
   addRxPlugin(RxDBAttachmentsPlugin);
   // comment
   addRxPlugin(RxDBUpdatePlugin);

   // this code checks if the app is in development
   // if it is, it activate special tools for debugging and development within the database system
   // if it is not, it skips these tools
   if (isDevMode()) {
      addRxPlugin(RxDBDevModePlugin);
   }
}

// runs the function
loadRxDBPlugin();

@Injectable({
   providedIn: 'root',
})
export class RxdbProvider {
   private rxDatabase!: RxDatabase;
   private databaseReadySubj = new BehaviorSubject<boolean>(false);
   // find out what this does
   public databaseReady$ = this.databaseReadySubj.asObservable();

   //gets the name of the collection within the database
   public getDatabaseCollection(collectionName: string) {
      // error checking code
      if (!this.rxDatabase) {
         throw new Error('Database is not initialized. Please make sure the database is initialized before getting the collection');
      }
      // if no error, return the name of the collection
      return this.rxDatabase[collectionName];
   }

   // sets the database
   public async initDB(databaseName: string): Promise<RxDatabase> {
      // error checking code
      if (this.rxDatabase && this.rxDatabase.name === databaseName && !this.rxDatabase.destroyed) {
         return this.rxDatabase;
      }

      // if no errors, create the database
      this.rxDatabase = await createRxDatabase({
         name: databaseName,
         storage: getRxStorageDexie(),
         password: 'myLongAndStupidPassword',
      });

      // adds the collection to database
      await this.rxDatabase.addCollections({
         posts: {
            schema: dbSchema,
         },
      });

      this.databaseReadySubj.next(true);

      // returns the database instance
      return this.rxDatabase;
   }
}
