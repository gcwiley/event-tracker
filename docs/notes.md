Private keyword

The private keyword is an access modifier that restricts the accessibilty of a class member (property or method) to within the containing class only. This means that private members cannot be accessed or modified from outside the class, including subclasses.

Data Transfer Object

look up in google

These tools allows the application to handle asynchronous operations like database interactions or network requests. 

This enable to work is data streams, transformations, and combinations for more streamlined data management.

#### Observable 

This is the core building block of RxJS. It represents a stream of data can be observed over time. Think of it like a pipe that emits values. Components or services in your application can "subscribe" to these Observables to react to the data they emit. 

#### combineLatest

This function is used to combine multiple Observables into a single Observable. It waits for all input Observables to emit at least one value, and then it emits an array containing the latest values from each input Observable. 

This is useful when you need data from multiple sources before preforming an action. 

#### from

This function is used to create an Observable from various sources, such as arrays, promises, or iterables. 

in the context of the code provided, from was used to create Observables from operations with 'this.collection' which is likely a database query.

By converting the database operations to Observables using from, it allows chaining RxJS operators like map.

map:

This operator is used to transform the values emitted by an Observable. It takes a function as an argument, and this function is applied to each value emmmited by the Observable, producing a new Observable with the transformed values. 

This can be used to change the shape or format of the data before a component consumes it.

