/**
 * This module provides a utility function for setting an initial value in a data source.
 */
import { MonoTypeOperatorFunction, tap } from 'rxjs';
import { DataSource } from '../classes/data-source';

/**
 * This function sets an initial value in a data source if the input is not a string.
 * @param dataSource The data source to set the initial value in.
 * @returns A MonoTypeOperatorFunction that sets the initial value in the data source.
 */
export const setInitialIfNotString = <T>(dataSource: DataSource<T>): MonoTypeOperatorFunction<string> => {
   // Return a function that takes an input observable and returns an output observable.
   return (input$) => {
      // Pipe the input observable through a tap operator.
      return input$.pipe(
         tap((id) => {
            // If the input is not a string, set the initial value in the data source.
            if (!id) {
               dataSource.setData();
            }
         })
      );
   };
};
