import { Injectable } from '@angular/core';
import { Observable, combineLatest, from, map } from 'rxjs';

// comment
import { v4 as uuidv4 } from 'uuid'; // install uuid

// comment
import { PostDto } from '../dto/post.dto';

// import the database service
import { RxdbProvider } from './db.service';

// comment
interface PostListInput {
  page: number;
  limit: number;
  sort: keyof PostDto;
  order: 'asc' | 'desc';
  query: string;
}

@Injectable({
  providedIn: 'root',
})
export class ApiService<T> {
  // comment here
  constructor(private rxdbProvider: RxdbProvider) {}

  // get the name of the collection
  private get collection() {
    return this.rxdbProvider.getDatabaseCollection('posts');
  }

  // creates a new post within the database
  public create(body: Partial<T>) {
    return from(
      this.collection.insert({
        id: uuidv4(),
        ...body,
      })
    ).pipe(map((doc) => doc._data));
  }

  // updates a post
  public patch(id: string, body: Partial<T>) {
    return from(
      // find document by id and updates document
      this.collection.findOne({ selector: { id } }).update({
        $set: { id, ...body },
      })
    ).pipe(map((doc) => ({ ...doc._data, ...body })));
  }

  // comment
  public put(id: string, body: T) {
    return from(this.collection.upsert({ id, ...body })).pipe(
      map((doc) => ({ ...doc._data, ...body }))
    );
  }

  // delete a post
  public delete(id: string) {
    // find document by id and remove found document.
    return from(this.collection.findOne({ selector: { id } }).remove()).pipe(
      map((doc) => doc._data)
    );
  }

  // list all posts within the collection
  public list(input: PostListInput) {
    // set up the query
    const selector = input.query
      ? { title: { regex: input.query, $options: 'i' } }
      : undefined;
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

  // count the number of posts in the collection
  public count(): Observable<number> {
    // counts number of document and uses the .exec() method to execute.
    return from(this.collection.count().exec());
  }

  // comment - follow up!
  public listAndCount(input: PostListInput) {
    return combineLatest();
  }
}
