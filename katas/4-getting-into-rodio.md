# 4. Getting into `rodio` 🤠

## Tasks
1. (re) Implement playback of a sinewave using `Sink` (from rodio)
2. Append multiple sine-waves to your sink and configure the duration of them. Play around with different notes as frequencies.
3. Configure a second sink. Append different notes to each sink to have them play simultaneously.Can you find some nice harmonies?


## 📚 Facts 📚
> #### rodio audio playback
> Rodio plays sound from a different thread than the main thread. This means the program will terminate immediately unless you sleep the main thread for the desired playback duration.

> #### TITLE
> description