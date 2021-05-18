import { pitchFreq, pitchColor, freqColor, freqPitch } from './index.js'
const testNote = 200

console.log('pitchFreq:', pitchFreq(testNote))
console.log('pitchColor:', pitchColor(testNote))
console.log('freqPitch:', freqPitch(pitchFreq(testNote)))
console.log('freqColor:', freqColor(pitchFreq(testNote)))
