use std::time::Duration;

use rodio::{
    cpal,
    source::{SeekError, SignalGenerator},
    Source,
};

pub struct SquareWave {
    generator: SignalGenerator,
}

impl SquareWave {
    const SAMPLE_RATE: u32 = 48000;

    /// The frequency of the sine.
    pub fn new(freq: f32) -> SquareWave {
        let sr = cpal::SampleRate(Self::SAMPLE_RATE);
        SquareWave {
            generator: SignalGenerator::new(sr, freq, rodio::source::Function::Square),
        }
    }
}

impl Iterator for SquareWave {
    type Item = f32;

    #[inline]
    fn next(&mut self) -> Option<f32> {
        self.generator.next()
    }
}

impl Source for SquareWave {
    #[inline]
    fn current_frame_len(&self) -> Option<usize> {
        None
    }

    #[inline]
    fn channels(&self) -> u16 {
        1
    }

    #[inline]
    fn sample_rate(&self) -> u32 {
        Self::SAMPLE_RATE
    }

    #[inline]
    fn total_duration(&self) -> Option<Duration> {
        None
    }

    /// `try_seek()` does nothing on the sine generator. If you need to
    /// generate a sine tone with a precise phase or sample offset, consider
    /// using `skip::skip_samples()`.
    #[inline]
    fn try_seek(&mut self, _: Duration) -> Result<(), SeekError> {
        Ok(())
    }
}
