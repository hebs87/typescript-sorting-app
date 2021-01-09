import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";
import { Sorter } from "./Sorter";

// Sorting array of numbers
const numbersCollection = new NumbersCollection([10, 3, -5, 0])
const arraySorter = new Sorter(numbersCollection);
arraySorter.sort();
console.log(numbersCollection.data);

// Sorting string
const charactersCollection = new CharactersCollection('Sunny');
const charactersSorter = new Sorter(charactersCollection);
charactersSorter.sort();
console.log(charactersCollection.data);
