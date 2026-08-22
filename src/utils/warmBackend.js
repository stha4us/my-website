// src/utils/warmBackend.js
const BASE_URL = import.meta.env.VITE_API_BASE_URL;
const CACHE_KEY = 'backend_warmed_at';
const WARM_TTL  = 14 * 60 * 1000; // 14 minutes

/**
 * Ping the backend health endpoint silently in the background.
 * Skips the ping if we already did one within the last 14 minutes.
 */
export function warmBackend() {
  try {
    const last = localStorage.getItem(CACHE_KEY);
    if (last && Date.now() - parseInt(last) < WARM_TTL) {
      return; // already warm, skip
    }
  } catch {
    // localStorage unavailable: proceed with ping
  }

  fetch(`${BASE_URL}/api/health/`, {
    method: 'GET',
    signal: AbortSignal.timeout(10000), // don't hang forever
  })
    .then(() => {
      try {
        localStorage.setItem(CACHE_KEY, Date.now().toString());
      } catch { /* ignore */ }
    })
    .catch(() => {
      // Silently ignore: this is best-effort warming only
    });
}