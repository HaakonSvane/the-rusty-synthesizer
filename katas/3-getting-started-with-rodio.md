# 3. Getting started with `rodio`

## Tasks
1. Install `rodio` as a dependency
2. Using rodio's `source::SineWave` source struct, play an A note for 5 seconds before terminating the program
3. Configure your playback code to accept a `Note`


## 📚 Facts 📚
> #### rodio audio playback
> Rodio plays sound from a different thread than the main thread. This means the program will terminate immediately unless you sleep the main thread for the desired playback duration.

> #### TITLE
> description