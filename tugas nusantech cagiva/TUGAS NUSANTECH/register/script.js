function showLogin() {
    document.getElementById("loginForm").classList.add("active");
    document.getElementById("registerForm").classList.remove("active");
  }
  
  function showRegister() {
    document.getElementById("registerForm").classList.add("active");
    document.getElementById("loginForm").classList.remove("active");
  }
  
  function login(event) {
    event.preventDefault();
    const username = document.getElementById("loginUsername").value;
    const password = document.getElementById("loginPassword").value;
  
    alert(`Login successful for user: ${username}`);
  }
  
  function register(event) {
    event.preventDefault();
    const username = document.getElementById("registerUsername").value;
    const email = document.getElementById("registerEmail").value;
    const password = document.getElementById("registerPassword").value;
  
    alert(`Registration successful!\nUsername: ${username}\nEmail: ${email}`);
  }
  