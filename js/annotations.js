var notes = [
  {
   "begin": "0.000", 
   "children": [], 
   "end": "2.680", 
   "id": "1", 
   "language": "eng", 
   "lines": [
    "1"
   ]
  }

];

var actions = [
  {
    class: 'fa.fa-arrow-circle-down',
    title: 'Reduzir o tempo final da anotação em 0.010s',
    action: (annotation, i, annotations, opts) => {
      var next;
      var delta = 0.010;
      annotation.end -= delta;

      if (opts.linkEndpoints) {
        next = annotations[i + 1];
        next && (next.start -= delta);
      }
    }
  },
  {
    class: 'fa.fa-arrow-circle-up',
    title: 'Aumentar o tempo final da anotação em 0.010s',
    action: (annotation, i, annotations, opts) => {
      var next;
      var delta = 0.010;
      annotation.end += delta;

      if (opts.linkEndpoints) {
        next = annotations[i + 1];
        next && (next.start += delta);
      }
    }
  },
  {
    /*class: 'fa.fa-scissors',
    title: 'Split annotation in half',
    action: (annotation, i, annotations) => {
      const halfDuration = (annotation.end - annotation.start) / 2;

      annotations.splice(i + 1, 1, {
        id: 'test',
        start: annotation.end - halfDuration,
        end: annotation.end,
        lines: ['----'],
        lang: 'en',
      });

      annotation.end = annotation.start + halfDuration;
    }*/
  },
  {
    class: 'fa.fa-pencil-square-o',
    title: 'Adicionar mais anotações',
    action: (annotation, i, annotations) => {
        annotations.splice(i + 1, 0, {
          id: 'test',
          start: annotation.end + 0.001,
          end: annotation.end + 1.0,
          lines: ['----'],
          lang: 'en',
        });
    }
  },
  {
    class: 'fa.fa-trash',
    title: 'Apagar anotação',
    action: (annotation, i, annotations) => {
      if (i > 0){
        annotations.splice(i, 1);
      }
    }
  }
];

var playlist = WaveformPlaylist.init({
  container: document.getElementById("playlist"),
  timescale: true,
  state: 'select',
  samplesPerPixel: 1024,
  colors: {
    waveOutlineColor: '#E0EFF1',
    timeColor: 'grey',
    fadeColor: 'black'
  },
  annotationList: {
    annotations: notes,
    controls: actions,
    editable: true,
    isContinuousPlay: false,
    linkEndpoints: true
  }
});

playlist.load([
  {
    src: "media/audio/cidaeadao.mp3"
  }
]).then(function() {
  //can do stuff with the playlist.
});
