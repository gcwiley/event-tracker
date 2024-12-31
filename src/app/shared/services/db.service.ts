import { Injectable, isDevMode } from '@angular/core';
import { RxDatabase, addRxPlugin, createRxDatabase } from 'rxdb';
import { RxDBAttachmentsPlugin } from 'rxdb/plugins/attachments';
import { RxDBDevModePlugin } from 'rxdb/plugins/dev-mode';
import { getRxStorageDexie } from 'rxdb/plugins/storage-dexie';
import { RxDBUpdatePlugin } from 'rxdb/plugins/update';
import { BehaviorSubject } from 'rxjs';

// import the post schema
import { dbSchema } from '../schemas/schema'

// add a plugin to the library
async function loadRxDBPlugin(): Promise<void> {
  // comment
  addRxPlugin(RxDBAttachmentsPlugin);
  // comment
  addRxPlugin(RxDBUpdatePlugin);

  // this code checks if the app is in development.
  // if it is, it activates special tools for debugging and development within the database system
  // if it is not, it skips these tools
  if (isDevMode()) {
    addRxPlugin(RxDBDevModePlugin)
  }
}

// runs the function
loadRxDBPlugin();

@Injectable({
  providedIn: 'root',
})
export class RxdbProvider {
  private rxDatabase!: RxDatabase;
  private dataBaseReadySubj = new BehaviorSubject<boolean>(false);
  // find out what this does
  public dataBaseReady$ = this.dataBaseReadySubj.asObservable();

  // gets the name of the collection within the database
  public getDatabaseCollection(collectionName: string) {
    // error checking code
    if (!this.rxDatabase) {
      throw new Error(
        'Database is not initialized. Please make sure the database is initialized before getting the collection'
      );
    }
    // if no error, returns the name of the collection
    return this.rxDatabase[collectionName];
  }

  // sets up the database
  public async initDB(databaseName: string): Promise<RxDatabase> {
    // error checking code
    if (
      this.rxDatabase &&
      this.rxDatabase.name === databaseName &&
      !this.rxDatabase.destroyed
    ) {
      return this.rxDatabase;
    }

    // if no errors, create the database
    this.rxDatabase = await createRxDatabase({
      name: databaseName,
      // comment
      storage: getRxStorageDexie(),
      // comment
      password: 'myLongAndStupidPassword',
    });

    // adds the collection to database
    await this.rxDatabase.addCollections({
      posts: {
        schema: dbSchema,
      },
    });

    this.dataBaseReadySubj.next(true);

    // returns the database istance
    return this.rxDatabase;
  }
}
