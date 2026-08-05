const player = document.querySelector('midi-player');
const midiFile = document.getElementById('midiFile');
const container = document.querySelector('#orch');
const imagines = container.querySelectorAll('img');

midiFile.addEventListener('input', () => {
    var file = midiFile.files[0];
    if (!file) return;
    player.src = URL.createObjectURL(file);
});

player.addEventListener('load', () => {
  console.log('READY');
	imagines.forEach(img => {
	  img.style.display = 'none';
    });
});

player.addEventListener('start', () => {
  console.log('GO');
});

player.addEventListener('note', (event) => {
  //console.log(event.detail.note);
  let thing;
  if (event.detail.note.isDrum) {
	  thing = document.getElementById('battery')
  } else {
	  thing = document.getElementById(String(event.detail.note.program))
  }
  if (!thing) return; 
  thing.style.display = 'inline';
  thing.style.bottom = parseInt(thing.style.bottom, 10) * -1 + 8 + "px";
});

player.addEventListener('stop', (event) => {
  if (event.detail && event.detail.finished) {
	imagines.forEach(img => {
	  img.style.display = 'none';
	});
  } else {
  }
});
