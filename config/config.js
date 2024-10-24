let domain = "https://omarelnaggar.runasp.net";
function getAccessTokenAsJson() {
    if (!localStorage.accessToken) {
        return null;
    }
    const token = localStorage.accessToken;

    function base64UrlDecode(str) {
        const base64 = str.replace(/-/g, '+').replace(/_/g, '/');
        return decodeURIComponent(atob(base64).split('').map(function(c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));
    }

    const parts = token.split('.');

    const payload = base64UrlDecode(parts[1]);

    return JSON.parse(payload);
}

let parsedToken = getAccessTokenAsJson();
let userId;
if (parsedToken) {
    userId = parsedToken.sub;
}