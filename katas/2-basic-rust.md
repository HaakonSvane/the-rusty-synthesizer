# 2. An introduction to Rust

## Tasks
1. Create a module in `src/notes.rs` that contains an enum `Note` of all notes between C and B.
2. Implement a `frequency()` method on the enum that calculates the frequency of the note in hertz such that the concert pitch is A440.
3. Test that you are able to call and print `frequency()` on any of your notes in `src/main.rs`

> Using enums with implementations like this might make extending our note-range harder in the future. You are free to solve this using any interface you like.


## 📚 Facts 📚
> #### Concert pitch
> The _concert pitch_ (kammernote in Norwegian), is a reference pitch that all instruments are tuned against. The international standard defines the note A4 as 440Hz, or A440 for shorthand.

> #### 