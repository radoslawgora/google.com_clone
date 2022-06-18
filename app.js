const searchButton = document.getElementById('search--button');
const luckyButton = document.getElementById('lucky--button');
const loginButton = document.getElementById('login__button');

function searchHandler() {
        console.log('Search button click');
    };

function luckyHandler() {
        console.log('Lucky search button click');
    };

function loginHandler() {
        console.log('Login button click');
    };

searchButton.addEventListener('click', searchHandler);
luckyButton.addEventListener('click', luckyHandler);
loginButton.addEventListener('click', loginHandler);