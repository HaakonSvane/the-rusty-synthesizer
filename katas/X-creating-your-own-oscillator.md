# 3. Our first homemade oscillator
Now it is time to code our first sine wave oscillator ourselves!
You are free to implement this how you like, but since we will be trying our hand at different types of oscillators later on, it 
is recommended that we stick to a common interface (called _traits_ in rust).

```rust
trait Oscillator {
    /// Gets the next value to be played
    get_next_sample() -> f32;
    /// Sets the frequency of the oscillator playing
    set_frequency() -> f32;
}
```
## Tasks
1. In a new file, create a `SineWaveOscillator` struct.
2. Implement the `Oscillator` trait 
3. Play a random tone for 5 seconds before the program terminates
4. Configure your playback code to accept a `Note`


## 📚 Facts 📚
> #### rodio audio playback
> Rodio plays sound from a different thread than the main thread. This means the program will terminate immediately unless you sleep the main thread for the desired playback duration.

> #### TITLE
> 