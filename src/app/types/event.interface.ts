// define the event interface
export interface Event {
    id: string;
    summary: string;
    createdAt: string;
    updatedAt: string;
}

export type EventInput = Omit<Event, 'id'>