import { signUp, signIn, logOut } from './auth';

export const setupAuthUI = (auth, db) => {
  document.getElementById('app').innerHTML = `
    <div>
      <h1>Draft Foot</h1>
      <div id="auth-ui">
        <input type="email" id="email" placeholder="Email">
        <input type="password" id="password" placeholder="Password">
        <button id="sign-up">Sign Up</button>
        <button id="sign-in">Sign In</button>
        <button id="sign-out">Sign Out</button>
      </div>
    </div>
  `;

  document.getElementById('sign-up').addEventListener('click', () => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    signUp(auth, email, password);
  });

  document.getElementById('sign-in').addEventListener('click', () => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    signIn(auth, email, password);
  });

  document.getElementById('sign-out').addEventListener('click', () => {
    logOut(auth);
  });
};
