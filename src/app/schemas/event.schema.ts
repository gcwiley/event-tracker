// define a schema for the 'events' collection
export const eventSchmea = {
   title: 'event schema',
   description: 'events schema',
   version: 0,
   keyCompression: false,
   primaryKey: 'id',
   type: 'object',
   properties: {
      id: {
         type: 'string',
         maxLength: 100,
      },
      title: {
         type: 'string',
      },
      category: {
         type: 'string',
      },
      country: {
         type: 'boolean',
      },
      summary: {
         type: 'string',
      },
   },
   required: ['id', 'title', 'category', 'country', 'summary'],
};
