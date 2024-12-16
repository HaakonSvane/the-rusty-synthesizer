mod notes;
mod oscillators;
use std::time::Duration;

use rodio::{
    source::{SineWave, Source},
    OutputStream, Sink,
};

fn main() {
    let (_stream, stream_handle) = OutputStream::try_default().unwrap();
    let track1 = Sink::try_new(&stream_handle).unwrap();
    let track2 = Sink::try_new(&stream_handle).unwrap();

    let source1 =
        SineWave::new(notes::Note::A.frequecy()).take_duration(Duration::from_secs_f32(0.25));
    let source2 = oscillators::SquareWave::new(notes::Note::CSharp.frequecy())
        .take_duration(Duration::from_secs_f32(0.25));

    track1.append(source1);
    track2.append(source2);

    track1.sleep_until_end();
    track2.sleep_until_end();
}
