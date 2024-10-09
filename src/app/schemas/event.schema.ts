// define a schema for the 'events' collection
export const eventSchema = {
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
         maxLength: 100,
      },
      category: {
         type: 'string',
      },
      countryLocation: {
         type: 'string',
      },
      latitude: {
         type: 'string'
      },
      longitude: {
         type: 'string',
      },
      summary: {
         type: 'string',
      },
      assessment: {
         type: 'string',
      },
      date: {
         type: 'string',
         format: 'date-time',
      },
      timestamp: {
         type: 'string',
         format: 'date-time',
      },
   },
   required: ['id', 'title', 'category', 'countryOfOrgin', 'summary', 'assessment', 'date', 'timestamp'],
};
