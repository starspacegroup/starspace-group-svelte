export const nodeToIndex = (node) => {
  let result = 0
  nodes.forEach((n, i) => {
    if (n.node === node) {
      result = i
    }
  })
  return result
}
export const nodes = [
  {
    node: "C0",
    freq: 16,
  },
  {
    node: "C#0/Db0",
    freq: 17,
  },
  {
    node: "D0",
    freq: 18,
  },
  {
    node: "D#0/Eb0",
    freq: 19,
  },
  {
    node: "E0",
    freq: 20,
  },
  {
    node: "F0",
    freq: 21,
  },
  {
    node: "F#0/Gb0",
    freq: 23,
  },
  {
    node: "G0",
    freq: 24,
  },
  {
    node: "G#0/Ab0",
    freq: 25,
  },
  {
    node: "A0",
    freq: 27,
  },
  {
    node: "A#0/Bb0",
    freq: 29,
  },
  {
    node: "B0",
    freq: 30,
  },
  {
    node: "C1",
    freq: 32,
  },
  {
    node: "C#1/Db1",
    freq: 34,
  },
  {
    node: "D1",
    freq: 36,
  },
  {
    node: "D#1/Eb1",
    freq: 38,
  },
  {
    node: "E1",
    freq: 41,
  },
  {
    node: "F1",
    freq: 43,
  },
  {
    node: "F#1/Gb1",
    freq: 46,
  },
  {
    node: "G1",
    freq: 49,
  },
  {
    node: "G#1/Ab1",
    freq: 51,
  },
  {
    node: "A1",
    freq: 55,
  },
  {
    node: "A#1/Bb1",
    freq: 58,
  },
  {
    node: "B1",
    freq: 61,
  },
  {
    node: "C2",
    freq: 65,
  },
  {
    node: "C#2/Db2",
    freq: 69,
  },
  {
    node: "D2",
    freq: 73,
  },
  {
    node: "D#2/Eb2",
    freq: 77,
  },
  {
    node: "E2",
    freq: 82,
  },
  {
    node: "F2",
    freq: 87,
  },
  {
    node: "F#2/Gb2",
    freq: 92,
  },
  {
    node: "G2",
    freq: 98,
  },
  {
    node: "G#2/Ab2",
    freq: 103,
  },
  {
    node: "A2",
    freq: 110,
  },
  {
    node: "A#2/Bb2",
    freq: 116,
  },
  {
    node: "B2",
    freq: 123,
  },
  {
    node: "C3",
    freq: 130,
  },
  {
    node: "C#3/Db3",
    freq: 138,
  },
  {
    node: "D3",
    freq: 146,
  },
  {
    node: "D#3/Eb3",
    freq: 155,
  },
  {
    node: "E3",
    freq: 164,
  },
  {
    node: "F3",
    freq: 174,
  },
  {
    node: "F#3/Gb3",
    freq: 185,
  },
  {
    node: "G3",
    freq: 196,
  },
  {
    node: "G#3/Ab3",
    freq: 207,
  },
  {
    node: "A3",
    freq: 220,
  },
  {
    node: "A#3/Bb3",
    freq: 233,
  },
  {
    node: "B3",
    freq: 246,
  },
  {
    node: "C4",
    freq: 261,
  },
  {
    node: "C#4/Db4",
    freq: 277,
  },
  {
    node: "D4",
    freq: 293,
  },
  {
    node: "D#4/Eb4",
    freq: 311,
  },
  {
    node: "E4",
    freq: 329,
  },
  {
    node: "F4",
    freq: 349,
  },
  {
    node: "F#4/Gb4",
    freq: 369,
  },
  {
    node: "G4",
    freq: 392,
  },
  {
    node: "G#4/Ab4",
    freq: 415,
  },
  {
    node: "A4",
    freq: 440,
  },
  {
    node: "A#4/Bb4",
    freq: 466,
  },
  {
    node: "B4",
    freq: 493,
  },
  {
    node: "C5",
    freq: 523,
  },
  {
    node: "C#5/Db5",
    freq: 554,
  },
  {
    node: "D5",
    freq: 587,
  },
  {
    node: "D#5/Eb5",
    freq: 622,
  },
  {
    node: "E5",
    freq: 659,
  },
  {
    node: "F5",
    freq: 698,
  },
  {
    node: "F#5/Gb5",
    freq: 739,
  },
  {
    node: "G5",
    freq: 783,
  },
  {
    node: "G#5/Ab5",
    freq: 830,
  },
  {
    node: "A5",
    freq: 880,
  },
  {
    node: "A#5/Bb5",
    freq: 932,
  },
  {
    node: "B5",
    freq: 987,
  },
  {
    node: "C6",
    freq: 1046,
  },
  {
    node: "C#6/Db6",
    freq: 1108,
  },
  {
    node: "D6",
    freq: 1174,
  },
  {
    node: "D#6/Eb6",
    freq: 1244,
  },
  {
    node: "E6",
    freq: 1318,
  },
  {
    node: "F6",
    freq: 1396,
  },
  {
    node: "F#6/Gb6",
    freq: 1479,
  },
  {
    node: "G6",
    freq: 1567,
  },
  {
    node: "G#6/Ab6",
    freq: 1661,
  },
  {
    node: "A6",
    freq: 1760,
  },
  {
    node: "A#6/Bb6",
    freq: 1864,
  },
  {
    node: "B6",
    freq: 1975,
  },
  {
    node: "C7",
    freq: 2093,
  },
  {
    node: "C#7/Db7",
    freq: 2217,
  },
  {
    node: "D7",
    freq: 2349,
  },
  {
    node: "D#7/Eb7",
    freq: 2489,
  },
  {
    node: "E7",
    freq: 2637,
  },
  {
    node: "F7",
    freq: 2793,
  },
  {
    node: "F#7/Gb7",
    freq: 2959,
  },
  {
    node: "G7",
    freq: 3135,
  },
  {
    node: "G#7/Ab7",
    freq: 3322,
  },
  {
    node: "A7",
    freq: 3520,
  },
  {
    node: " A#7/Bb7 ",
    freq: 3729,
  },
  {
    node: "B7",
    freq: 3951,
  },
  {
    node: "C8",
    freq: 4186,
  },
  {
    node: "C#8/Db8",
    freq: 4434,
  },
  {
    node: "D8",
    freq: 4698,
  },
  {
    node: "D#8/Eb8",
    freq: 4978,
  },
  {
    node: "E8",
    freq: 5274,
  },
  {
    node: "F8",
    freq: 5587,
  },
  {
    node: "F#8/Gb8",
    freq: 5919,
  },
  {
    node: "G8",
    freq: 6271,
  },
  {
    node: "G#8/Ab8",
    freq: 6644,
  },
  {
    node: "A8",
    freq: 7040,
  },
  {
    node: "A#8/Bb8",
    freq: 7458,
  },
  {
    node: "B8",
    freq: 7902,
  },
]
