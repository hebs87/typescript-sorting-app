// Define an interface to make the Sorter class generic and work with any data structure, as long as its sorting
// class has the following properties
interface Sortable {
  length: number;
  compare: (leftIndex: number, rightIndex: number) => boolean;
  swap: (leftIndex: number, rightIndex: number) => void;
}

// This is an Abstract class - can only be used in a child class and cannot be instantiated directly
export abstract class Sorter {
  // Tell the class that the following properties will exist in the future - alternative to interface
  abstract length: number;
  abstract compare: (leftIndex: number, rightIndex: number) => boolean;
  abstract swap: (leftIndex: number, rightIndex: number) => void;

  // This will only ever be called in the child class, so we reference this as the child class
  sort = (): void => {
    const { length } = this;

    // Bubble sort algorithm
    for (let i = 0; i < length; i++) {
      // Ignore the right-most element on each progressive loop
      for (let j = 0; j < length - i - 1; j++) {
        if (this.compare(j, j + 1)) {
          // If the element on the left is greater, swap it with the element on the right
          this.swap(j, j + 1);
        }
      }
    }
  }
}
