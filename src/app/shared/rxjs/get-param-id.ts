import { ParamMap } from "@angular/router";
import { OperatorFunction, map } from "rxjs";

/**
 * RxJS operator function to extract the 'id' parameter from a route's ParamMap.
 *
 * @returns An OperatorFunction that takes a ParamMap and returns an Observable emitting the 'id' value.
 */
export const getParamId = (): OperatorFunction<ParamMap, string> => {
  return (input$) => {
    // Pipe the input Observable (ParamMap) through the map operator.
    return input$.pipe(
      // Extract the 'id' parameter from the ParamMap.
      // If 'id' is not found, return an empty string.
      map((params) => {
        return params.get("id") || "";
      })
    );
  };
};
