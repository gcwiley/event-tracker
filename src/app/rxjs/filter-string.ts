import { MonoTypeOperatorFunction, filter } from "rxjs";

/**
 * This function is a custom RxJS operator that filters out null or undefined values from a stream of strings.
 * 
 * @returns {MonoTypeOperatorFunction<string>} A function that takes an input observable and returns an observable that emits only non-null/undefined string values.
 */
export const filterString = (): MonoTypeOperatorFunction<string> => {
  return (input$) => {
    // Use the RxJS filter operator to only emit values that are truthy (not null, undefined, or empty string)
    return input$.pipe(filter((id) => !!id));
  };
};
