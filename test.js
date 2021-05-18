import { pitchFreq, pitchColor, freqColor, freqPitch } from './index.js'
const testNote = -8

console.log('testNote:', testNote)
console.log('pitchFreq:', pitchFreq(testNote))
console.log('pitchColor:', pitchColor(testNote))
console.log('freqPitch:', freqPitch(pitchFreq(testNote)))
console.log('freqColor:', freqColor(pitchFreq(testNote)))
