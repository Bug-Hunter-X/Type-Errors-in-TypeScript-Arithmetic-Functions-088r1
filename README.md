# Type Errors in TypeScript Arithmetic Functions

This repository demonstrates a common type error in TypeScript when performing arithmetic operations with incorrect data types.  The example shows functions designed to add and subtract numbers, but attempts to call them with strings as arguments.

The TypeScript compiler correctly flags these as errors, but the error messages may not be immediately obvious to those new to the language.  This example highlights the importance of careful type checking in TypeScript to catch potential runtime errors at compile time.

## Running the code

1. Clone this repository.
2. Navigate to the root directory.
3. Compile the code using `tsc bug.ts`.
4. Observe the compiler error messages.
5. View `bugSolution.ts` for a potential fix.