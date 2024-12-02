# 2. An introduction to Rust and notes

## Tasks
1. Create a module in `src/notes.rs` that contains an enum `Note` of all notes between C and B.
2. Implement an associated function `frequency()` on the enum that calculates the frequency of the note in hertz such that the concert pitch is A440.
3. Test that you are able to call and print `frequency()` on any of your notes in `src/main.rs`

> Using enums with implementations like this might make extending our note-range harder in the future. You are free to solve this using any interface you like.


## 📚 Facts 📚
> #### Note terminology
> We normally treat _C_ as a root note. This means we consider an octave as starting with a C, ending with a B like this: `C, C#, D, D#, E, F, F#, G, G#, A, A#, B`. This pattern repeats, just an octave higher / lower. To distinguish a C and its next octave version, we sometimes append numbers to notes to clarify. A more precise notation for the sequence above in the _one-lined_ octave would be `C4, C#4, D4, D#4, E4, F4, F#4, G4, G#4, A4, A#4, B4`. This would follow with the _two-lined_ octave notes `C5, C#5, D5, D#5, ...`

> #### Concert pitch
> The _concert pitch_ (kammernote in Norwegian), is a reference pitch that all instruments are tuned against. The international standard defines the note A4 as 440Hz, or A440 for shorthand.


> #### Ignoring _dead code_ warnings in Rust
> You can flag to the compiler to ignore dead code in structs, enums, functions etc by annotating them with `#[allow(dead_code)]` attribte.
