function sendMsg() {
    // Uncomment following line to get phone number
     let number = document.getElementById('name').value;
  //  let api = "https://api.simplepush.io/send";
    
    const url = 'https://api.simplepush.io/send';

const data = '{"key":"OJANA-MK","title":"namedjjd","msg":"hlw","event":"web"}';

const response = await fetch(url, {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    },
    body: data,
});

const text = await response.text();

alert(text);

    
}