# X. Our own homemade oscillator
Now it is time to code our first sine wave oscillator ourselves!
Rodio requires any sound source to conform to two traits (often called _interfaces_ in other languages) for our own implementation

- `Iterable`
- `Source`


## Tasks
1. In a new file, create a struct representing your custom oscillator.
2. Implement the `Iterable` and `Source` traits
3. Have the oscillator return whatever you feel like.


## 📚 Facts 📚
> #### All the sounds in the world!
> If done correctly, you could actually simulate any sound in the world using your own oscillator and a single wave-form. This would require you to study the harmonics for the sound you want to replicate though.
