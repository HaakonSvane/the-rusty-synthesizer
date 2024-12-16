# X. Solving FizzBuzz using TDD
Writing tests is an essential tool. While the main-path katas ignored this aspect, it is still important to know how to write tests in rust.

The fizzbuzz code should work like this:
>Given an integer n, for every positive integer i <= n, the task is to print,
>- "FizzBuzz" if i is divisible by 3 and 5,
>- "Fizz" if i is divisible by 3,
>- "Buzz" if i is divisible by 5
>- "i" as a string, if none of the conditions are true.

## Tasks
1. Create a new library called fizzbuzz (`cargo new fizzbuzz --lib`)
2. `cd` into the directory and have a look at the `lib.rs` file.
3. Start by first a writing a simple test for the simlest case, invoking your to-come `fizz_buzz` function. 
4. Implement an empty `fizz_buzz` function with an `!unimplemented` macro in its body.
5. Ensure code compiles and run `cargo test` to run all tests.
6. Implement code to make the test pass.
7. Create new tests before implementing code.
8. Rinse and repeat.

Exmaple of a first test:

```rust
#[test]
fn returns_fizz_if_value_is_3() {
    assert_eq!("Fizz", fizz_buzz(3));
}
```