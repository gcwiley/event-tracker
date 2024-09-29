// define a schedma for the 'tasks' collection
export const taskSchema = {
   title: 'task schema',
   description: 'tasks schema',
   version: 0,
   keyCompression: false,
   primaryKey: 'id',
   type: 'object',
   properties: {
      id: {
         type: 'string',
         maxLength: 100, // the primary key must have a set maxLength
      },
      name: {
         type: 'string',
      },
      description: {
         type: 'string',
      },
      completed: {
         type: 'boolean',
      },
      timestamp: {
         type: 'string',
         format: 'date-time',
      },
   },
   required: ['id', 'name', 'description', 'completed', 'timestamp'],
};
