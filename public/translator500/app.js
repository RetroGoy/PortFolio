const translator = new InstrumentTranslator();

const sourceSelect = document.getElementById('source-instrument');
const targetSelect = document.getElementById('target-instrument');
const noteInput = document.getElementById('note-input');
const translateBtn = document.getElementById('translate-btn');
const resultSection = document.getElementById('result-section');
const resultContent = document.getElementById('result-content');
const technicalInfo = document.getElementById('technical-info');

function displayResult(result) {
  resultSection.style.display = 'block';

  if (!result.success) {
    resultContent.innerHTML = `<span style="color: #ff3333;">❌ ${result.error}</span>`;
    technicalInfo.innerHTML = '';
    return;
  }

  if (result.translatedNote) {
    resultContent.innerHTML = `✓ ${result.translatedNote}`;

    const sourceInfo = translator.getInstrumentInfo(result.sourceInstrument);
    const targetInfo = translator.getInstrumentInfo(result.targetInstrument);

    let infoHTML = `
      <div><strong>Note originale:</strong> ${result.originalNote} (MIDI: ${result.originalMidi})</div>
      <div><strong>Note traduite:</strong> ${result.translatedNote} (MIDI: ${result.translatedMidi})</div>
    `;

    if (result.octaveShift !== 0) {
      const direction = result.octaveShift > 0 ? 'haut' : 'bas';
      infoHTML += `<div><strong>Transposition:</strong> ${Math.abs(result.octaveShift)} octave(s) vers le ${direction}</div>`;
    }

    infoHTML += `
      <div style="margin-top: 10px;">
        <strong>${sourceInfo.name}:</strong> ${sourceInfo.range}
        ${sourceInfo.tuning ? ` | Accordage: ${sourceInfo.tuning.join(', ')}` : ''}
      </div>
      <div>
        <strong>${targetInfo.name}:</strong> ${targetInfo.range}
        ${targetInfo.tuning ? ` | Accordage: ${targetInfo.tuning.join(', ')}` : ''}
      </div>
    `;

    technicalInfo.innerHTML = infoHTML;
  } else if (result.translatedChord) {
    resultContent.innerHTML = `✓ ${result.translatedChord}`;

    let infoHTML = `
      <div><strong>Accord original:</strong> ${result.originalChord}</div>
      <div><strong>Accord traduit:</strong> ${result.translatedChord}</div>
    `;

    if (result.details.octaveShift !== 0) {
      const direction = result.details.octaveShift > 0 ? 'haut' : 'bas';
      infoHTML += `<div><strong>Transposition:</strong> ${Math.abs(result.details.octaveShift)} octave(s) vers le ${direction}</div>`;
    }

    technicalInfo.innerHTML = infoHTML;
  }
}

function translate() {
  const source = sourceSelect.value;
  const target = targetSelect.value;
  const input = noteInput.value.trim();

  if (!input) {
    resultContent.innerHTML = '<span style="color: #ff3333;">❌ Veuillez entrer une note ou un accord</span>';
    technicalInfo.innerHTML = '';
    return;
  }

  if (source === target) {
    resultContent.innerHTML = '<span style="color: #ff3333;">❌ Choisissez deux instruments différents</span>';
    technicalInfo.innerHTML = '';
    return;
  }

  const isChord = !/[0-9]/.test(input);

  let result;
  if (isChord) {
    result = translator.translateChord(input, source, target);
  } else {
    result = translator.translateNote(input, source, target);
  }

  displayResult(result);
}

translateBtn.addEventListener('click', translate);

noteInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    translate();
  }
});

const presetBtns = document.querySelectorAll('.preset-btn');
presetBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const source = btn.dataset.source;
    const target = btn.dataset.target;
    const note = btn.dataset.note;

    sourceSelect.value = source;
    targetSelect.value = target;
    noteInput.value = note;

    translate();
  });
});
