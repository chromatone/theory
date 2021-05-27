import {
  pitchFreq,
  pitchColor,
  freqColor,
  freqPitch,
  pitchNoteOctave,
} from './index.js'
const testNote = 3

console.log('testNote:', testNote)
console.log('pitchNoteOctave:', pitchNoteOctave(testNote))
console.log('pitchFreq:', pitchFreq(testNote))
console.log('pitchColor:', pitchColor(testNote))
console.log('freqPitch:', freqPitch(pitchFreq(testNote)))
console.log('freqColor:', freqColor(pitchFreq(testNote)))
