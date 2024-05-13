 TypeScript

<p align="justify">

TypeScript stands in an unusual relationship to JavaScript. TypeScript offers all of JavaScript’s features, and an additional layer on top of these: TypeScript’s type system. For example, JavaScript provides language primitives like string and number, but it doesn’t check that We’ve consistently assigned these. TypeScript does.This means that your existing working JavaScript code is also TypeScript code. The main benefit of TypeScript is that it can highlight unexpected behavior in your code, lowering the chance of bugs.

<p align = "justify" >
By understanding how JavaScript works, TypeScript can build a type-system that accepts JavaScript code but has types. This offers a type-system without needing to add extra characters to make types explicit in your code.

<p align = "justify" >
We can use a wide variety of design patterns in JavaScript. However, some design patterns make it difficult for types to be inferred automatically (for example, patterns that use dynamic programming). To cover these cases, TypeScript supports an extension of the JavaScript language, which offers places for We to tell TypeScript what the types should be.
For example, to create an object with an inferred type which includes name: string and id: number, We can write:

<p align = "justify">
We can explicitly describe this object’s shape using an interface declaration:

For Example:

<pre>
interface User {
  name: string;
  id: number;
}
</pre>

<p align = "justify">
You can then declare that a JavaScript object conforms to the shape of your new interface by using syntax like : TypeName after a variable declaration:

<pre>
const user = {
  name: "Hayes",
  id: 0,
};
</pre>

<p align = "justify">
If you provide an object that doesn’t match the interface you have provided, TypeScript will warn you:

<pre>
interface User {
  name: string;
  id: number;
}
 
const user: User = {
  username: "Hayes",
<p style = "color: red">
  Object literal may only specify known properties, and 'username' does not exist in type 'User'.
</p>
  id: 0,
};
</pre>

<p align = "justify">
Since JavaScript supports classes and object-oriented programming, so does TypeScript. You can use an interface declaration with classes:

<pre>
interface User {
  name: string;
  id: number;
}
 
class UserAccount {
  name: string;
  id: number;
 
  constructor(name: string, id: number) {
    this.name = name;
    this.id = id;
  }
}
 
const user: User = new UserAccount("Murphy", 1);
</pre>

You can use interfaces to annotate parameters and return values to functions:

<pre>
function deleteUser(user: User) {
  // ...
}
 
function getAdminUser(): User {
  //...
}
</pre>
<p align = "justify" >
There is already a small set of primitive types available in JavaScript: boolean, bigint, null, number, string, symbol, and undefined, which you can use in an interface. TypeScript extends this list with a few more, such as any (allow anything), unknown (ensure someone using this type declares what the type is), never (it’s not possible that this type could happen), and void (a function which returns undefined or has no return value).

## Composing Types

<p align = "justify">
With TypeScript, you can create complex types by combining simple ones. There are two popular ways to do so: with unions, and with generics.

### Unions

With a union, you can declare that a type could be one of many types. For example, you can describe a boolean type as being either true or false:

<pre>
type MyBool = true | false;
</pre>

A popular use-case for union types is to describe the set of string or number literals that a value is allowed to be:

<pre>
type WindowStates = "open" | "closed" | "minimized";
type LockStates = "locked" | "unlocked";
type PositiveOddNumbersUnderTen = 1 | 3 | 5 | 7 | 9;
</pre>

Unions provide a way to handle different types too. For example, you may have a function that takes an array or a string:

<pre>
function getLength(obj: string | string[]) {
  return obj.length;
}
</pre>

### Generics

<p align = "justify">
Generics provide variables to types. A common example is an array. An array without generics could contain anything. An array with generics can describe the values that the array contains.
<pre>
type StringArray = Array<string>;
type NumberArray = Array<number>;
type ObjectWithNameArray = Array<{ name: string }>;
</pre>

### Structural Type System

One of TypeScript’s core principles is that type checking focuses on the shape that values have. This is sometimes called “duck typing” or “structural typing”.

In a structural type system, if two objects have the same shape, they are considered to be of the same type.

<pre>
interface Point {
  x: number;
  y: number;
}
 
function logPoint(p: Point) {
  console.log(`${p.x}, ${p.y}`);
}
 
// logs "12, 26"
const point = { x: 12, y: 26 };
logPoint(point);
</pre>
<p align = "justify">
The point variable is never declared to be a Point type. However, TypeScript compares the shape of point to the shape of Point in the type-check. They have the same shape, so the code passes.

<p align = "justify">
The shape-matching only requires a subset of the object’s fields to match.
There is no difference between how classes and objects conform to shapes:

<pre>
class VirtualPoint {
  x: number;
  y: number;
 
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}
 
const newVPoint = new VirtualPoint(13, 56);
logPoint(newVPoint); // logs "13, 56"
</pre>

## Difference between the Type and Interface

### TypeScript types

<p align = "justify">
TypeScript types are utilized to define data types for variables, which includes built-in types, user-defined types, and additional features such as type aliases. The fundamental types in TypeScript comprise of string, Boolean, and number.
<p align = "justify">
In TypeScript, a type alias permits us to alter the designation of a type without truly defining a new type. Union types can only be declared using the type keyword. This approach provides unique capabilities not available in other languages, especially when working with interfaces type aliases.
<p align = "justify">
Tuple types, on the other hand, permit the expression of an array with a fixed number of elements, wherein each element possesses its own data type. Interestingly, tuples can only be declared using types in TypeScript.

### TypeScript interface
<p align = "justify">
Interfaces in TypeScript are a contract that stipulates the requirements an object must meet. They define the syntax that must be adhered to by each entity. The components of an interface in TypeScript comprise its properties, methods, and events.
