const {client_secret} = await fetch('/create-verification-session', {
    method: 'POST',
  }).then(r => r.json())