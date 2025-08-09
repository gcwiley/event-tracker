import { RxJsonSchema } from 'rxdb';

// event schema
import { Event } from '../types/event.interface';

// define the event schema
export const eventSchema: RxJsonSchema<Event> = {
   title: 'event schema',
   description: 'update',
   version: 0,
   type: 'object',
   primaryKey: 'id',
   properties: {
      id: {
         type: 'string',
         maxLength: 100,
      },
      summary: {
         type: 'string',
      },
      createdAt: {
         type: 'string',
         format: 'date-time',
      },
      updatedAt: {
         type: 'string',
         format: 'date-time'
      }
   },
};
