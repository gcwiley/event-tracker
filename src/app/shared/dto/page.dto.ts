// this code creates a custom type called 'PageAction' and represents different actions that can be preformed on a page.
// for example, you might use this type to determine which button to display on a page or which functionality to enable.
export type PageAction = 'list' | 'create' | 'edit' | 'detail';

// defines a custom type called 'PageSection' and can only hold one of two possible string values
export type PageSection = 'posts' | 'not-found';

export interface PageOptions {
  description: string;
  section: PageSection[];
  action?: PageAction[];
  identifier?: 'id';
}
