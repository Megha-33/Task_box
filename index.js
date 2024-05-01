

function loginWithFacebook() {
    FB.login(function(response) {
        if (response.authResponse) {
            // User has logged in successfully
            console.log('Welcome! Fetching your information....');
            // Now you can fetch user information
            fetchUserInfo();
        } else {
            // User cancelled login or did not fully authorize
            console.log('User cancelled login or did not fully authorize.');
        }
    });
}

function fetchUserInfo() {
    FB.api('/me', {fields: 'name, email'}, function(response) {
        // Process the user's information
        var userName = response.name;
        var userEmail = response.email;
        // Display the information or perform further actions
        document.getElementById("profile").innerHTML = "Good to see you, " + userName + ". Your email address is " + userEmail;
    });
}

// FB.api('/me', { fields: 'name, email' }, function(response) {
//     // Handle the response from the Facebook Graph API
//     if (response && !response.error) {
//         // User information retrieved successfully
//         var userName = response.name;
//         var userEmail = response.email;
//         // Do something with the user's information, such as displaying it on the webpage
//         document.getElementById('user-name').innerText = userName;
//         document.getElementById('user-email').innerText = userEmail;
//     } else {
//         // Error occurred while fetching user information
//         console.log('Error fetching user information:', response.error);
//     }
// });




FB.getLoginStatus(function(response) {
    if (response.status === 'connected') {
      // the user is logged in and has authenticated your
      // app, and response.authResponse supplies
      // the user's ID, a valid access token, a signed
      // request, and the time the access token 
      // and signed request each expire
      var uid = response.authResponse.userID;
      var accessToken = response.authResponse.accessToken;
    } else if (response.status === 'not_authorized') {
      // the user is logged in to Facebook, 
      // but has not authenticated your app
    } else {
      // the user isn't logged in to Facebook.
    }
   });
   FB.getLoginStatus()

function logoutFromFacebook() {
    FB.logout(function(response) {
        // User is now logged out
        console.log('User is logged out.');
    });
}
