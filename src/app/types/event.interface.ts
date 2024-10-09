// define the event interface
export interface Event {
   id?: string;
   title: string;
   category: string;
   countryLocation: string;
   latitude: string,
   longitude: string,
   summary: string;
   assessment: string;
   date: string;
   timestamp: string;
}

// define the event category interface
export interface EventCategory {
   value: string;
   viewValue: string;
}


