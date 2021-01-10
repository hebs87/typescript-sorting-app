import { Sorter } from "./Sorter";

export class CharactersCollection extends Sorter {
  constructor(public data: string) {
    super();
  }

  // Declare getter to enable referencing length in the way we're used to (without calling the function)
  // Declare get in front of the function - can't use arrow function syntax
  get length(): number {
    return this.data.length;
  };

  compare = (leftIndex: number, rightIndex: number): boolean => {
    // Return true if left char is greater than right char, if not then return false
    // Need to convert to lowercase to enable ASCII code comparison to work properly
    return this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase();
  };

  swap = (leftIndex: number, rightIndex: number): void => {
    // Logic to swap the left and right char - split into array, compare and swap, join the array to a string
    const characters = this.data.split('');

    const leftHand = characters[leftIndex];
    characters[leftIndex] = characters[rightIndex];
    characters[rightIndex] = leftHand;

    this.data = characters.join('');
  };
}
