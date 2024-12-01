// 'DataSourceState' is used to represent the current state of a data source, providing information
// about whether it's loading, has data, encountered an error, or is empty.
export type DataSourceState = 'loading' | 'data' | 'error' | 'empty'