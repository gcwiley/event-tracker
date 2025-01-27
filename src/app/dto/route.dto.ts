/**
 * Interface for the application routes.
 */
interface APP<T> {
    /**
     * Route to the posts list.
     */
    POSTS: T;
    /**
     * Route to the not found page.
     */
    NOT_FOUND: T;
}

/**
 * Interface for the posts routes.
 */
interface POSTS<T> {
    /**
     * Route to the post detail page.
     */
    DETAIL: T;
    /**
     * Route to the post create page.
     */
    CREATE: T;
    /**
     * Route to the post edit page.
     */
    EDIT: T;
}
/**
 * Interface for the route definition DTO.
 */
export interface RouteDefinitionDto<T> {
    APP: APP<T>;
    POSTS: POSTS<T>;
}