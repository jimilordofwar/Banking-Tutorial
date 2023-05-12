function showForm(formId) {
	let loginForm = document.getElementById('loginForm');
	let registerForm = document.getElementById('registerForm');
	if (formId == 'loginForm') {
		loginForm.style.display = 'flex';
		registerForm.style.display = 'none';
	}
	else {
		loginForm.style.display = 'none';
		registerForm.style.display = 'flex';
	}
}

function registerUser(username, password) {
  // Check if local storage is available
  if (typeof(Storage) !== "undefined") {
    // Retrieve existing users from local storage
    let users = JSON.parse(localStorage.getItem("users")) || [];
    
    // Create a new user object
    let newUser = {
      username: username,
      password: password
    };
    
    // Add the new user to the array
    users.push(newUser);
    
    // Store the updated users array back into local storage
    localStorage.setItem("users", JSON.stringify(users));
    
    console.log("User created successfully.");
  } else {
    console.log("Local storage is not supported in this browser.");
  }
}

function loginUser(username, password) {
  // Check if the browser supports local storage
  if (typeof Storage !== "undefined") {
    // Retrieve existing users from local storage
    let users = JSON.parse(localStorage.getItem("users")) || [];
    
    // Check if the user exists in the array
    let userExists = false;
    for (let i = 0; i < users.length; i++) {
      if (users[i].username === username && users[i].password === password) {
        userExists = true;
        break;
      }
    }
    
    if (userExists) {
      console.log("User login successful.");
      // Perform further actions after successful login
	  // use local storage to store loggedIn flag
	  localStorage.setItem("loggedIn", true);
    } else {
      console.log("Invalid username or email.");
      // Handle invalid login attempt
    }
  } else {
    console.log("Local storage is not supported in this browser.");
  }
}


function submitRegisterForm(event) {
  event.preventDefault();
  let username = document.getElementById('registerUsername').value;
  let email = document.getElementById('registerPassword').value;
  
  registerUser(username, email);

  console.log("Register form submitted.");
  // load users from local storage and console.log()
  let users = JSON.parse(localStorage.getItem("users")) || [];
  console.log(users);

}

// submit login form
function submitLoginForm(event) {
	event.preventDefault();
  let username = document.getElementById('loginUsername').value;
  let email = document.getElementById('loginPassword').value;
  
  loginUser(username, email);

  console.log("Login form submitted.");
}

function checkIfLoggedIn() {
	  // Check if the browser supports local storage
  if (typeof Storage !== "undefined") {
	// Retrieve existing users from local storage
	let loggedIn = JSON.parse(localStorage.getItem("loggedIn")) || false;
	
	if (loggedIn) {
	  console.log("User is logged in.");
	  // Perform further actions after successful login
	} else {
	  console.log("User is not logged in.");
	  // Handle invalid login attempt
	}
  } else {
	console.log("Local storage is not supported in this browser.");
  }
}

checkIfLoggedIn();