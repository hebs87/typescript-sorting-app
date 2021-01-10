import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";
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

// Sorting linked lists
const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);
const linkedListSorter = new Sorter(linkedList);
linkedListSorter.sort();
linkedList.print();
