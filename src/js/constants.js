// export const API_KEY = prompt("Please enter 8 didgit code", "12345678")+'-4316377fda5f0b6c1b052f095'; //22594439
export const API_KEY = '22594439-4316377fda5f0b6c1b052f095'; //22594439
export const API_URL = 'https://pixabay.com/api/videos/';
export let HREF = document.URL.split('?');
if (HREF[1]) {
    let string = decodeURI(HREF[1].split('=')[1]).trim();
    HREF[1] = string.split('#')[0];
    HREF[2] = HREF[1].split('+').join(' ');
}