const hostname = typeof window !== 'undefined' && window.location ? window.location.hostname : '';

const isProduction = hostname === 'whatsgoodonmenu.com' || hostname === 'www.whatsgoodonmenu.com';

const backendHost = isProduction ? 'https://api.whatsgoodonmenu.com' : 'http://localhost:8080';

export const API_ROOT = `${backendHost}`;
