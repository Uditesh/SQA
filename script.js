const urlParams = new URLSearchParams(window.location.search);
const userName = urlParams.get('un');
const writeUp = (data) => {
    const dt = data.results[0];
    const txt = `Nice to see you again ${userName}! Hope everything is well in ${dt.location.city}.<br>We'll give you a call some time at <span style="white-space:pre">${dt.cell}</span>`;
    document.getElementById("content").innerHTML = txt;
};
if (userName === 'Jimmy') {
    fetch('https://randomuser.me/api/')
        .then(response => response.json())
        .then(data => writeUp(data));
} else {
    const us = localStorage.getItem('username');
    const pw = localStorage.getItem('pswd');
    const txt = `Thanks ${us}, your password ${pw} is safe here.`;
    document.getElementById("content").innerHTML = txt;
};