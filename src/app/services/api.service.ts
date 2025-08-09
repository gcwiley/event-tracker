// this code defines an angular service called APIService, that interacts with a database (likely RxDB) to preform CRUD (create, Read, Update, Delete) operations on a collection named 'posts'. 

import { Injectable } from '@angular/core';
import { combineLatest, from, map } from 'rxjs';
import { v4 as uuidv4 } from 'uuid'; // uuid for generating unique identifier
import { PostDto } from '../dto/post.dto'; // a data transfer object defining the structure of a post
import { RxdbProvider } from './db.service'; // service that provides access to the RxDB database

// interface defining the parameters for querying a list of posts (pagination, sorting, filtering)
interface PostListInput {
   page: number;
   limit: number;
   sort: keyof PostDto;
   order: 'asc' | 'desc';
   query: string;
}

// marks the class as an Angular service, making it injectable into other components
@Injectable({
   providedIn: 'root',
})
export class ApiService<T> {
   // inects the RxdbProvider to access the database
   constructor(private rxdbProvider: RxdbProvider) {}

   // a getter that returns the 'posts' collection from the database
   private get collection() {
      return this.rxdbProvider.getDatabaseCollection('posts');
   }

   // creates a new post
   public createPost(body: Partial<T>) {
      // from() converts promises from the RxDB operations into Observables
      return from(
         this.collection.insert({
            // create a unique id for new post
            id: uuidv4(),
            ...body,
            // adds the current timestamp
            createdAt: new Date().toISOString()
         })
      // the map() operator then transformed the emitted values (database documents) to return only the data part (doc._data). this allows other components subscribing to these methods to work with the data directly in a reactive fashion.
      ).pipe(map((doc) => doc._data));
   }

   // partially updates an existing posts. it finds the post by ID and updates the specified fields. 
   public updatePostById(id: string, body: Partial<T>) {
      return from(
         this.collection.findOne({ selector: { id } }).update({
            $set: { id, ...body },
         })
      ).pipe(map((doc) => ({ ...doc._data, ...body })));
   }

   // replaces an existing post or inserts a new one if it does'nt exist
   public put(id: string, body: T) {
      return from(this.collection.upsert({ id, ...body })).pipe(map((doc) => ({ ...doc._data, ...body })));
   }

   // retrieves a single post by its ID
   public getPostById(id: string) {
      return from(this.collection.findOne({ selector: { id } }).exec()).pipe(map((doc) => doc._data));
   }

   // deletes a post by ID
   public deletePostById(id: string) {
      return from(this.collection.findOne({ selector: { id } }).remove()).pipe(map((doc) => doc._data));
   }

   // Retrieves a list of posts based on the provided input parameters. This handles pagination sorting by any field in the PostDto object, and filtering by title using a case-insensitive reqular expression. 
   public list(input: PostListInput) {
      const selector = input.query ? { title: { regex: input.query, $options: 'i' } } : undefined;
      return from(
         this.collection
            .find({
               skip: input.page - 1,
               limit: input.limit,
               selector,
               sort: [
                  {
                     [input.sort]: input.order,
                  },
               ],
            })
            .exec()
      ).pipe(map((docs) => docs.map((doc) => doc._data)));
   }

   // returns the total number of posts in the post collection
   public countPosts() {
      // .exec() executes the query and returns a Promise that resolves with the count (a number)
      // from() takes a promise and converts it into an RxJs Observable.
      return from(this.collection.count().exec());
   }

   // this is a crucial method. it uses 'combineLatest' from 'RxJS' to combine the results of list and count. This ensures that both the list of posts and the total count are retrived and then returned as a single object. this is more efficient than making two separate calls.
   public listAndCount(input: PostListInput) {
      return combineLatest([this.list(input), this.countPosts()]).pipe(
         map(([items, totalCount]) => ({
            items,
            totalCount,
         }))
      );
   }
}
