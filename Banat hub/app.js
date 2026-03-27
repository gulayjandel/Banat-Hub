// Create AngularJS Application
var app = angular.module('banatHubApp', []);

// Login Controller
app.controller('LoginController', function($scope, $http) {
    
    // Initialize credentials object
    $scope.credentials = {};
    $scope.successMessage = '';
    $scope.errorMessage = '';

    // Submit Login Function
    $scope.submitLogin = function() {
        // Clear previous messages
        $scope.successMessage = '';
        $scope.errorMessage = '';

        // Validate credentials
        if (!$scope.credentials.email || !$scope.credentials.password) {
            $scope.errorMessage = 'Please fill in all fields';
            return;
        }

        // Log the credentials (in production, this would send to a backend)
        console.log('Login attempt:', $scope.credentials);

        // Simulate API call (replace with actual backend call)
        var loginData = {
            email: $scope.credentials.email,
            password: $scope.credentials.password
        };

        // Uncomment below to make actual API calls:
        // $http.post('http://your-api.com/login', loginData).then(
        //     function(response) {
        //         $scope.successMessage = 'Login successful! Redirecting...';
        //         // Redirect after 2 seconds
        //         setTimeout(function() {
        //             window.location.href = 'dashboard.html';
        //         }, 2000);
        //     },
        //     function(error) {
        //         $scope.errorMessage = error.data.message || 'Login failed. Please try again.';
        //     }
        // );

        // Temporary success message
        $scope.successMessage = 'Login attempt with: ' + $scope.credentials.email;
    };

    // Sign Up Function
    $scope.goToSignup = function() {
        alert('Sign up page to be created');
        // Redirect when signup page is ready:
        // window.location.href = 'signup.html';
    };

    // Forgot Password Function
    $scope.forgotPassword = function() {
        alert('Forgot password page to be created');
        // Redirect when forgot password page is ready:
        // window.location.href = 'forgot-password.html';
    };

});
