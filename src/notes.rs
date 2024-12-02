#[allow(dead_code)]
pub enum Note {
    C,
    CSharp,
    D,
    DSharp,
    E,
    F,
    FSharp,
    G,
    GSharp,
    A,
    ASharp,
    B,
}

impl Note {
    pub fn frequecy(&self) -> f64 {
        let semitones_from_concert_pitch = match self {
            Note::C => -9,
            Note::CSharp => -8,
            Note::D => -7,
            Note::DSharp => -6,
            Note::E => -5,
            Note::F => -4,
            Note::FSharp => -3,
            Note::G => -2,
            Note::GSharp => -1,
            Note::A => 0,
            Note::ASharp => 1,
            Note::B => 2,
        };

        return 440.0 * 2.0_f64.powf(semitones_from_concert_pitch as f64 / 12.0);
    }
}
