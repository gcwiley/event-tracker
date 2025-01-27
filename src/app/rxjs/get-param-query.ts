import { ParamMap } from "@angular/router";
import { OperatorFunction, map } from "rxjs";

/**
 * RxJS operator function to extract the 'query' parameter from a ParamMap.
 *
 * @returns An OperatorFunction that takes a ParamMap as input and returns an Observable emitting the 'query' parameter value.
 */
export const getParamQuery = (): OperatorFunction<ParamMap, string> => {
  // Return a function that takes an input Observable (input$).
  return (input$) => {
    // Pipe the input Observable through the map operator.
    return input$.pipe(
      // Map each ParamMap emitted by the input Observable to the value of the 'query' parameter.
      map((params) => {
        // Get the 'query' parameter from the ParamMap.
        // If the 'query' parameter is not found, return an empty string.
        return params.get("query") || "";
      })
    );
  };
};
