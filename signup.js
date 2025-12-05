document.addEventListener("DOMContentLoaded", () => {
  
    const emailInput = document.getElementById("signup-email");
    const passInput = document.getElementById("signup-password");
    const signupBtn = document.getElementById("signup-btn");
    const errorBox = document.getElementById("signup-error");
  
    signupBtn.addEventListener("click", async () => {
  
      const email = emailInput.value.trim();
      const password = passInput.value.trim();
  
      errorBox.textContent = "";
  
      if (!email || !password) {
        errorBox.textContent = "Please enter both email and password.";
        return;
      }
  
      try {
        await firebase.auth().createUserWithEmailAndPassword(email, password);
        // Success → Go to profile
        window.location.href = "profile.html";
      } 
      catch (err) {
        errorBox.textContent = err.message;
      }
  
    });
  
  });
  