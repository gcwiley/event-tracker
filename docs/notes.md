#### Private keyword

The private keyword is an access modifier that restricts the accessibilty of a class member (property or method) to within the containing class only. This means that private members cannot be accessed or modified from outside the class, including subclasses.

#### Data Transfer Object

look up in google

These tools allows the application to handle asynchronous operations like database interactions or network requests. 

This enable to work is data streams, transformations, and combinations for more streamlined data management.

#### Observable 

This is the core building block of RxJS. It represents a stream of data can be observed over time. Think of it like a pipe that emits values. Components or services in your application can "subscribe" to these Observables to react to the data they emit. 

#### What is a Signal

In the context of Angular, a 'signal' is a reactive primitive used for managing state. They are a way to define values that can be updated over time, and they automatically trigger updates in components when their value changes. 

In simpler terms: Imagine a signal like a light switch. When the switch is flipped (the signal's value changes), it automatically turns of or off the light (updates the components using the signal). This makes managing data changes in your application more streamlined and efficient.

#### Why use Signals: 

Signals offer advantages for state management such as:

1. Fine-grained reactivity: Signals allow for precise updates to components based on specific changes.

2. Performance: Signals are optimized for performance, helping to keep your application responsive.

3. Ergonomics: They offer a simple and intuitive way to manage complex state scenarios. 

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

### Angular Directives

A directive is a class that adds new behavior or modifies the appearance of an existing DOM element. Think of them as instructions that tell Angular to do something special with a particular element.

#### Types of Directives

1. Component Directives: These are the most common type and form the building blocks of Angular applications. They have a template associated with them and define a view (a portion of the UI).You likely use them all the time!

2. Structural Directives: These directives change the structure of the DOM by adding, removing, or manipulating elements. 
