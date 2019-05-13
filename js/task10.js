// Create a password checker from a prompt which will check to see is a password is strong enough. Min 5 characters, max 20, 1 number


function validatePassword(){
  var password = prmopt("enter your password");
  var valid = password.value.length >=5;
  if (!valid) {
    console.log("Password must be at least 5 characters");
  }
  return valid;
}
