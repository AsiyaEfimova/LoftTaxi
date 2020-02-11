export const postLogin = request =>
    fetch('https://loft-taxi.glitch.me/auth', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(request)
    })
    .then(response => response.json());

export const postRegister = request =>
    fetch('https://loft-taxi.glitch.me/register', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(request)
    })
        .then(response => response.json());

export const postCard = request =>
    fetch('https://loft-taxi.glitch.me/card', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(request)
    })
        .then(response => response.json());

export const fetchCard = token =>
    fetch(`https://loft-taxi.glitch.me/card?token=${token}`, {
        method: 'GET',
        headers: {'Content-Type': 'application/json'}
    })
        .then(response => response.json());

export const fetchAddressList = ()=>
    fetch('https://loft-taxi.glitch.me/addressList', {
        method: 'GET',
        headers: {'Content-Type': 'application/json'}
    })
        .then(response => response.json());

export const fetchRoute = (address1, address2)=>
    fetch(`https://loft-taxi.glitch.me/route?address1=${address1}&address2=${address2}`, {
        method: 'GET',
        headers: {'Content-Type': 'application/json'}
    })
        .then(response => response.json());