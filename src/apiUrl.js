let apiUrl = "";

if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
    apiUrl = "http://localhost:8000";
} else {
    apiUrl = "https://api-ihe.herokuapp.com";
}

export default apiUrl;