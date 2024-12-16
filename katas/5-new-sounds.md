# 5. Creating new sounds
Rodio only comes with a sine-wave ready to use out the box, but inside its codebase are ways to extend our instrument portfolio to other types of sounds as well!

## Tasks
1. Create `square`, `triangle` and `sawtooth` modules in your `src` directory.
2. Dig around in the rodio implementation of the `SineWave` source and see if you can use the `SignalGenerator` to create oscillators for the three modules you defined in the previous task.
3. Play around with the different types of oscillators and combine them. Notice how the saw-tooth oscillator fits well for lower frequencies for example. 


## 📚 Facts 📚
> #### Everything is just a sine wave?
> Every single repeatable signal as we are working with can actually be decomposed into a sum of waveforms. The square wave for example can be represented in a binary form (i.e alternate between 1 and -1 on a set frequency), or it can be expressed as a sum of many sine waves with harmonic frequencies. ![gif](https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Fourier_series_for_square_wave.gif/350px-Fourier_series_for_square_wave.gif).