import { API_ROOT } from '../../../VisitorInfo/app-config'

// POSTs JSON to the API and resolves with the parsed body; throws on network/HTTP failure.
export const postJson = async (path, body) => {
    const response = await fetch(`${API_ROOT}${path}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
    });
    const data = await response.json().catch(() => ({}));
    if (!response.ok) {
        throw new Error(data.message || 'Something went wrong. Please try again.');
    }
    return data;
};
