// comment
export interface EventDto {
   id: string;
   title: string;
   body: string;
}

export type EventInputDto = Omit<EventDto, 'id'>;
