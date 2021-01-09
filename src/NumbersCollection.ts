export class NumbersCollection {
  constructor(public data: number[]) {}

  // Declare getter to enable referencing length in the way we're used to (without calling the function)
  // Declare get in front of the function - can't use arrow function syntax
  get length(): number {
    return this.data.length;
  }

  compare = (leftIndex: number, rightIndex: number): boolean => {
    // Return true if left number is greater than right number, if not then return false
    return this.data[leftIndex] > this.data[rightIndex];
  }

  swap = (leftIndex: number, rightIndex: number): void => {
    // Logic to swap the left and right numbers
    const leftHand = this.data[leftIndex];
    this.data[leftIndex] = this.data[rightIndex];
    this.data[rightIndex] = leftHand;
  }
}
