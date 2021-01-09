class Sorter {
  // collection must be an array of numbers - the variable is initialised automatically when it is passed in
  constructor(public collection: number[]) {}

  sort = (): void => {
    const { length } = this.collection;

    for (let i = 0; i < length; i++) {
      // Ignore the right-most element on each progressive loop
      for (let j = 0; j < length - i - 1; j++) {
        if (this.collection[j] > this.collection[j + 1]) {
          // If the element on the left is greater, swap it with the element on the right
          const leftHand = this.collection[j];
          this.collection[j] = this.collection[j+1];
          this.collection[j+1] = leftHand;
        }
      }
    }
  }
}

const sorter = new Sorter([10, 3, -5, 0]);
sorter.sort();
console.log(sorter.collection);
