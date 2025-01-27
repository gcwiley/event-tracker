import { signal } from '@angular/core';
import { isEqual } from 'lodash'; // fix this!
import { DEFAULT_DATASOURCE_STATE } from '../constants/data-source.constant';
import { DataSourceState } from '../dto/data-source.dto';

// The T is a type parameter, which acts as a placeholder for a specific type that will be determined when the
// class is used.
export class DataSource<T> {
  // creates a reactive signal called 'state' that holds the current state of a data source.
  public state = signal<DataSourceState>(DEFAULT_DATASOURCE_STATE);
  // This code creates a reactive variable called 'error' that initially holds an empty string. Whenever the value
  // of this error signal is changed (for instance, to an error message), any parts of your application that are observing this
  // signal will automatically be updated, allowing you to display or handle the error appropriately.
  public error = signal('');
  public data = signal<T>(this.initialData);

  constructor(private initialData: T) {}

  // comment
  public updateState(): void {
    if (this.error()) {
      this.state.set('error');
    } else if (isEqual(this.data(), this.initialData)) {
      this.state.set('empty');
    } else {
      this.state.set('data');
    }
  }

  // comment
  public setError(message: string): void {
    this.error.set(message);
    this.data.set(this.initialData);
    this.updateState();
  }

  // comment
  public setData(data?: T): void {
    this.data.set(data || this.initialData);
    this.updateState();
  }
}
