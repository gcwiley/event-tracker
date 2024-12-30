// the PostDto interface define a blueprint for objects that represent a post. It enforces that these objects have properties named 'id', 'title', and 'body', all of which must contain string values.

// the 'export' keyword makes the 'PostDto' interface accessible from other files within your project.

// 'PostDto' is the name given to the interface. It is a common practice to use 'Dto" (Data Transfer Object) as a suffix for interfaces that represent data structures used for communication between different parts of an application.
export interface PostDto {
    id: string;
    title: string;
    body: string;
    createdAt: string;
}

export type PostInputDto = Omit<PostDto, 'id'>;