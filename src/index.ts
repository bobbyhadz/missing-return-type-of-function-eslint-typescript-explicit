export { };

// Missing return type on function TypeScript ESLint error

// EXAMPLE 0 - Simply typing the function

function example(): void {
  console.log('bobbyadz.com');
}

example()

// EXAMPLE 1 - Exaplicitly setting a function's return type

// 👇️ arrow function that returns a string
const funcA = (): string => {
  return 'bobbyhadz.com';
};

// --------------------------------------------

// 👇️ named function that returns a number
function funcB(): number {
  return 1000;
}

// --------------------------------------------

// 👇️ arrow function that returns an object
const funcC = (): { id: number; name: string } => {
  return { id: 1, name: 'bobby hadz' };
};

// --------------------------------------------

// 👇️ named function that returns an array of objects
function funcD(): { id: number; name: string }[] {
  return [
    { id: 1, name: 'bobby' },
    { id: 2, name: 'hadz' },
  ];
}

// --------------------------------------------

// 👇️ class method that doesn't return anything
class Example {
  method(): void {
    console.log(this);
    return undefined;
  }
}

// ---------------------------------------------------

// // EXAMPLE 2 - Disabling the `@typescript-eslint/explicit-function-return-type` rule for a single line

// // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
// const example = () => {
//   return 'bobbyhadz.com';
// };

// ---------------------------------------------------

// // EXAMPLE 3 - Disabling the `@typescript-eslint/explicit-function-return-type` for a block of code or an entire file

// /* eslint-disable @typescript-eslint/explicit-function-return-type */

// const example = () => {
//   return 'bobbyhadz.com';
// };

// /* eslint-enable @typescript-eslint/explicit-function-return-type */

// // 👉️ The rule is enabled here