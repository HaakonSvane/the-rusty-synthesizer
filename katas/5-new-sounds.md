# 5. Creating new sounds
Rodio only comes with a sine-wave ready to use out the box, but inside its codebase are ways to extend our instrument portfolio to other types of sounds as well!

## Tasks
1. Create `square`, `triangle` and `sawtooth` modules in your `src` directory.
2. Dig around in the rodio implementation of the `SineWave` source and see if you can use the `SignalGenerator` to create oscillators for the three modules you defined in the previous task.
3. Play around with the different types of oscillators and combine them. Notice how the saw-tooth oscillator fits well for lower frequencies for example. 


## 📚 Facts 📚
> #### rodio audio playback
> Rodio plays sound from a different thread than the main thread. This means the program will terminate immediately unless you sleep the main thread for the desired playback duration.

> #### TITLE
> description