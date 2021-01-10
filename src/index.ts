import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";

// Sorting array of numbers
const numbersCollection = new NumbersCollection([10, 3, -5, 0])
numbersCollection.sort();
console.log(numbersCollection.data);

// Sorting string
const charactersCollection = new CharactersCollection('Sunny');
charactersCollection.sort();
console.log(charactersCollection.data);

// Sorting linked lists
const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);
linkedList.sort();
linkedList.print();
