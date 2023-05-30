const button = document.getElementById("metamap-button");

// setup callbacks
button.addEventListener('mati:loaded', ({ detail }) => {
  console.log('loaded payload', detail)
});
