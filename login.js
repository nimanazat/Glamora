document.addEventListener("DOMContentLoaded", () => {
    const emailInput = document.getElementById("login-email");
    const passInput = document.getElementById("login-password");
    const loginBtn = document.getElementById("login-btn");
    const errorBox = document.getElementById("login-error");
  
    loginBtn.addEventListener("click", async () => {
      const email = emailInput.value.trim();
      const password = passInput.value.trim();
  
      errorBox.textContent = "";
  
      if (!email || !password) {
        errorBox.textContent = "Please enter both email and password.";
        return;
      }
  
      try {
        await firebase.auth().signInWithEmailAndPassword(email, password);
        window.location.href = "profile.html";
      } catch (err) {
        errorBox.textContent = err.message;
      }
    });
  });
  