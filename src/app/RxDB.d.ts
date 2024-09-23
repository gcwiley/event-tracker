// custom typing so typescript knows about the schema-fields

// comment here
import type { RxDocument, RxCollection, RxDatabase } from 'rxdb';

// import the event schema
import { RxEventDocumentType } from '../schemas/event.schema';

// comment here
import { Signal } from '@angular/core';

// ORM methods
type RxEventDocMethods = {
   hpPercent(): number;
};

export type RxEventDocument = RxDocument<RxEventDocumentType, RxEventDocMethods>;

export type RxEventCollection = RxCollection<RxEventDocumentType, RxEventDocMethods, unknown, unknown, Signal<unknown>>;

export type RxEventsCollection = {
   event: RxEventCollection;
};

export type RxEventsDatabase = RxDatabase<RxEventsCollections, unknown, unknown, Signal<unknown>>;
