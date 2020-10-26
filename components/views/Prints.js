export default () => `
<main id="main-holder">
  <h1 id="login">Login here!</h1>

  <div id="login-error-msg-holder">
    <p id="login-error-msg">Invalid username<span id="error-msg-second-line">or password</span></p>

    <form id="login">
      <input type="text" name="username" id="username-field" class="login-form-field" placeholder="Username">
      <input type="password" name="password" id="password-field" class="login-form-field" placeholder="Password">
      <input type="submit" value="Login" id="login-form-submit">
  </form>

`;
