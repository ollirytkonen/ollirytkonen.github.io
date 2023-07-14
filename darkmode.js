let darkMode = localStorage.getItem('darkMode');

const darkModeToggle = document.querySelector('#icon');

const enableDarkMode = () => {
    document.body.classList.add('dark-theme');
    icon.src = "./images/light-mode.png";
    localStorage.setItem('darkMode', 'enabled');

}

const disableDarkMode = () => {
    document.body.classList.remove('dark-theme');
    icon.src = "./images/dark-mode.png";
    localStorage.setItem('darkMode', null);
    
}
if (darkMode === 'enabled') {
    enableDarkMode();
}

darkModeToggle.addEventListener('click', () => {
    darkMode = localStorage.getItem('darkMode');
    if(darkMode !== 'enabled'){
        enableDarkMode();
        
    }else{
        disableDarkMode();
        
    }
});