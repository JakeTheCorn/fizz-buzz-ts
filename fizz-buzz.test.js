import { describe, it, expect } from "vitest";
import { a } from './fizz-buzz';

describe("fizzBuzz", () => {
  it("does something", () => {
    expect(true).toEqual(false);
  });
});


/**
 * Test Driven Development
 * 
 * 0.) Write a todo in the todo list - this keeps our mind clear while working
 * 
 * 1.) Red - Write a failing test - before any production code can be written
 * 2.) Green - make the test pass by implementing the functionality - do as fast as possible
 * 3.) Refactor - improve the design of the code while keeping the test passing
 */