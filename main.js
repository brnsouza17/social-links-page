const checkbox = document.getElementById("theme-switcher");

function changeTheme() {
    document.body.classList.toggle('light');
}

checkbox.addEventListener('change', changeTheme);
