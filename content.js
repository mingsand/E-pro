document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') {
    const canvas = document.getElementById('entryCanvas');
    if (document.fullscreenElement === canvas) {
      document.exitFullscreen();
    }
  }
});
