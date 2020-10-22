export function getCsrf() {
    return { 'X-CSRF-TOKEN' : document.querySelector(`meta[name="csrf-token"]`)
    .getAttribute('content') };
}