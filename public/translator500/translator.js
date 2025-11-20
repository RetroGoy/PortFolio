class InstrumentTranslator {
  constructor() {
    this.instrumentRanges = {
      guitar: { min: 40, max: 88, tuning: ['E2', 'A2', 'D3', 'G3', 'B3', 'E4'] },
      piano: { min: 21, max: 108, tuning: null },
      bass: { min: 28, max: 55, tuning: ['E1', 'A1', 'D2', 'G2'] },
      drums: { min: 35, max: 81, tuning: null },
      violin: { min: 55, max: 103, tuning: ['G3', 'D4', 'A4', 'E5'] },
      saxophone: { min: 49, max: 82, tuning: null }
    };

    this.notes = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
  }

  noteToMidi(note) {
    const match = note.match(/([A-G]#?)(\d+)/);
    if (!match) return null;

    const noteName = match[1];
    const octave = parseInt(match[2]);
    const noteIndex = this.notes.indexOf(noteName);

    if (noteIndex === -1) return null;

    return (octave + 1) * 12 + noteIndex;
  }

  midiToNote(midi) {
    const octave = Math.floor(midi / 12) - 1;
    const noteIndex = midi % 12;
    return this.notes[noteIndex] + octave;
  }

  translateNote(note, sourceInstrument, targetInstrument) {
    const midiNote = this.noteToMidi(note);
    if (!midiNote) {
      return {
        success: false,
        error: 'Note invalide. Utilisez le format: C4, D#5, etc.'
      };
    }

    const sourceRange = this.instrumentRanges[sourceInstrument];
    const targetRange = this.instrumentRanges[targetInstrument];

    if (midiNote < sourceRange.min || midiNote > sourceRange.max) {
      return {
        success: false,
        error: `Note hors de la tessiture de ${sourceInstrument}`
      };
    }

    let translatedMidi = midiNote;

    if (midiNote < targetRange.min) {
      translatedMidi = midiNote + 12;
      while (translatedMidi < targetRange.min) {
        translatedMidi += 12;
      }
    } else if (midiNote > targetRange.max) {
      translatedMidi = midiNote - 12;
      while (translatedMidi > targetRange.max) {
        translatedMidi -= 12;
      }
    }

    const translatedNote = this.midiToNote(translatedMidi);
    const octaveShift = Math.floor((translatedMidi - midiNote) / 12);

    return {
      success: true,
      originalNote: note,
      translatedNote: translatedNote,
      originalMidi: midiNote,
      translatedMidi: translatedMidi,
      octaveShift: octaveShift,
      sourceInstrument: sourceInstrument,
      targetInstrument: targetInstrument
    };
  }

  translateChord(chord, sourceInstrument, targetInstrument) {
    const chordMatch = chord.match(/([A-G]#?)(\w*)/);
    if (!chordMatch) {
      return {
        success: false,
        error: 'Accord invalide'
      };
    }

    const root = chordMatch[1] + '4';
    const quality = chordMatch[2] || 'major';

    const result = this.translateNote(root, sourceInstrument, targetInstrument);

    if (!result.success) return result;

    const translatedRoot = result.translatedNote.replace(/\d+/, '');

    return {
      success: true,
      originalChord: chord,
      translatedChord: translatedRoot + quality,
      details: result
    };
  }

  getInstrumentInfo(instrument) {
    const range = this.instrumentRanges[instrument];
    return {
      name: instrument,
      lowestNote: this.midiToNote(range.min),
      highestNote: this.midiToNote(range.max),
      range: `${this.midiToNote(range.min)} - ${this.midiToNote(range.max)}`,
      tuning: range.tuning
    };
  }
}
