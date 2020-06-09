let backendHost;

const hostname = window && window.location && window.location.hostname;

if(hostname === 'whatsgoodonmenu.com') {
  backendHost = 'https://api.whatsgoodonmenu.com';
} else {
  backendHost = 'http://localhost:8080';
}

export const API_ROOT = `${backendHost}`;