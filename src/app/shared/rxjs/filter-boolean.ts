import { MonoTypeOperatorFunction, filter } from "rxjs";

/**
 * Filters a boolean observable to emit only true values.
 *
 * @returns {MonoTypeOperatorFunction<boolean>} A function that takes an observable of booleans and returns an observable of booleans that only emits true values.
 */
export const filterBoolean = (): MonoTypeOperatorFunction<boolean> => {
  // Takes an input observable of booleans.
  return (input$) => {
    // Pipes the input observable through a filter operator.
    // The filter operator only emits values that satisfy the provided condition.
    // In this case, the condition is that the value must be equal to true.
    return input$.pipe(filter((value) => value === true));
  };
};
