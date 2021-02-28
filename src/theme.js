const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };
  const bodyRef = document.querySelector('body');
  const switchRef = document.querySelector('#theme-switch-toggle');
  const themeStorage = localStorage.getItem('theme');
 
  isThemeStorage();

  switchRef.addEventListener('change', themeChecked);

function themeChecked() {
  switchRef.checked ? darkTheme() : lightTheme();
}

function isThemeStorage() {
  themeStorage === 'Theme.DARK' ? darkTheme() : lightTheme();
  }

function darkTheme() {
  switchRef.checked = true;

  bodyRef.classList.add(Theme.DARK);
  bodyRef.classList.remove(Theme.LIGHT);
  localStorage.setItem('theme', 'Theme.DARK');
}
function lightTheme() {
  bodyRef.classList.add(Theme.LIGHT);
  bodyRef.classList.remove(Theme.DARK);
  localStorage.setItem('theme', 'Theme.LIGHT');
}