import { RxJsonSchema, toTypedRxJsonSchema, ExtractDocumentTypeFromTypedRxJsonSchema } from 'rxdb';

// define a schedma for the 'tasks' collection
export const TASK_SCHEMA_LITERAL = {
   title: 'task schema',
   description: 'tasks schema',
   version: 0,
   keyCompression: false,
   primaryKey: 'id',
   type: 'object',
   properties: {
      id: {
         type: 'string',
         maxLength: 100,
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
   },
   required: ['id', 'name', 'description', 'completed'],
} as const;

const schemaTyped = toTypedRxJsonSchema(TASK_SCHEMA_LITERAL);
export type RxTaskDocumentType = ExtractDocumentTypeFromTypedRxJsonSchema<typeof schemaTyped>;

export const TASK_SCHEMA: RxJsonSchema<RxTaskDocumentType> = TASK_SCHEMA_LITERAL

