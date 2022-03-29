const { hash } = window.location;

const message = atob(hash.replace('#',''));

if(message){
    document.querySelector('#message-form').classList.add('hide');
    document.querySelector('#message-show').classList.remove('hide');

    document.querySelector('#message-header').innerHTML = message;
}

document.querySelector('form').addEventListener('submit',event => {
    event.preventDefault();

    document.querySelector('#message-form').classList.add('hide');
    document.querySelector('#link-form').classList.remove('hide');

    const input = document.querySelector('#message-input');
    const encrypted = btoa(input.value);
    const linkInput = document.querySelector('#link-input');

    linkInput.value = `${window.location}#${encrypted}`;
    linkInput.select();
});

//// base64 Encoding is a an encryption methodology 
/// in javascript we already have a builtin function that encrypt the string to base64 Encoding it Called :
/// btoa(); from string to Base64.
/// atob(); from Base64 to string.