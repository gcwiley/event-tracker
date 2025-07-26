// define the event interface
export interface Event {
    id: string;
    summary: string;
    // fix this!
}

export type EventInput = Omit<Event, 'id'>