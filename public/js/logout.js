const logout = async () => {
  const response = await fetch('/api/users/logout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    document.location.replace('/');
  } else {
    alert(response.statusText);
  }
};

const logoutBtns = document.getElementsByClassName('logout')

for (let button of logoutBtns) {
  button.addEventListener('click', logout)
}
// document.querySelector('#logout').addEventListener('click', logout);
