# 7. Reading musical sheets
Now that we have an arsenal of tones at our disposal plus a music player to play them, we can simplify the process of writing music into a separate file.

## Tasks
1. Decide on a file format that you would like to specify. Keep it simple in the beginning, but think about making it extendable for later.
2. Use rusts very simple file parser (or install a dependency of your liking) to parse the file format you have designed
3. Initialize the music player from your music sheet file.
4. See if you can type down some of your favorite songs down to your own format and have the music player play them.

### Example file format
This format assumes that there is a predefined tempo to the musical sheet. The notes are assumed to be played on quarter notes time signature.
- `-` means hold the previous note
- `!` means stop the previous note
- 
```
SQUARE,TRIANGLE,
C4,E4
B3,-
-, !
```

## 📚 Facts 📚

> #### Time signature
> Time signature in musical sheets indicate how many note values of a particular type are contained within one bar. The most common time signature is 4/4, which means that there are four quarter notes played in a single bar.
