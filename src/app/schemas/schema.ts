import { RxJsonSchema } from 'rxdb';

// define the post schema
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const dbSchema: RxJsonSchema<any> | any = {
   title: 'posts schema',
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
      createdAt: {
         type: 'string',
         format: 'date-time',
      },
   },
};
