// Define an interface to make the Sorter class generic and work with any data structure, as long as its sorting
// class has the following properties
interface Sortable {
  length: number;
  compare: (leftIndex: number, rightIndex: number) => boolean;
  swap: (leftIndex: number, rightIndex: number) => void;
}

export class Sorter {
  // collection must be an array of numbers - the variable is initialised automatically when it is passed in
  constructor(public collection: Sortable) {}

  sort = (): void => {
    const { length } = this.collection;

    // Bubble sort algorithm
    for (let i = 0; i < length; i++) {
      // Ignore the right-most element on each progressive loop
      for (let j = 0; j < length - i - 1; j++) {
        if (this.collection.compare(j, j + 1)) {
          // If the element on the left is greater, swap it with the element on the right
          this.collection.swap(j, j + 1);
        }
      }
    }
  }
}
